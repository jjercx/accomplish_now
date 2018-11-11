/* @flow */

import React, { Component } from 'react';
import {
	View, StyleSheet, TouchableOpacity, StatusBar, FlatList, Platform
} from 'react-native';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import Typography from '../../components/typography/Typography';
import Header from '../../components/register/Header';
import NotificationPreview from '../../components/messages/NotificationPreview';

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

	_openNotification = () => {
		alert('open notification'); //eslint-disable-line
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { viewReceivedNotifications } = this.state;
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
					<FlatList
						style={s.flatList}
						data={viewReceivedNotifications
							? this._notificationsReceived()
							: this._notificationsSended()}
						keyExtractor={item => item.id}
						renderItem={( { item } ) => (
							<NotificationPreview onPress={this._openNotification} {...item} />
						)}
					/>
				</View>
			</View>
		);
	}
}

Notifications.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Notifications;
