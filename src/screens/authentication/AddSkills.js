/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View, Platform, ScrollView, KeyboardAvoidingView, Alert
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { reduxForm, change, formValueSelector } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HTP, WTP } from '../../utils/dimensions';
import { actSetProfileData } from '../../actions/authentication';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import Button from '../../components/button/Button';
import SkillCard from '../../components/skills/skill-card/SkillCard';
import SuggestedSkillCard from '../../components/skills/suggested-skill-card/SuggestedSkillCard';
import colors from '../../theme/palette';
import styles from './styles';
import NavigatorPropType from '../../types/navigator';
import skillList from '../../data/data-skills';

const arrayRemove = ( array, toRemove ) => {
	array = array.slice();
	if ( Array.isArray( toRemove ) ) {
		toRemove.map( ( item ) => {
			if ( array.indexOf( item ) !== -1 ) array.splice( array.indexOf( item ), 1 );
			return false;
		} );
	} else if ( array.indexOf( toRemove ) !== -1 ) array.splice( array.indexOf( toRemove ), 1 );
	return array;
};

const arrayAdd = ( array, toAdd, replace = true ) => {
	array = array.slice();
	if ( Array.isArray( toAdd ) ) {
		toAdd.map( ( item ) => {
			if ( replace ) array = arrayRemove( array, item );
			array.push( item );
			return false;
		} );
	} else {
		if ( replace ) array = arrayRemove( array, toAdd );
		array.push( toAdd );
	}
	return array;
};

const localStyles = {
	inputContainer: {
		marginLeft: wp( WTP( 25 ) ),
		marginTop: hp( HTP( 30 ) ),
		marginRight: wp( WTP( 25 ) ),
		flexDirection: 'row'
	},
	buttonContainer: {
		paddingTop: hp( HTP( 15 ) ),
		paddingBottom: Platform.OS === 'ios' ? hp( HTP( 15 ) ) : hp( HTP( 50 ) ),
		paddingLeft: wp( WTP( 24 ) ),
		paddingRight: wp( WTP( 24 ) )
	},
	input: {
		fontSize: hp( HTP( 14 ) ),
		color: colors.darkSkyBlue
	},
	skillsContainer: {
		paddingTop: hp( HTP( 15 ) ),
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap'
	},
	contentContainer: {
		flex: 1,
		marginLeft: wp( WTP( 25 ) ),
		marginRight: wp( WTP( 25 ) ),
		paddingTop: hp( HTP( 3 ) ),
		flexWrap: 'wrap'
	},
	suggestedSkillsContainer: {
		flex: 1
	}
};

