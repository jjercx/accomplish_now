/* @flow */

import React, { Component } from 'react';
import { View, Platform, ScrollView } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import Button from '../../components/button/Button';
import SkillCard from '../../components/skill-card/SkillCard';
import colors from '../../theme/palette';
import styles from './styles';

const arrayRemove = ( array, toRemove ) => {
	if ( array.indexOf( toRemove ) !== -1 ) array.splice( array.indexOf( toRemove ), 1 );
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
		paddingTop: hp( HTP( 20 ) ),
		paddingBottom: Platform.OS === 'ios' ? hp( HTP( 15 ) ) : hp( HTP( 50 ) ),
		paddingLeft: wp( WTP( 24 ) ),
		paddingRight: wp( WTP( 24 ) )
	},
	input: {
		fontSize: hp( HTP( 14 ) )
	},
	stylesContainer: {
		flex: 1
	},
	skillsContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		// justifyContent: 'space-between',
		paddingLeft: wp( WTP( 13 ) ),
		paddingRight: wp( WTP( 13 ) ),
		paddingTop: hp( HTP( 25 ) ),
		paddingBottom: hp( HTP( 13 ) )
	}
};

class AddSkills extends Component {
	state = {
		text: '',
		skills: [
			'Designer',
			'Coaching',
			'User Experience'
		]
	};

	componentDidMount() {
		this.baseInput.focus();
	}

	_onChangeText( newText ) {
		this.setState( { text: newText } );
	}

	_onDeleteCard( skill ) {
		const { skills } = this.state;
		this.setState( { skills: arrayRemove( skills, skill ) } );
	}

	/* eslint-disable class-methods-use-this */
	_onSaveAndStart() {
		alert('on save and start - skill enter: ' + this.state.text); //eslint-disable-line
	}
	/* eslint-enable class-methods-use-this */

	render() {
		const { text, skills } = this.state;

		return (
			<View style={styles.container}>
				<Header title="Add your skills" />
				<ScrollView contentContainerStyle={styles.scrollView}>
					<View style={localStyles.inputContainer}>
						<BaseInput
							onRef={( ref ) => { this.baseInput = ref; }}
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
					<View style={localStyles.stylesContainer}>
						<View style={localStyles.skillsContainer}>
							{skills.map( skill => (
								<SkillCard
									key={skill}
									text={skill}
									onDelete={() => this._onDeleteCard( skill )}
								/> ) )}
						</View>
					</View>
					<View style={localStyles.buttonContainer}>
						<Button
							text="Save skills and start"
							textColor={colors.white}
							buttonColor={colors.orange}
							onPress={() => this._onSaveAndStart()}
							style={{ height: 45 }}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default AddSkills;
