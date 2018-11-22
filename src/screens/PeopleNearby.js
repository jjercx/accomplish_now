/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
import React, { Component } from 'react';
import {
	View, StyleSheet, StatusBar, FlatList, Platform
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
import Typography from '../components/typography/Typography';
import PersonCard from '../components/person/person-card/PersonCard';
import Header from '../components/header/Header';
import { actGetPeopleNerbay } from '../actions/peopleNearby';

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
		marginTop: hpd( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginHorizontal: wpd( WTP( 5 ) )
	},
	titleContainer: {
		marginLeft: wpd( WTP( 10 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hpd( HTP( 15 ) ),
		marginBottom: hpd( HTP( 40 ) ),
		alignSelf: iPhoneSE() ? 'auto' : 'center'
	},
	invisible: {
		backgroundColor: 'transparent'
	}
} );

const iconFiltter = require( '../assets/images/icons/filterSmall.png' );

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
		console.log( 'Props', this.props );
		const { getPeopleNearby } = this.props;
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

	_keyExtractor = item => item.id;

	_buttonIcons = () => [
		{ id: 1, icon: iconFiltter, onPress: this._filter }
	 ];

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
		const { navigator: _navigator, peopleNearby: { people } } = this.props;


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
						keyExtractor={this._keyExtractor}
						  renderItem={( { item } ) => ( ( item.empty ) ? (
							<View style={styles.invisible} />
						) : (
							<PersonCard
								person={item.person}
								rating={item.rating}
								meetingsCount={item.meetingsCount}
								distance={item.distance}
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
	navigator: NavigatorPropType.isRequired
};

const mapStateToProps = state => ( {
	peopleNearby: state.peopleNearby
} );

const mapDispatchProps = dispatch => bindActionCreators(
	{
		getPeopleNearby: actGetPeopleNerbay
	}, dispatch
);


export default compose( connect( mapStateToProps, mapDispatchProps )( PeopleNearby ) );
