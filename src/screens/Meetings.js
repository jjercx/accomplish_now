/* @flow */

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
	Platform,
	Image,
	FlatList
} from 'react-native';
import { responsiveSize } from '../utils/dimensions';
import Colors from '../theme/palette';
import NavigatorPropType from '../types/navigator';
import ButtonIcon from '../components/button-icon/ButtonIcon';
import Typography from '../components/typography/Typography';
import NavBar from '../components/navbar/NavBar';
import MeetingPreview, {
	MeetingPreviewMode
} from '../components/meetings/MeetingPreview';

import Person from '../entities/Person';
import Meeting, { MeetingState } from '../entities/Meeting';

import imageProfileDefault from '../assets/images/meetings/frankDoeCopia3.png';
import imageUserProfileDefault from '../assets/images/meetings/jhonDoeCopia3.png';

const logoAccomplish = require( '../assets/images/messages/isoGray.png' );

const s = StyleSheet.create( {
	container: {
		flex: 1
	},
	content: {
		flex: 1
	},
	subContainer: {
		flex: 1,
		marginTop: responsiveSize( Platform.OS === 'ios' ? 20 : 0 )
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
	},
	headerButtonsContainer: {
		flexDirection: 'row',
		marginLeft: responsiveSize( 15 )
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
		width: responsiveSize( 18 ),
		height: responsiveSize( 18 )
	},
	buttonAccomplish: {
		paddingTop: responsiveSize( 5 ),
		paddingBottom: responsiveSize( 5 ),
		paddingLeft: responsiveSize( 5 ),
		paddingRight: responsiveSize( 5 )
	},
	notification: {
		backgroundColor: 'red',
		width: responsiveSize( 8 ),
		height: responsiveSize( 8 ),
		borderRadius: 999,
		position: 'absolute',
		top: responsiveSize( 10 ),
		right: responsiveSize( 11 )
	},
	flatList: {
		backgroundColor: Colors.paleGreyThree,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 10
	},
	headerTitle: {
		marginLeft: responsiveSize( 15 )
	}
} );

class Meetings extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		viewSelected: 'current',
		_notifications: true
	};

	_goToNotifications = () => {
		alert("go to notifications screen"); //eslint-disable-line
	};

	_openNotification = () => {
		alert("open notification"); //eslint-disable-line
	};

	_onPressBack = () => {
		const { navigator } = this.props;
		navigator.pop();
	};

	_meetingsPast = () => [
		new Meeting(
			new Person(
				'1',
				'Frank',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'1',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'2',
				'Frank',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'2',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.REJECTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'3',
				'Frank',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'3',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'4',
				'Frank',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'4',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'5',
				'Frank',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'5',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		)
	];

	_meetingsCurrent = () => [
		new Meeting(
			new Person(
				'1',
				'John',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'6',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'2',
				'John',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'7',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.REJECTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'3',
				'John',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'8',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'4',
				'John',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'9',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'5',
				'John',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'10',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		)
	];

	_meetingsFuture = () => [
		new Meeting(
			new Person(
				'1',
				'Mike',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'11',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'2',
				'Mike',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'2',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.REJECTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'3',
				'Mike',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'3',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'4',
				'Mike',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'4',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		),
		new Meeting(
			new Person(
				'5',
				'Mike',
				'Doe',
				'',
				imageProfileDefault,
				'',
				'',
				'',
				'',
				'',
				''
			),
			'5',
			imageUserProfileDefault,
			'Fri, Oct 19, 08:07 PM',
			MeetingState.ACCEPTED,
			'Lorem ipsum dolor sit amet.'
		)
	];

	handleMeetingPress = ( meeting ) => {
		console.log( 'meeting', meeting );
		const { navigator } = this.props;
		navigator.push( {
			screen: 'meetingDetail',
			animationType: 'fade',
			navigatorStyle: { navBarHidden: true },
			passProps: { meeting }
		} );
	}

	render() {
		const { viewSelected, _notifications } = this.state;
		const { navigator: _navigator } = this.props;

		const getData = ( selectedView ) => {
			switch ( selectedView ) {
				case 'future':
					return this._meetingsFuture();
				case 'current':
					return this._meetingsCurrent();
				default:
					return this._meetingsPast();
			}
		};

		return (
			<View style={s.container}>
				<View style={s.subContainer}>
					<View style={s.content}>
						<StatusBar
							barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
						/>
						<View style={s.headerButtonsContainer}>
							<View style={s.headerButtonAccomplishContainer}>
								<TouchableOpacity onPress={() => this._onPressBack()}>
									<View style={s.buttonAccomplish}>
										<Image style={s.logo} source={logoAccomplish} />
									</View>
								</TouchableOpacity>
							</View>
							<View style={s.headerButtonNotificationsContainer}>
								<ButtonIcon
									iconName="notifications-none"
									iconStyle={{ color: Colors.charcoalGrey }}
									onPress={() => this._goToNotifications()}
								/>
								<View
									style={[ s.notification, { opacity: _notifications ? 1 : 0 } ]}
								/>
							</View>
						</View>
						<View style={s.headerTitle}>
							<Typography
								variant="semiLargeTitle"
								color="darkSkyBlue"
								textAlign="left"
							>
								{'Meetings'}
							</Typography>
						</View>
						<View style={s.headerNotificationType}>
							<TouchableOpacity
								style={
									viewSelected === 'past'
										? s.notificationTypeSelected
										: s.notificationTypeDeselected
								}
								onPress={() => this.setState( { viewSelected: 'past' } )}
							>
								<Typography
									variant="smallTitle"
									color={
										viewSelected === 'past' ? 'charcoalGrey' : 'pinkishGrey'
									}
									textAlign="left"
								>
									{'Past'}
								</Typography>
							</TouchableOpacity>
							<TouchableOpacity
								style={
									viewSelected === 'current'
										? s.notificationTypeSelected
										: s.notificationTypeDeselected
								}
								onPress={() => this.setState( { viewSelected: 'current' } )}
							>
								<Typography
									variant="smallTitle"
									color={
										viewSelected === 'current' ? 'charcoalGrey' : 'pinkishGrey'
									}
									textAlign="left"
								>
									{'Today'}
								</Typography>
							</TouchableOpacity>
							<TouchableOpacity
								style={
									viewSelected === 'future'
										? s.notificationTypeSelected
										: s.notificationTypeDeselected
								}
								onPress={() => this.setState( { viewSelected: 'future' } )}
							>
								<Typography
									variant="smallTitle"
									color={
										viewSelected === 'future' ? 'charcoalGrey' : 'pinkishGrey'
									}
									textAlign="left"
								>
									{'Future'}
								</Typography>
							</TouchableOpacity>
						</View>
						<FlatList
							style={s.flatList}
							data={getData( viewSelected )}
							renderItem={( { item } ) => (
								<MeetingPreview
									onPressStartMeeting={this.handleMeetingPress}
									meeting={item}
									mode={MeetingPreviewMode.OWNER}
								/>
							)}
						/>
					</View>
				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}

Meetings.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Meetings;
