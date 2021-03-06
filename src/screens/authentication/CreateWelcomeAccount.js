/* @flow */

import React, { Component } from 'react';
import {
	View, Text, Image, StyleSheet, Platform, KeyboardAvoidingView, Alert, ActivityIndicator
} from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { actCreateAccount, actLoginUser } from '../../actions/authentication';
import Typography from '../../components/typography/Typography';
import BaseInputForm from '../../components/base-input/BaseInputForm';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Header from '../../components/register/Header';
import Colors from '../../theme/palette';
import { responsiveSize, iPhoneSE } from '../../utils/dimensions';
import fonts from '../../theme/fonts';
import s from './styles';
import NavigatorPropType from '../../types/navigator';
import { required } from '../../utils/Validations';

const localStyles = StyleSheet.create( {
	infoWrapper: {
		marginLeft: responsiveSize( 24 ),
		marginTop: responsiveSize( 20 ),
		marginRight: responsiveSize( 33 )
	},
	inputWrapper: {
		height: responsiveSize( 52 ),
		borderWidth: 1,
		marginTop: responsiveSize( 25 ),
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: responsiveSize( 24 ),
		borderRadius: 3,
		borderColor: Colors.coolGrey
	},
	inputLeftContainer: {
		width: responsiveSize( 62 ),
		borderRightWidth: 1,
		height: responsiveSize( 52 ),
		justifyContent: 'center',
		borderColor: Colors.coolGrey
	},
	inputRightContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputTextHint: {
		marginRight: responsiveSize( 15 ),
		marginLeft: responsiveSize( 10 )
	},
	inputText: {
		fontSize: responsiveSize( 17 ),
		flex: 1,
		top: Platform === 'ios' ? 0 : responsiveSize( 1 )
	},
	buttonStyle: {
		marginBottom: Platform.OS === 'android' ? responsiveSize( 35 ) : responsiveSize( 15 )
	},
	contentContainer: {
		flex: 1,
		display: 'flex',
		alignContent: 'space-between',
		justifyContent: 'space-between'
	},
	iPhoneSE: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	buttonContainer: {
		flex: 1,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
} );

class CreateWelcomeAccount extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = { enabled: false, phone: null, isLoading: false };
		this.onChangeText = this.onChangeText.bind( this );
		this._onPressButtonFoward = this._onPressButtonFoward.bind( this );
		this._callback = this._callback.bind( this );
	}

	componentDidMount() {
		this.baseInput.blur();
		setTimeout( () => {
			this.baseInput.focus();
		}, 500 );
	}

	onChangeText( text ) {
		this.setState( { enabled: text.length === 10, phone: text } );
		if ( text.length === 10 ) this.baseInput.blur();
	}

	_callback = ( res, origin ) => {
		const { navigator, createAccount } = this.props;
		// CAMBIAR ALERT
		this.setState( { isLoading: false } );
		if ( res.code === 500 ) {
			let isErrorLogin = res.error.code === 'auth/user-not-found';
			Alert.alert(
				'Ups!',
				res.error.message,
				[
					{ text: isErrorLogin ? 'Create Account' : 'Cancel', onPress: () => ( createAccount ? null : this._onPressButtonFoward( {}, isErrorLogin ) ) },
					{ text: 'OK' }
				],
				{ cancelable: false }
			);
		} else {
			navigator.push( {
				screen: 'codeReceiveRegisterLogin',
				passProps: { codeRegister: origin === 'createAccount' }
			} );
		}
	}

	_onPressButtonFoward( formValues, isErrorLogin ) {
		const { phone } = this.state;
		const { actCreateAccount, createAccount, actLoginUser } = this.props;
		this.setState( { isLoading: true } );
		if ( createAccount || isErrorLogin ) actCreateAccount( phone, res => this._callback( res, 'createAccount' ) );
		else actLoginUser( phone, res => this._callback( res, 'login' ) );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onPressTerms() {
		const { navigator } = this.props;
		navigator.push( { screen: 'termsAndConditions' } );
	}

	render() {
		let { enabled, isLoading } = this.state;
		const { createAccount, handleSubmit } = this.props;
		let title = createAccount ? 'Create Account' : 'Welcome back';
		/* eslint-disable react/jsx-one-expression-per-line */
		return (
			<KeyboardAvoidingView enabled={!iPhoneSE()} style={[ s.container, localStyles.keyboardAvoidingView ]} behavior="padding">
				<Header title={title} onPressBack={() => this._onPressBack()} />
				<View style={localStyles.infoWrapper}>
					<Typography variant="smallTitle" color="charcoalGrey" textAlign="left">Enter your mobile number to setup an account. You will receive a verification code via text message and data rates may apply.</Typography>
				</View>
				<View style={localStyles.inputWrapper}>
					<View style={localStyles.inputLeftContainer}>
						<Image source={require( '../../assets/images/icons/flag.png' )} style={{ alignSelf: 'center' }} />
					</View>
					<View style={localStyles.inputRightContainer}>
						<View style={localStyles.inputTextHint}>
							<Typography variant="midTitle" color="charcoalGrey" textAlign="center"> +1 </Typography>
						</View>
						<Field
							name="basicInfo.phoneNumber"
							onRef={( ref ) => { this.baseInput = ref; }}
							withRef
							validate={required}
							style={localStyles.inputText}
							placeholder="(000) 000-0000"
							keyboardType="numeric"
							component={BaseInputForm}
							onChangeText={this.onChangeText}
							maxLength={10}
						/>
					</View>
				</View>
				<View style={localStyles.contentContainer}>
					<View style={[ iPhoneSE() ? localStyles.iPhoneSE : null ]}>
						<View style={[ localStyles.infoWrapper,
							{ marginBottom: createAccount ? 0 : responsiveSize( 33 ) } ]}
						>
							{ createAccount ? (
								<Typography variant="smallBody" color="charcoalGrey" textAlign="left">
									By continuing you are agreeing with our {' '}
									<Text style={{ fontFamily: fonts.productSansBold }}>
										terms of service
										and privacy policy.
									</Text>
								</Typography>
							) : null }
						</View>
					</View>
					<View style={localStyles.buttonContainer}>
						{isLoading ? <ActivityIndicator size="large" color={Colors.orange} /> : (
							<ButtonForward
								enabled={enabled}
								onPress={handleSubmit( values => this._onPressButtonFoward( values ) )}
								style={[ s.buttonForward, localStyles.buttonStyle ]}
							/>
						)}
					</View>
				</View>
			</KeyboardAvoidingView>
		);
		/* eslint-enable react/jsx-one-expression-per-line */
	}
}

CreateWelcomeAccount.propTypes = {
	navigator: NavigatorPropType.isRequired,
	createAccount: PropTypes.bool
};

CreateWelcomeAccount.defaultProps = {
	createAccount: true
};

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actCreateAccount, actLoginUser }, dispatch );

export default reduxForm( {
	form: 'createAccountForm'
} )( connect( null, mapDispatchToProps )( CreateWelcomeAccount ) );
