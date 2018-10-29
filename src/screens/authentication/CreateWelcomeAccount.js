/* @flow */

import React, { Component } from 'react';
import {
	View, Text, Image, StyleSheet, Platform, KeyboardAvoidingView
} from 'react-native';
import PropTypes from 'prop-types';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../../components/typography/Typography';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Header from '../../components/register/Header';
import Colors from '../../theme/palette';
import { HTP, WTP, iPhoneSE } from '../../utils/dimensions';
import fonts from '../../theme/fonts';
import s from './styles';
import NavigatorPropType from '../../types/navigator';

const localStyles = StyleSheet.create( {
	infoWrapper: {
		marginLeft: wp( WTP( 24 ) ),
		marginTop: hp( HTP( 20 ) ),
		marginRight: wp( WTP( 33 ) )
	},
	inputWrapper: {
		height: hp( HTP( 52 ) ),
		borderWidth: 1,
		marginTop: hp( HTP( 25 ) ),
		alignItems: 'center',
		flexDirection: 'row',
		marginHorizontal: hp( HTP( 24 ) ),
		borderRadius: 3,
		borderColor: Colors.coolGrey
	},
	inputLeftContainer: {
		width: wp( WTP( 62 ) ),
		borderRightWidth: 1,
		height: hp( HTP( 52 ) ),
		justifyContent: 'center',
		borderColor: Colors.coolGrey
	},
	inputRightContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	inputTextHint: {
		marginRight: wp( WTP( 15 ) ),
		marginLeft: wp( WTP( 10 ) )
	},
	inputText: {
		fontSize: hp( HTP( 17 ) ),
		flex: 1,
		top: Platform === 'ios' ? 0 : hp( HTP( 1 ) )
	},
	buttonStyle: {
		marginBottom: Platform.OS === 'android' ? hp( HTP( 35 ) ) : 0
	}
} );

class CreateWelcomeAccount extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = { enabled: false };
		this.onChangeText = this.onChangeText.bind( this );
	}

	componentDidMount() {
		this.baseInput.blur();
		setTimeout( () => {
			this.baseInput.focus();
		}, 500 );
	}

	onChangeText( text ) {
		this.setState( { enabled: text.length === 9 } );
		if ( text.length === 9 ) this.baseInput.blur();
	}

	_onPressButtonFoward() {
		const { createAccount } = this.props;
		const { navigator } = this.props;
		navigator.push( { screen: createAccount ? 'codeReceiveRegister' : 'codeReceiveLogin' } );
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
		let { enabled } = this.state;
		const { createAccount } = this.props;
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
						<BaseInput
							onRef={( ref ) => { this.baseInput = ref; }}
							style={localStyles.inputText}
							placeholder="(000) 000-0000"
							keyboardType="numeric"
							onChangeText={this.onChangeText}
							maxLength={9}
						/>
					</View>
				</View>
				<View style={[ s.flex1, s.space_b ]}>
					<View style={[ iPhoneSE() ? ( s.flex1, s.center ) : null ]}>
						<View style={[ localStyles.infoWrapper, s.center,
							{ marginBottom: createAccount ? 0 : hp( HTP( 33 ) ) } ]}
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
					<View style={[ s.flex1, s.center ]}>
						<ButtonForward
							enabled={enabled}
							onPress={enabled ? () => this._onPressButtonFoward() : null}
							style={[ s.buttonForward, localStyles.buttonStyle ]}
						/>
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


export default CreateWelcomeAccount;
