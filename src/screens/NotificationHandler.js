import React, { Component } from 'react';
import { AsyncStorage, View } from 'react-native';
import Firebase from 'react-native-firebase';
import Onboarding from './Onboarding';

export default class NotificationHandler extends Component {
	constructor( props ) {
		super( props );
		this.fcmToken = null;
	}

	componentWillMount() {
		const channel = new Firebase.notifications.Android.Channel(
			'main-channel',
			'Main Channel',
			Firebase.notifications.Android.Importance.Max
		);
		Firebase.notifications().android.createChannel( channel );
	}

	async componentDidMount() {
  	this.checkPermission();
		this.getInitialNotif = Firebase
			.notifications()
			.getInitialNotification()
			.then( ( notificationOpen: NotificationOpen ) => {
				if ( notificationOpen ) {
					const notification: Notification = notificationOpen.notification;
					console.log(
						'*************************************** getInitialNotification ***************************************',
						notification
					);
					this.handlerNotification( notification, true );
				}
			} );
		this.getInitialNotif = Firebase
			.notifications()
			.onNotificationOpened( ( notificationOpen: NotificationOpen ) => {
				console.log(
					'*************************************** NotificationOpen ***************************************'
				);
				this.handlerNotification( notificationOpen.notification, true );
				const notification: Notification = notificationOpen.notification;
			} );
		this.notificationDisplayedListener = Firebase
			.notifications()
			.onNotificationDisplayed( ( notification ) => {
				console.log(
					'*************************************** notificationDisplayedListener ***************************************'
				);
			} );

		this.notificationListener = Firebase
			.notifications()
			.onNotification( ( notification ) => {
				console.log(
					'*************************************** LISTENER ***************************************'
				);
				const localNotification = new Firebase.notifications.Notification( {
					sound: 'default',
					show_in_foreground: true
				} )
					.setNotificationId( notification.notificationId )
					.setTitle( notification.title )
					.setBody( notification.body )
					.setData( notification.data )
					.android.setChannelId( 'channelId' ) // e.g. the id you chose above
					// .android.setSmallIcon( 'ic_stat_notification' ) // create this icon in Android Studio
					.android.setColor( '#000000' ) // you can set a color here
					.android.setPriority( Firebase.notifications.Android.Priority.High );

				Firebase.notifications()
					.displayNotification( localNotification )
					.catch( err => console.error( err ) );
			} );
	}

	// 3
	async getToken() {
  	let fcmToken = await AsyncStorage.getItem( 'fcmToken' );
  	if ( !fcmToken ) {
  		fcmToken = await Firebase.messaging().getToken();
  		if ( fcmToken ) {
				this.fcmToken = fcmToken;
				await AsyncStorage.setItem( 'fcmToken', fcmToken );
  		}
  	}
	}

  handlerNotification = ( data ) => {
  	console.log( 'dataaaaaa', data );
  }

  // 1
  async checkPermission() {
  	const enabled = await Firebase.messaging().hasPermission();
  	if ( enabled ) {
  		this.getToken();
  	} else {
  		this.requestPermission();
  	}
  }

  // 2
  async requestPermission() {
  	try {
  		await Firebase.messaging().requestPermission();
  		// User has authorised
  		this.getToken();
  	} catch ( error ) {
  		// User has rejected permissions
  		console.log( 'permission rejected' );
  	}
  }

  render() {
  	let { navigator } = this.props;
  	return (
	    <View style={{ flex: 1 }}>
		    <Onboarding navigator={navigator} />
	    </View>
  	);
  }
}
