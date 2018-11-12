/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View, Platform, ScrollView, KeyboardAvoidingView
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import Button from '../../components/button/Button';
import SkillCard from '../../components/skills/skill-card/SkillCard';
import SuggestedSkillCard from '../../components/skills/suggested-skill-card/SuggestedSkillCard';
import colors from '../../theme/palette';
import styles from './styles';
import NavigatorPropType from '../../types/navigator';

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
		baseInputFocused: false,
		text: '',
		skills: [
			'Designer',
			'Coaching',
			'User Experience',
			'User Interface',
			'Another skill'
		],
		skillsAdded: []
	};

	constructor( props ) {
		super( props );
		this._onPressBack = this._onPressBack.bind( this );
		this._onSaveAndStart = this._onSaveAndStart.bind( this );
	}

	componentDidMount() {
		this.textInput.focus();
	}

	_onChangeText( newText ) {
		this.setState( { text: newText } );
	}

	_onDeleteSkillCard( skill ) {
		const { skillsAdded } = this.state;
		this.setState( { skillsAdded: arrayRemove( skillsAdded, skill ) } );
	}

	_onAddSkillCard( skill ) {
		const { skillsAdded, skills } = this.state;
		this.setState( {
			skillsAdded: arrayAdd( skillsAdded, skill ),
			text: ''
		 }, () => {
			 if ( skillsAdded.length === skills.length - 1 ) this.textInput.blur();
		 } );
	}

	_onSaveAndStart() {
		// alert('on save and start - skill enter: ' + this.state.text);
		const { navigator } = this.props;
		navigator.push( { screen: 'home' } );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const {
			text, skills, skillsAdded, baseInputFocused
		} = this.state;

		const { editing } = this.props;

		return (
			<KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
				<Header title="Add your skills" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<BaseInput
						onRef={( ref ) => { this.textInput = ref; }}
						handleFocus={() => this.setState( { baseInputFocused: true } )}
						handleBlur={() => this.setState( { baseInputFocused: false } )}
						label="Enter skill"
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
					{baseInputFocused ? (
						<View style={localStyles.suggestedSkillsContainer}>
							<ScrollView keyboardShouldPersistTaps="always" contentContainerStyle={localStyles.suggestedSkillsScrollView}>
								{arrayRemove( skills, skillsAdded ).map( skill => (
									<SuggestedSkillCard
										key={skill}
										text={skill}
										onAdd={() => this._onAddSkillCard( skill )}
									/> ) )}
							</ScrollView>
						</View>
					) : (
						<ScrollView contentContainerStyle={localStyles.skillsContainer}>
							{skillsAdded.map( skill => (
								<SkillCard
									key={skill}
									text={skill}
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
						onPress={editing ? this._onPressBack : this._onSaveAndStart}
						style={{ height: hp( HTP( 45 ) ) }}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

AddSkills.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired
};

AddSkills.defaultProps = {
	editing: false
};

export default AddSkills;
