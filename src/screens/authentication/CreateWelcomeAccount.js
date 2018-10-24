/* @flow */

import React, { Component } from 'react';
import {
	View, Text, Image, StyleSheet, Platform
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Typography from '../../components/typography/Typography';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Header from '../../components/register/Header';
import Colors from '../../theme/palette';
import { HTP, WTP } from '../../utils/dimensions';
import fonts from '../../theme/fonts';
import styles from './styles';

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
		marginBottom: hp( HTP( 40 ) ),
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
	}
} );

export default class CreateWelcomeAccount extends Component {
	constructor( props ) {
		super( props );
		this.state = { enabled: false, createAccount: true };
		this.onChangeText = this.onChangeText.bind( this );
	}

	onChangeText( text ) {
		if ( text.length === 9 ) {
			this.setState( { enabled: true } );
		} else {
			this.setState( { enabled: false } );
		}
	}

	render() {
		let { enabled, createAccount } = this.state;
		let title = createAccount ? 'Create Account' : 'Welcome back';

		/* eslint-disable react/jsx-one-expression-per-line */
		return (
			<View style={styles.container}>
				<Header title={title} />
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
						<BaseInput style={localStyles.inputText} placeholder="(000) 000-0000" keyboardType="numeric" onChangeText={this.onChangeText} maxLength={9} />
					</View>
				</View>
				<View style={[ localStyles.infoWrapper,
					{ marginBottom: createAccount ? 0 : hp( HTP( 33 ) ) } ]}
				>
					{ createAccount ? (
						<Typography variant="smallBody" color="charcoalGrey" textAlign="left">
              By continuing you are agreeing with our {' '}
							<Text style={{ fontFamily: fonts.productSansBold }}>
                terms of service and privacy policy.
							</Text>
						</Typography>
					) : null }
				</View>
				<ButtonForward enabled={enabled} />
			</View>
		);
		/* eslint-enable react/jsx-one-expression-per-line */
	}
}
