import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	StatusBar,
	FlatList,
	Platform,
	ActivityIndicator
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { responsiveSize, iPhoneSE } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import PersonCard from '../components/person/person-card/PersonCard';
import Header from '../components/people-search/Header';
import { actGetPeopleSearchResults } from '../actions/peopleSearch';
import { actGetUser } from '../actions/users';
import Typography from '../components/typography/Typography';
import FilterPeopleModal from './FilterPeople';

import colors from '../theme/palette';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: colors.white
	},
	subContainer: {
		flex: 1,
		marginTop: responsiveSize( Platform.OS === 'ios' ? 20 : 0 )
	},
	headerContainer: {
		height: responsiveSize( 60 )
	},
	resultsContainer: {
		backgroundColor: colors.paleGreyThree,
		flex: 1
	},
	flatList: {
		// flex: 1,
		marginTop: responsiveSize( 5 ),
		alignItems: 'center',
		paddingBottom: responsiveSize( 40 )
	},
	invisible: {
		backgroundColor: 'transparent'
	},
	errorContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 40,
		marginBottom: 70,
		opacity: 0.3
	},
	spinnerContainer: {
		flex: 1
	}
} );

class PeopleSearch extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		isError: false,
		// paidMeetings: null,
		currentlyAvailable: null,
		filterDistance: null
	}

	componentDidMount() {
		const { getPeopleSearchResults } = this.props;
		getPeopleSearchResults( '' );
	}

	_cardFullWidth = ( index, people ) => ( people.length % 2 !== 0 )
		&& ( index === people.length - 1 )

	_onPressFilter = () => {
		this.modal.open();
	}

	_onPressBack = () => {
		const { navigator } = this.props;
		navigator.pop();
	}

	_doSearch = ( searchText ) => {
		this.searchOnce = true;
		if ( searchText.length < 3 ) {
			this.setState( { isError: 'The search text must contain at least three letters' } );
		} else {
			this.setState( { isError: '' }, () => {
				const { getPeopleSearchResults } = this.props;
				getPeopleSearchResults( searchText );
			} );
		}
	}

	filterPeople = ( prevPeople ) => {
		const {
			filterDistance,
			currentlyAvailable
			// paidMeetings,
		} = this.state;
		return prevPeople
			.filter( person => ( filterDistance === null || ( person.distance <= filterDistance ) ) )
			.filter( person => ( currentlyAvailable === null
				|| ( person.person.state === currentlyAvailable ) ) );

		// TODO: when people real data connect this
		// .filter( person => ( paidMeetings === null || person.paidMeetings === paidMeetings ) )
	}

	_onUserPress = ( userId ) => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( userId );
		navigator.push( { screen: 'userProfile' } );
	}

	_onSubmit = filterData => this.setState( filterData );

	render() {
		let {
			navigator: _navigator,
			isFetching: isSearching,
			searchResults: people
		} = this.props;

		const { isError } = this.state;
		people = this.filterPeople( people );

		/* eslint-disable no-nested-ternary */
		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>
					<View style={styles.headerContainer}>
						<Header
							onPressBack={this._onPressBack}
							onPressSetting={this._onPressFilter}
							onSearchSubmit={this._doSearch}
						/>
					</View>

					{isError || people.length === 0 ? (
						<View style={styles.errorContainer}>
							<Typography variant="midTitle" color="black">
								{isError || ( !this.searchOnce ? 'Search people by name or skill …' : 'No matches were found' )}
							</Typography>
						</View>
					 ) : isSearching ? (
						<View style={styles.spinnerContainer}>
							<ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} />
						</View>
					) : (
						<View style={styles.resultsContainer}>
							<FlatList
								contentContainerStyle={styles.flatList}
								vertical
								numColumns={iPhoneSE() ? 1 : 2}
								data={people}
								keyExtractor={item => item.id}
								renderItem={( { item, index } ) => ( ( item.empty )
									? <View style={styles.invisible} />
									: (
										<PersonCard
											fullWidth={this._cardFullWidth( index, people )}
											person={item.person}
											rating={item.rating}
											meetingsCount={item.meetingsCount}
											distance={item.distance}
											onUserPress={personId => this._onUserPress( personId )}
										/>
									) )}
							/>
						</View>
					)}
				</View>
				<NavBar navigator={_navigator} />
				<FilterPeopleModal
					ref={( ref ) => { this.modal = ref; }}
					onSubmit={this._onSubmit}
				/>
			</View>
		);
		/* eslint-enable no-nested-ternary */
	}
}

PeopleSearch.propTypes = {
	navigator: NavigatorPropType.isRequired,
	searchResults: PropTypes.arrayOf( PropTypes.any ).isRequired,
	getPeopleSearchResults: PropTypes.func.isRequired,
	isFetching: PropTypes.bool.isRequired
};

const mapStateToProps = state => ( {
	searchResults: state.people.searchResults,
	isFetching: state.people.isFetching
} );

const mapDispatchProps = dispatch => bindActionCreators( {
	getPeopleSearchResults: actGetPeopleSearchResults,
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchProps )( PeopleSearch ) );
