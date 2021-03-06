import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, StyleSheet } from 'react-native';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Firebase from 'react-native-firebase';
import { responsiveSize } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import Spacing from '../components/spacing/Spacing';
import NavBar from '../components/navbar/NavBar';
import colors from '../theme/palette';
import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';
import AboutInfo from '../entities/AboutInfo';
import Header from '../components/user-profile/header/Header';
import UserCard from '../components/user-profile/user-card/UserCard';
import ActionsCard from '../components/user-profile/actions-card/ActionsCard';
import SkillsCard from '../components/user-profile/skills-card/SkillsCard';
import AboutCard from '../components/user-profile/about-card/AboutCard';
import ChallengeCard from '../components/user-profile/challenge-card/ChallengeCard';
import WorkingOnCard from '../components/user-profile/working-card/WorkingCard';
import AccomplishmentsCard from '../components/user-profile/accomplishments-card/AccomplishmentsCard';

const styles = StyleSheet.create( {
	container: {
		backgroundColor: colors.graySearchBar,
		flex: 1
	},
	scrollerWrapper: {
		flex: 1
	},
	scroller: {
		flex: 1
	},
	scrollerContainer: {
		flexGrow: 1,
		justifyContent: 'space-between',
		paddingBottom: responsiveSize( 30 )
	}
} );


class UserProfile extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this._onPressBack = this._onPressBack.bind( this );
		this._onPressSettings = this._onPressSettings.bind( this );
		this._onPressSchedule = this._onPressSchedule.bind( this );
	}

	_skills = ( skills ) => {
		let skillList = [];
		skills.forEach( ( skill, i ) => {
			skillList.push( new ComputedSkill( new Skill( i + 1, skill.description, require( '../assets/images/icons/designer.png' ) ), skill.endorsements ) );
		} );
		return skillList;
	}

	_expertise = expertises => expertises.map( experise => experise.desc )

	_interest = interests => interests.map( interest => interest.desc )

	_acomplishments = ( acomplishments ) => {
		let objAcomplishments = Object.keys( acomplishments );
		return objAcomplishments.map( ( eachKey ) => {
			let itemKey = acomplishments[ eachKey ];
			return itemKey.description;
		} );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onPressSettings() {
		const { navigator } = this.props;
		navigator.push( { screen: 'settings' } );
	}

	_onPressSchedule() {
		const { navigator } = this.props;
		navigator.push( { screen: 'MeetingRequest' } );
	}

	_navigateTo( screen ) {
		return () => {
			const { navigator } = this.props;
			navigator.push( {
				screen,
				passProps: {
					editing: true
			  }
			} );
		};
	}

	render() {
		const {
			navigator: _navigator,
			searchedUser // eslint-disable-line react/prop-types
		} = this.props;

		let { user } = this.props;
		const currentUserId = Firebase.auth().currentUser.uid;
		const editable = currentUserId === searchedUser.uid;
		if ( Object.keys( searchedUser ).length ) user = searchedUser;

		let image = user.basicInfo.profilePhotoUrl
			? { uri: user.basicInfo.profilePhotoUrl }
			: require( '../assets/images/icons/addPhoto.png' );

		const person = new Person(
			2,
			user.basicInfo.firstName,
			user.basicInfo.lastName,
			'Product Designer', // Preguntar de donde va a salir
			image,
			user.skills ? this._skills( user.skills ) : null,
			new AboutInfo(
				user.aboutMe ? this._expertise( user.aboutMe.expertise ) : [ '' ],
				user.aboutMe ? this._interest( user.aboutMe.interests ) : [ '' ]
			),
			user.biggestChallenge,
			user.workingOn,
			user.accomplishments ? this._acomplishments( user.accomplishments ) : [],
			user.availableStatus ? PersonState.AVAILABLE : null
		);

		return (
			<View style={styles.container}>
				<View style={styles.scrollerWrapper}>
					<ScrollView
						vertical
						showsVerticalScrollIndicator
						style={styles.scroller}
						contentContainerStyle={styles.scrollerContainer}
					>
						<Header onPressBack={this._onPressBack} onPressSettings={this._onPressSettings} />
						<UserCard
							person={person}
							onPressEdit={this._navigateTo( 'setProfile' )}
							editable={editable}
						/>
						<Spacing size="smallPlus" />
						<ActionsCard onPressSchedule={this._onPressSchedule} />
						<Spacing size="smallPlus" />
						{user.skills
							? (
								<SkillsCard
									skills={person.skills}
									onPressAdd={this._navigateTo( 'addSkills' )}
									editable={editable}
								/>
							)
							: null}
						<Spacing size="smallPlus" />
						<AboutCard
							aboutInfo={person.aboutMe}
							onPressEdit={this._navigateTo( 'aboutMe' )}
							editable={editable}
						/>
						<Spacing size="smallPlus" />
						<ChallengeCard
							text={person.biggestChallenge ? person.biggestChallenge : ''}
							onPressEdit={this._navigateTo( 'biggestChallenge' )}
							editable={editable}
						/>
						<Spacing size="smallPlus" />
						<WorkingOnCard
							text={person.currentlyWorkingOn ? person.currentlyWorkingOn : ''}
							onPressEdit={this._navigateTo( 'currentlyWorkingOn' )}
							editable={editable}
						/>
						<Spacing size="smallPlus" />
						<AccomplishmentsCard
							accomplishments={person.accomplishments}
							onPressAdd={this._navigateTo( 'addAccomplishment' )}
							editable={editable}
						/>
						<Spacing size="smallPlus" />
					</ScrollView>
				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}

UserProfile.propTypes = {
	navigator: NavigatorPropType.isRequired,
	user: PropTypes.any.isRequired
};

const mapStateToProps = store => ( {
	user: store.authentication.user,
	searchedUser: store.users.searchedUser
} );

export default compose( connect( mapStateToProps )( UserProfile ) );
