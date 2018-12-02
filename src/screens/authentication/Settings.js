/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import {
	View,
	Image,
	StyleSheet,
	TouchableOpacity,
	KeyboardAvoidingView,
	Alert
} from 'react-native';

import { responsiveSize } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import Typography from '../../components/typography/Typography';
import ButtonIcon from '../../components/button-icon/ButtonIcon';
import { actLogOut } from '../../actions/authentication';
import NavigatorPropType from '../../types/navigator';
import Colors from '../../theme/palette';
import s from './styles';

const localStyles = StyleSheet.create( {
	container: {
		flex: 1,
		justifyContent: 'space-between'
	},
	settingsContainer: {
		marginTop: responsiveSize( 50 ),
		borderColor: Colors.pinkishGrey,
		borderBottomWidth: 0.5
	},
	logoutContainer: {
		borderColor: Colors.pinkishGrey,
		borderTopWidth: 0.5
	},
	payments: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingHorizontal: responsiveSize( 25 )
	},
	iconPayments: {
		marginRight: responsiveSize( 20 )
	},
	stripe: {
		alignItems: 'center',
		paddingVertical: responsiveSize( 25 )
	},
	stripeButton: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingVertical: responsiveSize( 15 ),
		backgroundColor: Colors.stripeBlue,
		borderRadius: 10
	},
	iconStripe: {
		marginLeft: responsiveSize( 25 ),
		marginRight: responsiveSize( 15 )
	},
	titleStripe: {
		justifyContent: 'center',
		borderColor: Colors.stripeBlueStrong,
		borderLeftWidth: 1,
		paddingLeft: responsiveSize( 30 ),
		paddingRight: responsiveSize( 55 ),
		height: responsiveSize( 25 )
	},
	support: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingTop: responsiveSize( 40 ),
		paddingBottom: responsiveSize( 30 ),
		paddingHorizontal: responsiveSize( 25 ),
		borderColor: Colors.pinkishGrey,
		borderTopWidth: 0.5
	},
	supportItem: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		alignItems: 'center'
	},
	iconSupport: {
		marginRight: responsiveSize( 20 )
	},
	logout: {
		flexDirection: 'row',
		justifyContent: 'flex-start',
		paddingTop: responsiveSize( 40 ),
		paddingBottom: responsiveSize( 35 ),
		paddingLeft: responsiveSize( 35 )
	},
	iconLogout: {
		marginRight: responsiveSize( 15 )
	}
} );

class Settings extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this._onPressBack = this._onPressBack.bind( this );
		this._logOut = this._logOut.bind( this );
		this._callback = this._callback.bind( this );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_logOut() {
		Alert.alert(
			'Logout',
			'Are you sure?',
			[
	  			{ text: 'Cancel', onPress: () => {}, style: 'cancel' },
	  			{
					text: 'OK',
					onPress: () => {
						const { actLogOutConnect } = this.props;
						actLogOutConnect( this._callback );
				  }
				}
			],
			{ cancelable: false }
		);
	}

	_callback() {
		const { navigator } = this.props;
		navigator.resetTo( {
			screen: 'onboarding',
			navigatorStyle: {
				navBarHidden: true
			}
		} );
	}

	render() {
		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="Settings" onPressBack={this._onPressBack} />
				<View style={localStyles.container}>
					<View style={localStyles.settingsContainer}>
						<View style={localStyles.payments}>
							<Image
								style={localStyles.iconPayments}
								source={require( '../../assets/images/icons/payments.png' )}
							/>
							<Typography variant="smallTitle">Payments</Typography>
						</View>
						<View style={localStyles.stripe}>
							<TouchableOpacity style={localStyles.stripeButton}>
								<Image
									style={localStyles.iconStripe}
									source={require( '../../assets/images/icons/stripe.png' )}
								/>
								<View style={localStyles.titleStripe}>
									<Typography variant="smallBody" color="white">Connect with Stripe</Typography>
								</View>
							</TouchableOpacity>
						</View>
						<TouchableOpacity style={localStyles.support}>
							<View style={localStyles.supportItem}>
								<Image style={localStyles.iconSupport} source={require( '../../assets/images/icons/message.png' )} />
								<Typography variant="smallTitle">Support</Typography>
							</View>
							<ButtonIcon
								iconName="keyboard-arrow-right"
								iconStyle={{ color: Colors.charcoalGrey, margin: 0 }}
							/>
						</TouchableOpacity>
					</View>
					<View style={localStyles.logoutContainer}>
						<TouchableOpacity style={localStyles.logout} onPress={this._logOut}>
							<Image style={localStyles.iconLogout} source={require( '../../assets/images/icons/logout.png' )} />
							<Typography variant="smallTitle">Logout</Typography>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

Settings.propTypes = {
	navigator: NavigatorPropType.isRequired,
	actLogOutConnect: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators( {
	actLogOutConnect: actLogOut
}, dispatch );

export default compose( connect( null, mapDispatchToProps )( Settings ) );
