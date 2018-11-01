/* @flow */

import React, { Component } from 'react';
import {
	View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Platform
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../utils/dimensions';
import Colors from '../theme/palette';
import NavigatorPropType from '../types/navigator';
import ButtonIcon from '../components/button-icon/ButtonIcon';
import Typography from '../components/typography/Typography';
import MessagePreview from '../components/messages/MessagePreview';
import NavBar from '../components/navbar/NavBar';
import Message from '../entities/Message';
import Person from '../entities/Person';

const logoAccomplish = require( '../assets/images/messages/isoGray.png' );
const imageProfileDefault = require( '../assets/images/messages/phProfile.png' );

const s = StyleSheet.create( {
	container: {
		flex: 1
	},
	subContainer: {
		flex: 1,
		marginTop: hp( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginLeft: wp( WTP( 15 ) )
	},
	headerButtonsContainer: {
		flexDirection: 'row'
	},
	headerButtonAccomplishContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start'
	},
	headerButtonNotificationsContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-end',
		position: 'relative'
	},
	logo: {
		width: wp( WTP( 18 ) ),
		height: hp( HTP( 18 ) )
	},
	buttonAccomplish: {
		paddingTop: hp( HTP( 5 ) ),
		paddingBottom: hp( HTP( 5 ) ),
		paddingLeft: wp( WTP( 5 ) ),
		paddingRight: wp( WTP( 5 ) )
	},
	notification: {
		backgroundColor: 'red',
		width: wp( WTP( 8 ) ),
		height: hp( HTP( 8 ) ),
		borderRadius: 999,
		position: 'absolute',
		top: hp( HTP( 10 ) ),
		right: wp( WTP( 11 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hp( HTP( 5 ) )
	}
} );

class Messages extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		_notifications: true
	}

	_goToNotifications = () => {
		alert('go to notifications screen'); //eslint-disable-line
	}

	_keyExtractor = item => item.messageId;

	_messages = () => [
		new Message( new Person( '1', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', '' ), '1', 'Fri, Oct 19, 08:07 PM', 'Lorem ipsum dolor sit amet.' ),
		new Message( new Person( '2', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', '' ), '2', 'Fri, Oct 19, 08:07 PM', 'Lorem ipsum dolor sit amet.' ),
		new Message( new Person( '3', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', '' ), '3', 'Fri, Oct 19, 08:07 PM', 'Lorem ipsum dolor sit amet.' ),
		new Message( new Person( '4', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', '' ), '4', 'Fri, Oct 19, 08:07 PM', 'Lorem ipsum dolor sit amet.' ),
		new Message( new Person( '5', 'Frank', 'Doe', '', imageProfileDefault, '', '', '', '', '', '' ), '5', 'Fri, Oct 19, 08:07 PM', 'Lorem ipsum dolor sit amet.' )
	];

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { navigator: _navigator } = this.props;
		const { _notifications } = this.state;

		return (
			<View style={s.container}>
				<View style={s.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>

					<View style={s.headerButtonsContainer}>
						<View style={s.headerButtonAccomplishContainer}>
							<TouchableOpacity onPress={() => this._onPressBack()}>
								<View style={s.buttonAccomplish}>
									<Image
										style={s.logo}
										source={logoAccomplish}
									/>
								</View>
							</TouchableOpacity>
						</View>
						<View style={s.headerButtonNotificationsContainer}>
							<ButtonIcon
								iconName="notifications-none"
								iconStyle={{ color: Colors.charcoalGrey }}
								onPress={() => this._goToNotifications()}
							/>
							<View style={[ s.notification, { opacity: _notifications ? 1 : 0 } ]} />
						</View>
					</View>

					<Typography
						variant="semiLargeTitle"
						color="darkSkyBlue"
						textAlign="left"
					>
						{'Messages'}
					</Typography>

					<FlatList
						style={s.flatList}
						data={this._messages()}
						keyExtractor={this._keyExtractor}
						renderItem={( { item } ) => <MessagePreview {...item} />}
					/>

				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}

Messages.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Messages;
