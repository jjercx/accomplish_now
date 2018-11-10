import React, { Component } from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	findNodeHandle
} from 'react-native';

import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { HTP } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import Spacing from '../components/spacing/Spacing';
import NavBar from '../components/navbar/NavBar';
import colors from '../theme/palette';
import Person, { PersonState } from '../entities/Person';
import Skill, { ComputedSkill } from '../entities/Skill';
import AboutInfo from '../entities/AboutInfo';
import Header from '../components/profile-user/header/Header';
import UserCard from '../components/profile-user/user-card/UserCard';
import ActionsCard from '../components/profile-user/actions-card/ActionsCard';
import SkillsCard from '../components/profile-user/skills-card/SkillsCard';
import AboutCard from '../components/profile-user/about-card/AboutCard';
import ChallengeCard from '../components/profile-user/challenge-card/ChallengeCard';
import WorkingOnCard from '../components/profile-user/working-card/WorkingCard';
import AccomplishmentsCard from '../components/profile-user/accomplishments-card/AccomplishmentsCard';

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
		paddingBottom: hpd( HTP( 30 ) )
	}
} );

/* eslint-disable react/prefer-stateless-function */
class UserProfile extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor() {
		super();
		this.state = {
			blurViewRef: null
		};
	}

	componentDidMount() {
		this.setState( {
			blurViewRef: findNodeHandle( this.viewRef )
		} );
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

	render() {
		const { blurViewRef } = this.state;
		const { user } = this.props;
		let image = user.basicInfo.profilePhotoUrl ? { uri: user.basicInfo.profilePhotoUrl } : require( '../assets/images/icons/addPhoto.png' );
		const person = new Person(
			2,
			user.basicInfo.firstName,
			user.basicInfo.lastName,
			'Product Designer', // Preguntar de donde va a salir
			image,
			this._skills( user.skills ),
			new AboutInfo(
				this._expertise( user.aboutMe.expertise ),
				this._interest( user.aboutMe.interests )
			),
			user.biggestChallenge,
			user.workingOn,
			this._acomplishments( user.accomplishments ),
			user.basicInfo.availableStatus ? PersonState.AVAILABLE : null
		);
		return (
			<View style={styles.container}>
				<View ref={( ref ) => { this.viewRef = ref; }} style={styles.scrollerWrapper}>
					<ScrollView
						vertical
						showsVerticalScrollIndicator
						style={styles.scroller}
						contentContainerStyle={styles.scrollerContainer}
					>
						<Header onPressBack={() => this._onPressBack()} />
						<UserCard person={person} />
						<Spacing size="smallPlus" />
						<ActionsCard />
						<Spacing size="smallPlus" />
						{person.skills ? <SkillsCard skills={person.skills} /> : null}
						<Spacing size="smallPlus" />
						{person.aboutMe ? <AboutCard aboutInfo={person.aboutMe} /> : null}
						<Spacing size="smallPlus" />
						{person.biggestChallenge ? <ChallengeCard text={person.biggestChallenge} /> : null}
						<Spacing size="smallPlus" />
						{person.currentlyWorkingOn ? <WorkingOnCard text={person.currentlyWorkingOn} /> : null}
						<Spacing size="smallPlus" />
						{person.accomplishments ? (
							<AccomplishmentsCard
								accomplishments={person.accomplishments}
							/>
						)
							: null}
						<Spacing size="smallPlus" />
					</ScrollView>
				</View>
				<NavBar viewRef={blurViewRef} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

UserProfile.propTypes = {
	navigator: NavigatorPropType.isRequired
};

const mapStateToProps = store => ( {
	user: store.authentication.user
} );

const mapDispatchToProps = dispatch => bindActionCreators( { }, dispatch );

export default ( connect( mapStateToProps, mapDispatchToProps )( UserProfile ) );
