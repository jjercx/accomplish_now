/* eslint-disable react/jsx-no-bind */
/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View, StyleSheet, StatusBar, FlatList, Platform,
	ActivityIndicator
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actGetMessages, actOpenConversation } from '../../actions/messages';
import { HTP, WTP } from '../../utils/dimensions';
import { formatDate } from '../../utils/formats';
import NavigatorPropType from '../../types/navigator';
import Typography from '../../components/typography/Typography';
import MessagePreview from '../../components/messages/MessagePreview';
import Header from '../../components/header/Header';
import NavBar from '../../components/navbar/NavBar';
import Message from '../../entities/Message';
import Person from '../../entities/Person';

// const logoAccomplish = require( '../../assets/images/messages/isoGray.png' );
const avatarImg = require( '../../assets/images/messages/phProfile.png' );
const notificationIcon = require( '../../assets/images/icons/notifications.png' );

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
		return messages.map( msg => new Message( new Person( msg.id, msg.firstName, msg.lastName, '', msg.image ? { uri: msg.image } : avatarImg, '', '', '', '', '', '' ), msg.threadId, formatDate( msg.createdOn ), msg.text ) );
	}

	_openMessageDetail = ( messageId, receiverId ) => {
		const { actOpenConversationInit } = this.props;
		actOpenConversationInit( messageId );
		const { navigator } = this.props;
		navigator.push( {
			screen: 'messagesDetails',
			passProps: {
				receiverId
					  }
		} );
	}

	_buttonIcons = () => [
		{ id: 1, icon: notificationIcon, onPress: this._goToNotifications.bind( this ) }
	 ];

	 _onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		const { navigator: _navigator, isFetching, messages } = this.props;
		const { _notifications } = this.state;

		return (
			<View style={s.container}>
				<View style={s.subContainer}>
					<StatusBar
						barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
					/>
					<Header
						onPressBack={this._onPressBack.bind( this )}
						buttonIcons={this._buttonIcons()}
						notification={_notifications}
					/>
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
							data={messages ? this._messages() : []}
							keyExtractor={item => item.messageId}
							renderItem={( { item } ) => (
								<MessagePreview
									onMessagePress={id => this._openMessageDetail( id, item.person.id )}
									{...item}
								/>
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
	navigator: NavigatorPropType.isRequired,
	messages: PropTypes.arrayOf( PropTypes.any ).isRequired,
	isFetching: PropTypes.bool.isRequired,
	actMessagesInit: PropTypes.func.isRequired,
	actOpenConversationInit: PropTypes.func.isRequired
};

const mapStateToProps = store => ( {
	messages: store.messages.messages,
	isFetching: store.messages.isFetching
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	actMessagesInit: actGetMessages,
	actOpenConversationInit: actOpenConversation
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( Messages ) );
