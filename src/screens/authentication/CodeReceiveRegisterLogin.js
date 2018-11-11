/* @flow */

import React, { Component } from 'react';
import {
	View,
	TextInput,
	KeyboardAvoidingView,
	Platform,
	TouchableWithoutFeedback,
	Keyboard,
	Alert,
	ActivityIndicator
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { actVerifyAndSignIn } from '../../actions/authentication';
import Typography from '../../components/typography/Typography';
import Button from '../../components/button/Button';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Header from '../../components/register/Header';
import Spacing from '../../components/spacing/Spacing';
import colors from '../../theme/palette';
import s from './styles';
import { HTP, WTP, iPhoneSE } from '../../utils/dimensions';
import OneNumberInput from '../../components/one-number-input/OneNumberInput';
import NavigatorPropType from '../../types/navigator';

const localStyles = {
	container: {
		flex: 1
	},
	infoWrapper: {
		marginLeft: wp( WTP( 25 ) ),
		marginTop: hp( HTP( 10 ) )
	},
	codeContainer: {
		flexDirection: 'row',
		paddingTop: hp( HTP( 20 ) ),
		paddingBottom: hp( HTP( 10 ) ),
		alignItems: 'center',
		justifyContent: 'center'
	},
	codeViewContainer: {
		paddingTop: hp( HTP( iPhoneSE() ? 5 : 20 ) ),
		paddingBottom: hp( HTP( 20 ) ),
		paddingLeft: wp( WTP( 30 ) ),
		paddingRight: wp( WTP( 30 ) )
	},
	buttonStyle: {
		marginBottom: Platform.OS === 'android' ? hp( HTP( 55 ) ) : hp( HTP( 15 ) )
	},
	buttonLoginContainer: {
		paddingTop: hp( HTP( 20 ) ),
		paddingBottom: Platform.OS === 'ios' ? hp( HTP( 15 ) ) : hp( HTP( 50 ) ),
		paddingLeft: wp( WTP( 24 ) ),
		paddingRight: wp( WTP( 24 ) )
	},
	buttonLoginContainer_codeRegister: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	contentContainer: {
		flex: 1,
		display: 'flex',
		alignContent: 'space-around',
		justifyContent: 'space-around'
	}
};

class CodeReceiveRegisterLogin extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = { code: '', isLoading: false }

	componentDidMount() {
		this.textInput.blur();
		setTimeout( () => {
			this.textInput.focus();
		}, 500 );
	}

	_callback = ( res ) => {
		const { codeRegister } = this.props;
		const { navigator } = this.props;
		this.setState( { isLoading: false } );
		if ( res.code === 500 ) {
			Alert.alert(
				'Ups!',
				'Invalid code',
				[
					{ text: 'Try again' }
				],
				{ cancelable: false }
			);
		} else {
			navigator.push( { screen: codeRegister ? 'setProfile' : 'home' } );
		}
	}

	/* eslint-disable class-methods-use-this */
	_onPressResendCode() {
		alert('resendCode'); // eslint-disable-line
	}

	/* eslint-enable class-methods-use-this */

	_onRegisterLogin() {
		const { code } = this.state;
		const { actVerifyAndSignIn, user } = this.props;
		this.setState( { isLoading: true } );
		actVerifyAndSignIn( user.uid, code, this._callback.bind( this ) );
	}

	_onCodeChange( newCode ) {
		this.setState( { code: newCode } );
		if ( newCode.length === 6 ) Keyboard.dismiss();
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_renderButtons() {
		const { code, isLoading } = this.state;
		const { codeRegister } = this.props;

		if ( !isLoading ) {
			return (
				<View style={[
					codeRegister
						? localStyles.buttonLoginContainer_codeRegister
						: localStyles.buttonLoginContainer
				]}
				>
					{codeRegister ? (
						<ButtonForward
							style={[ s.buttonForward, localStyles.buttonStyle ]}
							enabled={code.length === 6}
							onPress={() => this._onRegisterLogin()}
						/>
					) : (
						<Button
							text="Login"
							textColor={colors.white}
							enabled={code.length === 6}
							buttonColor={code.length === 6 ? colors.orange : colors.disabled}
							onPress={() => this._onRegisterLogin()}
						/>
					)}
				</View>
			);
		} return <ActivityIndicator size="large" color={colors.orange} />;
	}

	render() {
		const title = 'What\'s the code?';
		const subtitle = 'Enter the code sent to ';
		const phoneNumber = '+1 (123) 456-7890';
		const { code } = this.state;

		return (
			<KeyboardAvoidingView enabled={!iPhoneSE()} style={localStyles.container} behavior="padding">
				<Header title={title} onPressBack={() => this._onPressBack()} />
				<Spacing size="small" />
				<View style={localStyles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">{subtitle}</Typography>
					<Spacing size="small" />
					<Typography variant="smallTitle" color="darkSkyBlue" textAlign="left">{phoneNumber}</Typography>
				</View>
				<View style={localStyles.contentContainer}>
					<View style={localStyles.codeViewContainer}>
						<TouchableWithoutFeedback onPress={() => this.textInput.focus()}>
							<View style={[ localStyles.codeContainer ]}>
								{[ 0, 1, 2, 3, 4, 5 ].map( number => (
									<OneNumberInput key={number} number={code[ number ]} /> ) )}
							</View>
						</TouchableWithoutFeedback>
						<Spacing size="smallPlus" />
						<Button
							text="Resend Code"
							textColor={colors.blackLabels}
							buttonColor={Platform.OS === 'ios' ? colors.whiteTwo : colors.resendButtonColorOnAndroid}
							onPress={() => this._onPressResendCode()}
						/>
					</View>
					{this._renderButtons()}
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

CodeReceiveRegisterLogin.propTypes = {
	navigator: NavigatorPropType.isRequired,
	codeRegister: PropTypes.bool
};

CodeReceiveRegisterLogin.defaultProps = {
	codeRegister: true
};

const mapStateToProps = store => ( {
	user: store.authentication.user
} );

const mapDispatchToProps = dispatch => bindActionCreators( { actVerifyAndSignIn }, dispatch );

export default ( connect( mapStateToProps, mapDispatchToProps )( CodeReceiveRegisterLogin ) );
