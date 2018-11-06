import React, { Component } from 'react';
import {
	View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Platform
} from 'react-native';

import {
	heightPercentageToDP as hpd,
	widthPercentageToDP as wpd
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import Typography from '../components/typography/Typography';
import PersonCard from '../components/person/person-card/PersonCard';

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
	headerButtonsContainer: {
		flexDirection: 'row',
		marginTop: hpd( HTP( 10 ) ),
		marginLeft: wpd( WTP( 10 ) )
	},
	headerButtonAccomplishContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	buttonAccomplish: {
		paddingVertical: hpd( HTP( 5 ) ),
		paddingHorizontal: wpd( WTP( 5 ) )
	},
	headerButtonFiltersContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		marginRight: wpd( WTP( 10 ) )
	},
	titleContainer: {
		marginLeft: wpd( WTP( 10 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hpd( HTP( 15 ) ),
		marginBottom: hpd( HTP( 40 ) ),
		alignSelf: 'center'
	},
	invisible: {
		backgroundColor: 'transparent'
	}
} );

const logoAccomplish = require( '../assets/images/messages/isoGray.png' );

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

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { navigator: _navigator } = this.props;

		const rating = 4.5;
		const meetingCount = 562;
		const distance = 1.5;

		const numberOfColumns = 2;

		return (
			<View style={styles.container}>
				<View style={styles.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>

					<View style={styles.headerButtonsContainer}>
						<View style={styles.headerButtonAccomplishContainer}>
							<TouchableOpacity onPress={() => this._onPressBack()}>
								<View style={styles.buttonAccomplish}>
									<Image
										style={styles.logo}
										source={logoAccomplish}
									/>
								</View>
							</TouchableOpacity>
						</View>
						<View style={styles.headerButtonFiltersContainer}>
							<Image source={require( '../assets/images/icons/filter.png' )} />
						</View>
					</View>

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
						data={formatData( this._people(), numberOfColumns )}
						keyExtractor={this._keyExtractor}
						renderItem={( { item } ) => ( ( item.empty ) ? (
							<View style={styles.invisible} />
						) : (
							<PersonCard
								person={item}
								rating={rating}
								meetingsCount={meetingCount}
								distance={distance}
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

export default PeopleNearby;
