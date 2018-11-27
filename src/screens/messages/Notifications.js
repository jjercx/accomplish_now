/* @flow */

import React, { Component } from 'react';
import {
	View, StyleSheet, TouchableOpacity, StatusBar, FlatList, Platform,
	ActivityIndicator
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import Typography from '../../components/typography/Typography';
import Header from '../../components/register/Header';
import NotificationPreview from '../../components/messages/NotificationPreview';
import { actGetFromNotification, actGetToNotifications } from '../../actions/notifications';
import { actGetUser } from '../../actions/users';

const imageProfileDefault = require( '../../assets/images/messages/phProfile.png' );

const s = StyleSheet.create( {
	container: {
		flex: 1
	},
	content: {
		flex: 1
	},
	headerNotificationType: {
		flexDirection: 'row',
		marginTop: 15
	},
	notificationTypeSelected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Colors.charcoalGrey,
		borderBottomWidth: 1,
		padding: 5
	},
	notificationTypeDeselected: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		borderBottomColor: Colors.pinkishGrey,
		borderBottomWidth: 0.5,
		padding: 5
	}
} );

class Notifications extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		viewReceivedNotifications: true
	};

	componentWillMount() {
		const { fromNotificationInit, toNotificationInit } = this.props;
		toNotificationInit();
		fromNotificationInit();
	}

	_notificationsReceived = () => [
		{
			id: '1',
			text: 'Message received from Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '2',
			text: 'Message received from Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '3',
			text: 'Message received from Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '4',
			text: 'Message received from Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '5',
			text: 'Message received from Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		}
	];

	_notificationsSended = () => [
		{
			id: '1',
			text: 'Message sended to Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '2',
			text: 'Message sended to Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		},
		{
			id: '3',
			text: 'Message sended to Frank Doe',
			action: 'Tap to view profile',
			image: imageProfileDefault
		}
	];

    _keyExtractor = item => item.id;

	_openNotification = ( userId ) => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( userId );
		navigator.push( { screen: 'userProfile' } );
	};

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}


	render() {
		const { viewReceivedNotifications } = this.state;
		const { notifications } = this.props;
		const {
			fromIsFetching, toIsFetching, fromNotifications, toNotifications
		} = notifications;

		return (
			<View style={s.container}>
				<StatusBar
					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
				/>
				<Header title="Notifications" onPressBack={() => this._onPressBack()} />
				<View style={s.content}>
					<View style={s.headerNotificationType}>
						<TouchableOpacity
							style={viewReceivedNotifications
								? s.notificationTypeSelected
								: s.notificationTypeDeselected}
							onPress={() => this.setState( { viewReceivedNotifications: true } )}
						>
							<Typography
								variant="smallTitle"
								color={viewReceivedNotifications ? 'charcoalGrey' : 'pinkishGrey'}
								textAlign="left"
							>
								{'Received'}
							</Typography>
						</TouchableOpacity>
						<TouchableOpacity
							style={!viewReceivedNotifications
								? s.notificationTypeSelected
								: s.notificationTypeDeselected}
							onPress={() => this.setState( { viewReceivedNotifications: false } )}
						>
							<Typography
								variant="smallTitle"
								color={!viewReceivedNotifications ? 'charcoalGrey' : 'pinkishGrey'}
								textAlign="left"
							>
								{'Sent'}
							</Typography>
						</TouchableOpacity>
					</View>
					{( toIsFetching && fromIsFetching ) ? (
						<ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} />
					) : (
						<FlatList
							style={s.flatList}
							data={viewReceivedNotifications
								? toNotifications
								: fromNotifications}
							keyExtractor={this._keyExtractor}
							renderItem={( { item, index } ) => {
								let notification = {};
								if ( viewReceivedNotifications ) {
									const {
										from: { basicInfo: { firstName, lastName, profilePhotoUrl }, uid }
									} = item;
									notification.text = `Message received from ${firstName} ${lastName}`;
									notification.action = 'Tap to view profile';
									notification.image = ( typeof profilePhotoUrl !== 'undefined' )
										? ( { uri: profilePhotoUrl } ) : ( imageProfileDefault );
									notification.uid = uid;
									notification.id = index;
								} else {
									const {
										to: { basicInfo: { firstName, lastName, profilePhotoUrl }, uid }
									} = item;
									notification.text = `Message sended to ${firstName} ${lastName}`;
									notification.action = 'Tap to view profile';
									notification.image = ( typeof profilePhotoUrl !== 'undefined' )
										? ( { uri: profilePhotoUrl } ) : ( imageProfileDefault );
									notification.uid = uid;
									notification.id = index;
								}
								return (
									<NotificationPreview
										onPress={() => this._openNotification( notification.uid )}
										{...notification}
									/>
								);
							}}
						/>
					)}

				</View>
			</View>
		);
	}
}

Notifications.propTypes = {
	navigator: NavigatorPropType.isRequired
};

const mapStateToProps = state => ( {
	notifications: state.notifications
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	fromNotificationInit: actGetFromNotification,
	toNotificationInit: actGetToNotifications,
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( Notifications ) );
