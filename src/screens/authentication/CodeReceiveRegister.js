/* @flow */

import React, { Component } from 'react';
import {
	View, TextInput, KeyboardAvoidingView, Platform, TouchableWithoutFeedback, Keyboard
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../../components/typography/Typography';
import Button from '../../components/button/Button';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Header from '../../components/register/Header';
import Spacing from '../../components/spacing/Spacing';
import colors from '../../theme/palette';
import { HTP, WTP } from '../../utils/dimensions';
import OneNumberInput from '../../components/one-number-input/OneNumberInput';
import NavigatorPropType from '../../types/navigator';

const localStyles = {
	container: {
		flex: 1
	},
	infoWrapper: {
		marginLeft: wp( WTP( 25 ) ),
		marginTop: hp( HTP( 10 ) ),
		flexDirection: 'row'
	},
	codeContainer: {
		flexDirection: 'row',
		paddingTop: hp( HTP( 30 ) ),
		paddingBottom: hp( HTP( 10 ) ),
		justifyContent: 'center'
	},
	codeViewContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		paddingTop: hp( HTP( 20 ) ),
		paddingBottom: hp( HTP( 20 ) ),
		paddingLeft: wp( WTP( 53 ) ),
		paddingRight: wp( WTP( 53 ) )
	},
	buttonLoginContainer: {
		paddingTop: hp( HTP( 20 ) ),
		paddingBottom: Platform.OS === 'ios' ? hp( HTP( 15 ) ) : hp( HTP( 40 ) ),
		paddingLeft: wp( WTP( 24 ) ),
		paddingRight: wp( WTP( 24 ) )
	}
};

class CodeReceiveRegister extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = { code: '' }

	componentDidMount() {
		this.textInput.focus();
	}

	/* eslint-disable class-methods-use-this */
	_onPressResendCode() {
		alert('resendCode'); // eslint-disable-line
	}
	/* eslint-enable class-methods-use-this */

	_onRegister() {
		// console.log('register with: ' + this.state.code);
		const { navigator } = this.props;
		navigator.push( { screen: 'setProfile' } );
	}

	_onCodeChange( newCode ) {
		this.setState( { code: newCode } );
		if ( newCode.length === 6 ) Keyboard.dismiss();
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const title = 'What\'s the code?';
		const subtitle = 'Enter the code sent to ';
		const phoneNumber = '+1 (123) 456-7890';
		const { code } = this.state;

		return (
			<KeyboardAvoidingView style={localStyles.container} behavior="padding" enabled>
				<Header title={title} onPressBack={() => this._onPressBack()} />
				<Spacing size="small" />
				<View style={localStyles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{subtitle}</Typography>
					<Typography variant="smallTitle" color="darkSkyBlue" textAlign="left">{phoneNumber}</Typography>
				</View>
				<View style={localStyles.codeViewContainer}>
					<TouchableWithoutFeedback onPress={() => this.textInput.focus()}>
						<View style={localStyles.codeContainer}>
							{[ 0, 1, 2, 3, 4, 5 ].map( number => (
								<OneNumberInput key={number} number={code[ number ]} /> ) )}
						</View>
					</TouchableWithoutFeedback>
					<Button
						text="Resend Code"
						textColor={colors.blackLabels}
						buttonColor={Platform.OS === 'ios' ? colors.whiteTwo : colors.resendButtonColorOnAndroid}
						onPress={() => this._onPressResendCode()}
					/>
				</View>
				<View style={localStyles.buttonLoginContainer}>
					<ButtonForward
						enabled={code.length === 6}
						onPress={code.length === 6 ? () => this._onRegister() : null}
					/>
				</View>
				<TextInput
					ref={( ref ) => { this.textInput = ref; }}
					style={{ opacity: 0, position: 'absolute' }}
					keyboardType="number-pad"
					value={code}
					onChangeText={newCode => this._onCodeChange( newCode )}
					maxLength={6}
				/>
			</KeyboardAvoidingView>
		);
	}
}

CodeReceiveRegister.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default CodeReceiveRegister;
