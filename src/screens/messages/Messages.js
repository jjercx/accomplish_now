/* @flow */

import React, { Component } from 'react';
import {
	View, StyleSheet, Image, TouchableOpacity, StatusBar, FlatList, Platform,
	ActivityIndicator
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { actGetMessages } from '../../actions/messages';
import { HTP, WTP } from '../../utils/dimensions';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import ButtonIcon from '../../components/button-icon/ButtonIcon';
import Typography from '../../components/typography/Typography';
import MessagePreview from '../../components/messages/MessagePreview';
import NavBar from '../../components/navbar/NavBar';
import Message from '../../entities/Message';
import Person from '../../entities/Person';

const logoAccomplish = require( '../../assets/images/messages/isoGray.png' );
const avatarImg = require( '../../assets/images/messages/phProfile.png' );

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

	componentWillMount() {
		let { actMessagesInit } = this.props;
		actMessagesInit();
	}

	_goToNotifications = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'notifications' } );
	}

	_messages = () => {
		let { messages } = this.props;
		return messages.map( msg => new Message( new Person( msg.id, msg.firstName, msg.lastName, '', msg.image ? { uri: msg.image } : avatarImg, '', '', '', '', '', '' ), msg.threadId, moment.unix( msg.createdOn ).format( 'ddd[,] MMM DD h:mm A' ), msg.text ) );
	}

	_openMessageDetail = ( messageId ) => {
		console.log(`open conversation id: ${messageId}`); //eslint-disable-line
		// TODO: save the messageId in redux

		const { navigator } = this.props;
		navigator.push( { screen: 'messagesDetails' } );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { navigator: _navigator, isFetching } = this.props;
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
					{isFetching ? <ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} /> : (
						<FlatList
							style={s.flatList}
							data={this._messages()}
							keyExtractor={item => item.messageId}
							renderItem={( { item } ) => (
								<MessagePreview onMessagePress={this._openMessageDetail} {...item} />
							)}
						/>
					) }
				</View>
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}

Messages.propTypes = {
	navigator: NavigatorPropType.isRequired
};

const mapStateToProps = store => ( {
	messages: store.messages.messages,
	isFetching: store.messages.isFetching
} );

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actMessagesInit: actGetMessages }, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( Messages ) );