class AddSkills extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		text: '',
		skills: skillList,
		filteredSkills: [],
		skillsAdded: []
	};

	constructor( props ) {
		super( props );
		this._onPressBack = this._onPressBack.bind( this );
		this._onSaveAndStart = this._onSaveAndStart.bind( this );
		this._callback = this._callback.bind( this );
	}

	componentWillMount() {
		let { initialize, editing, user } = this.props;
		if ( editing ) {
			this.setState( { skillsAdded: user.skills ? user.skills : [] } );
			initialize( {
				skills: user.skills ? user.skills : []
			} );
		}
	}

	componentDidMount() {
		this.textInput.focus();
	}

	_onChangeText( newText ) {
		let { skills } = this.state;
		let filteredSkills = [];
		if ( newText.length >= 3 ) {
			filteredSkills = skills.filter(
				skill => skill.description.toLowerCase().indexOf( newText.toLowerCase() ) === 0 );
			let newFilteredSkills = filteredSkills.slice( 0, 10 );
			this.setState( { text: newText, filteredSkills: newFilteredSkills } );
		} else {
			this.setState( { text: newText, filteredSkills: [] } );
		}
	}

	_onDeleteSkillCard( skill ) {
		const { skillsAdded } = this.state;
		const { dispatch } = this.props;
		this.setState( { skillsAdded: arrayRemove( skillsAdded, skill ) }, () => { dispatch( change( 'createAccountForm', 'skills', arrayRemove( skillsAdded, skill ) ) ); } );
	}

	_onAddSkillCard( skill ) {
		skill.endorsements = 0;
		const { skillsAdded } = this.state;
		const { dispatch } = this.props;
		this.setState( {
			skillsAdded: arrayAdd( skillsAdded, skill ),
			text: '',
			filteredSkills: []
		 }, () => {
			 dispatch( change( 'createAccountForm', 'skills', arrayAdd( skillsAdded, skill ) ) );
			 this.textInput.blur();
		 } );
	}

	_callback() {
		const { navigator, editing } = this.props;
		if ( !editing ) navigator.push( { screen: 'home' } ); else navigator.pop();
	}

	_onSaveAndStart( formValues ) {
		const { actSetProfileData, selectedSkills } = this.props;
		// alert('on save and start - skill enter: ' + this.state.text);
		if ( selectedSkills && selectedSkills.length > 0 ) {
			formValues.basicInfo.phoneNumber = `+1${formValues.basicInfo.phoneNumber}`;
			actSetProfileData( formValues, this._callback );
		} else {
			Alert.alert(
				'Ups!',
				'Add at least one skill',
				[
					{ text: 'OK' }
				],
				{ cancelable: false }
			);
		}
		return null;
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const {
			text, skillsAdded, filteredSkills, emptySkill
		} = this.state;

		const { editing, handleSubmit } = this.props;

		return (
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
				<Header title="Add your skills" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<BaseInput
						name="skills"
						onRef={( ref ) => { this.textInput = ref; }}
						label="Enter skill"
						withRef
						component={BaseInput}
						labelColor={colors.charcoalGrey}
						placeholder="Ej. Designer"
						value={text}
						onChangeText={newText => this._onChangeText( newText )}
						style={localStyles.input}
						labelStyle={localStyles.label}
						iconName="search"
						iconStyle={{ color: colors.skyBlue }}
					/>
				</View>
				<View style={localStyles.contentContainer}>
					{ filteredSkills.length > 0 ? (
						<View style={localStyles.suggestedSkillsContainer}>
							<ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={localStyles.suggestedSkillsScrollView}>
								{arrayRemove( filteredSkills, skillsAdded ).map( skill => (
									<SuggestedSkillCard
										key={skill.id}
										text={skill.description}
										onAdd={() => this._onAddSkillCard( skill )}
									/> ) )}
							</ScrollView>
						</View>
					) : (
						<ScrollView contentContainerStyle={localStyles.skillsContainer}>
							{skillsAdded.map( skill => (
								<SkillCard
									key={skill.id}
									text={skill.description}
									onDelete={() => this._onDeleteSkillCard( skill )}
								/> ) )}
						</ScrollView>
					)}
				</View>

				<View style={localStyles.buttonContainer}>
					<Button
						text={editing ? 'Save skills' : 'Save skills and start'}
						textColor={colors.white}
						buttonColor={colors.orange}
						onPress={handleSubmit( this._onSaveAndStart )}
						style={{ height: hp( HTP( 45 ) ) }}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

AddSkills.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired,
	initialize: PropTypes.func,
	user: PropTypes.any.isRequired,
	handleSubmit: PropTypes.func,
	dispatch: PropTypes.func
};

AddSkills.defaultProps = {
	editing: false,
	initialize: () => {},
	handleSubmit: () => {},
	dispatch: () => {}
};

const mapStateToProps = ( store ) => {
	const selector = formValueSelector( 'createAccountForm' );
	return {
		selectedSkills: selector( store, 'skills' ),
		user: store.authentication.user
	};
};

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actSetProfileData }, dispatch );

export default reduxForm( {
	form: 'createAccountForm'
} )( connect( mapStateToProps, mapDispatchToProps )( AddSkills ) );
