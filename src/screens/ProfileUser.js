import React, { Component } from 'react';
import {
	View,
	ScrollView,
	StyleSheet,
	findNodeHandle
} from 'react-native';

import { heightPercentageToDP as hpd } from 'react-native-responsive-screen';
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
class ProfileUser extends Component {
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

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { blurViewRef } = this.state;

		const person = new Person(
			2,
			'Stephanie',
			'Doe',
			'Product Designer',
			require( '../assets/images/connections/sd.png' ),
			[
				new ComputedSkill( new Skill( 1, 'Designer', require( '../assets/images/icons/designer.png' ) ), 0 ),
				new ComputedSkill( new Skill( 2, 'Coaching', require( '../assets/images/icons/coaching.png' ) ), 0 ),
				new ComputedSkill( new Skill( 3, 'User Experience', require( '../assets/images/icons/ux.png' ) ), 0 )
			],
			new AboutInfo(
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit. '
			),
			'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim sapien vel turpis finibus dignissim. Etiam aliquam massa euismod dolor vehicula malesuada. Sed vulputate lacus.',
			'I am working on 10 hour profitability improvement project for a NYC small business.',
			[
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
			],
			PersonState.AVAILABLE
		);

		return (
			<View style={styles.container}>
				<View ref={( ref ) => { this.viewRef = ref; }} style={styles.scrollerWrapper}>
					<Header onPressBack={() => this._onPressBack()} />
					<UserCard person={person} />
					<Spacing size="smallPlus" />
					<ScrollView
						vertical
						showsVerticalScrollIndicator
						style={styles.scroller}
						contentContainerStyle={styles.scrollerContainer}
					>
						<ActionsCard />
						<Spacing size="smallPlus" />
						<SkillsCard skills={person.skills} />
						<Spacing size="smallPlus" />
						<AboutCard aboutInfo={person.aboutMe} />
						<Spacing size="smallPlus" />
						<ChallengeCard text={person.biggestChallenge} />
						<Spacing size="smallPlus" />
						<WorkingOnCard text={person.currentlyWorkingOn} />
						<Spacing size="smallPlus" />
						<AccomplishmentsCard accomplishments={person.accomplishments} />
						<Spacing size="smallPlus" />
					</ScrollView>
				</View>
				<NavBar viewRef={blurViewRef} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

ProfileUser.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default ProfileUser;
