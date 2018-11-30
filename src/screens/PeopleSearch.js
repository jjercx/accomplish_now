/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
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

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { HTP, WTP, iPhoneSE } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import PersonCard from '../components/person/person-card/PersonCard';
import Header from '../components/people-search/Header';
import { actGetPeopleSearchResults } from '../actions/peopleSearch';

import colors from '../theme/palette';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: colors.white
	},
	subContainer: {
		flex: 1,
		marginTop: hpd( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginHorizontal: wpd( WTP( 5 ) )
	},
	headerContainer: {
		height: hpd( HTP( 60 ) )
	},
	resultsContainer: {
		backgroundColor: colors.paleGreyThree,
		width: '100%',
		flex: 1,
		paddingTop: hpd( HTP( 5 ) ),
		marginBottom: hpd( HTP( 5 ) )
	},
	flatList: {
		width: '100%',
		alignSelf: iPhoneSE() ? 'auto' : 'center',
		justifyContent: 'space-between',
		paddingBottom: hpd( HTP( 30 ) )
	},
	invisible: {
		backgroundColor: 'transparent'
	}
} );

const formatData = ( items, numberOfColumns ) => {
	const numberOfFullItems = Math.floor( items.length, numberOfColumns );
	let numberOfItemsLastRow = items.length - ( numberOfFullItems * numberOfColumns );

	while ( ( numberOfItemsLastRow < numberOfColumns ) ) {
		items.push( {
			id: `blank-${numberOfItemsLastRow}`,
			empty: true
		} );

		numberOfItemsLastRow += 1;
	}

	return items;
};

/* eslint-disable react/prefer-stateless-function */
class PeopleSearch extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );

		this._onPressBack = this._onPressBack.bind( this );
		this._onPressFilter = this._onPressFilter.bind( this );
		this._doSearch = this._doSearch.bind( this );
	}

	_cardFullWidth = ( index, people ) => ( people.length % 2 !== 0 )
		&& ( index === people.length - 1 )

		// eslint-disable-next-line class-methods-use-this
		_onPressFilter() {
			// eslint-disable-next-line no-console
				console.log( 'Filter actions' );
		}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_doSearch( searchText ) {
		const { getPeopleSearchResults } = this.props;
		getPeopleSearchResults( searchText );
	}

	render() {
		let {
			navigator: _navigator,
			searchResults: people,
			isFetching: isSearching
		} = this.props;

		const numberOfColumns = iPhoneSE() ? 1 : 2;
		const realPeople = people.slice();

		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>
					<View style={styles.headerContainer}>
						<Header
							onPressBack={this._onPressBack.bind( this )}
							onPressSetting={this._onPressFilter.bind( this )}
							onSearchSubmit={this._doSearch.bind( this )}
						/>
					</View>

					{isSearching ? <ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} /> : (
						<View style={styles.resultsContainer}>
							<FlatList
								contentContainerStyle={styles.flatList}
								vertical
								numColumns={numberOfColumns}
								data={formatData( people, numberOfColumns )}
								// keyExtractor={item => item.id}
								keyExtractor={() => Math.random()}
								renderItem={( { item, index } ) => ( ( item.empty )
								? <View style={styles.invisible} />
								: (
									<PersonCard
										fullWidth={this._cardFullWidth( index, realPeople )}
										person={item.person}
										rating={item.rating}
										meetingsCount={item.meetingsCount}
										distance={item.distance}
									/>
								) )}
							/>
						</View>
				)}
				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

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
	getPeopleSearchResults: actGetPeopleSearchResults
}, dispatch );


export default compose( connect( mapStateToProps, mapDispatchProps )( PeopleSearch ) );
