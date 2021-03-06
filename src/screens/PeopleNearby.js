/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View, StyleSheet, StatusBar, FlatList, Platform
} from 'react-native';


import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import { responsiveSize, iPhoneSE } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import Typography from '../components/typography/Typography';
import PersonCard from '../components/person/person-card/PersonCard';
import Header from '../components/header/Header';
import { actGetPeopleNearby } from '../actions/peopleNearby';
import { actGetUser } from '../actions/users';


import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';

import colors from '../theme/palette';

const styles = StyleSheet.create( {
	container: {
		flex: 1,
		backgroundColor: colors.paleGreyThree
	},
	subContainer: {
		flex: 1,
		marginTop: responsiveSize( Platform.OS === 'ios' ? 20 : 0 ),
		marginHorizontal: responsiveSize( 5 )
	},
	titleContainer: {
		marginLeft: responsiveSize( 10 )
	},
	flatList: {
		flex: 1,
		marginTop: responsiveSize( 15 ),
		marginBottom: responsiveSize( 40 ),
		alignSelf: iPhoneSE() ? 'auto' : 'center'
	},
	invisible: {
		backgroundColor: 'transparent'
	}
} );

const iconFilter = require( '../assets/images/icons/filterSmall.png' );

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
class PeopleNearby extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	componentWillMount() {
		const { getPeopleNearby } = this.props; // eslint-disable-line react/prop-types
		getPeopleNearby();
	}

	_people = () => {
		const skills = [
			new ComputedSkill( new Skill( 1, 'Designer', null ), 0 ),
			new ComputedSkill( new Skill( 2, 'Photographer', null ), 0 )
		];

		const people = [
			new Person( 1, 'Jhon', 'Doe', 'Designer', require( '../assets/images/nearby/jhonDoe.png' ), skills, null, '', '', [], PersonState.AVAILABLE ),
			new Person( 2, 'Frank', 'Doe', 'Product Designer', require( '../assets/images/nearby/frankDoe.png' ), skills, null, '', '', [], PersonState.AVAILABLE ),
			new Person(	3, 'Stephanie', 'Doe', 'Product Designer', require( '../assets/images/nearby/stephDoe.png' ), skills, null, '', '', [], PersonState.AVAILABLE ),
			new Person( 4, 'MJ', 'Doe', 'Product Designer', require( '../assets/images/nearby/mjDoe.png' ), skills, null, '', '', [], PersonState.AVAILABLE ),
			new Person( 5, 'Jhon', 'Doe', 'Designer', require( '../assets/images/nearby/jhonDoe.png' ), skills, null, '', '', [], PersonState.AVAILABLE )
		];

		return people;
	}

	_buttonIcons = () => [
		{ id: 1, icon: iconFilter, onPress: this._filter }
	];

	_onUserPress = ( userId ) => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( userId );
		// this.setState( { onGetSearchUserData: true } );
		navigator.push( { screen: 'userProfile' } );
	}

	 _onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	 // eslint-disable-next-line class-methods-use-this
	 _filter() {
		// eslint-disable-next-line no-console
			console.log( 'Filter actions' );
	}


	render() {
		const {
			navigator: _navigator,
			people: { peopleNearby: people }
		} = this.props;

		const numberOfColumns = iPhoneSE() ? 1 : 2;

		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>
					<Header
						onPressBack={this._onPressBack.bind( this )}
						buttonIcons={this._buttonIcons()}
					/>
					<View style={styles.titleContainer}>
						<Typography
							variant="semiLargeTitle"
							color="darkSkyBlue"
							textAlign="left"
						>
							{'People Nearby'}
						</Typography>
					</View>

					<FlatList
						style={styles.flatList}
						vertical
						numColumns={numberOfColumns}
						data={formatData( people, numberOfColumns )}
						keyExtractor={item => item.id}
						renderItem={( { item } ) => ( item.empty ? (
							<View style={styles.invisible} />
						) : (
							<PersonCard
								person={item.person}
								rating={item.rating}
								meetingsCount={item.meetingsCount}
								distance={item.distance}
								onUserPress={this._onUserPress}
							/>
						) )}
					/>

				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

PeopleNearby.propTypes = {
	navigator: NavigatorPropType.isRequired,
	people: PropTypes.any.isRequired,
	getPeopleNearby: PropTypes.func.isRequired
};

const mapStateToProps = state => ( {
	people: state.people
} );

const mapDispatchProps = dispatch => bindActionCreators( {
	getPeopleNearby: actGetPeopleNearby,
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchProps )( PeopleNearby ) );
