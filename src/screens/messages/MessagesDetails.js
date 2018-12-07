/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	ScrollView,
	FlatList,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity,
	ActivityIndicator
} from 'react-native';

import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

import {
	actGetMessagesByThreadId,
	actNewMessage,
	actInputTextChanged
} from '../../actions/messages';
import { actGetUser } from '../../actions/users';

import { responsiveSize } from '../../utils/dimensions';
import { formatDate } from '../../utils/formats';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import ButtonIcon from '../../components/button-icon/ButtonIcon';
import Typography from '../../components/typography/Typography';
import MessageReceived from '../../components/messages/MessageReceived';
import MessageSended from '../../components/messages/MessageSended';
import fonts from '../../theme/fonts';

const s = StyleSheet.create( {
	container: {
		flex: 1,
		marginTop: responsiveSize( Platform.OS === 'ios' ? 20 : 0 )
	},
	headerContainer: {
		flexDirection: 'row',
		borderBottomWidth: 0.5,
		borderBottomColor: Colors.pinkishGrey
	},
	tipographyContainer: {
		display: 'flex',
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 35
	},
	conversationTime: {
		alignItems: 'center',
		padding: 20
	},
	messageInputContainer: {
		borderTopWidth: 0.5,
		borderTopColor: Colors.pinkishGrey,
		flexDirection: 'row'
	},
	inputContainer: {
		flex: 1,
		padding: 13
	},
	textInput: {
		fontSize: responsiveSize( 17 ),
		fontFamily: fonts.productSansRegular,
		paddingBottom: 0,
		paddingLeft: 0,
		paddingTop: 0
	},
	buttonSend: {
		alignItems: 'center',
		justifyContent: 'center',
		padding: 13
	},
	flatList: {
		flex: 1,
		marginTop: responsiveSize( 5 )
	}
} );

const avatarImg = require( '../../assets/images/messages/phProfile.png' );

class MessagesDetails extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this._onChangeText = this._onChangeText.bind( this );
	}

	state = {
		date: '12:24 PM'
	}

	componentWillMount() {
		const { actMessagesByThreadIdInit, threadId } = this.props;
		actMessagesByThreadIdInit( threadId );
	}

	_onUserPress = ( userId ) => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( userId );
		navigator.push( { screen: 'userProfile' } );
	}

	_onSendMessage = () => {
		const {
			actNewMessageInit, threadId, user, inputMessageText, userToken, receiverId
		} = this.props;
		actNewMessageInit( threadId, inputMessageText, user, userToken, receiverId );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onChangeText( text ) {
		const { actInputTextChangedInit } = this.props;
		actInputTextChangedInit( text );
	}

	_fullName() {
		const { messages } = this.props;
		let participants = messages
			.filter( message => !message.send )
			.map( data => `${data.firstName} ${data.lastName}` );

		participants = [ ...new Set( participants ) ];

		return participants.join( ', ' );
	}

	render() {
		const { date } = this.state;
		const {
			messages, isFetching, isSending, inputMessageText
		} = this.props;
		return (
			<KeyboardAvoidingView style={s.container} behavior={Platform.OS === 'ios' ? 'padding' : null}>
				<StatusBar
					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
				/>

				<View style={s.headerContainer}>
					<ButtonIcon
						iconName="arrow-back"
						iconStyle={{ color: Colors.charcoalGrey }}
						onPress={() => this._onPressBack()}
					/>
					<View style={s.tipographyContainer}>
						<Typography
							variant="smallTitle"
							color="charcoalGrey"
							textAlign="left"
						>
							{this._fullName()}
						</Typography>
					</View>
				</View>

				<ScrollView
					ref={( ref ) => { this.scrollView = ref; }}
					onContentSizeChange={() => {
						this.scrollView.scrollToEnd( { animated: true } );
					}}
				>
					<View style={s.conversationTime}>
						<Typography
							variant="smallBody"
							color="pinkishGrey"
							textAlign="left"
						>
							{date}
						</Typography>
					</View>

					{isFetching ? <ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} /> : (
						<FlatList
							style={s.flatList}
							data={messages}
							keyExtractor={item => item.id}
							renderItem={( { item } ) => (
								item.send
									? (
										<MessageSended
											key={item.id}
											text={item.text}
											date={formatDate( item.createdOn )}
										/>
									)
									: (
										<MessageReceived
											key={item.id}
											text={item.text}
											image={item.image ? { uri: item.image } : avatarImg}
											date={formatDate( item.createdOn )}
											onUserPress={() => this._onUserPress( item.senderId )}
										/>
									)
							)}
						/>
					)}
				</ScrollView>

				<View style={s.messageInputContainer}>
					<View style={s.inputContainer}>
						<TextInput
							ref={( ref ) => { this.textInput = ref; }}
							style={s.textInput}
							placeholder="Your message"
							value={inputMessageText}
							onChangeText={this._onChangeText}
							onFocus={() => setTimeout( () => this.scrollView.scrollToEnd(
								{ animated: true } ), 500 )}
						/>
					</View>
					<TouchableOpacity
						style={s.buttonSend}
						onPress={isSending ? () => {} : this._onSendMessage}
					>
						<Typography
							variant="smallBody"
							color="charcoalGrey"
							textAlign="left"
						>
							{'SEND'}
						</Typography>
					</TouchableOpacity>
				</View>

			</KeyboardAvoidingView>
		);
	}
}

MessagesDetails.propTypes = {
	navigator: NavigatorPropType.isRequired,
	user: PropTypes.any.isRequired,
	threadId: PropTypes.string.isRequired,
	messages: PropTypes.arrayOf( PropTypes.any ).isRequired,
	isFetching: PropTypes.bool.isRequired,
	isSending: PropTypes.bool.isRequired,
	inputMessageText: PropTypes.string.isRequired,
	actMessagesByThreadIdInit: PropTypes.func.isRequired,
	actNewMessageInit: PropTypes.func.isRequired,
	actInputTextChangedInit: PropTypes.func.isRequired,
	userToken: PropTypes.string.isRequired,
	receiverId: PropTypes.string.isRequired
};

const mapStateToProps = store => ( {
	user: store.authentication.user,
	threadId: store.messages.activeThreadId,
	messages: store.messages.threadMessages,
	isFetching: store.messages.isFetching,
	isSending: store.messages.isSending,
	inputMessageText: store.messages.inputText,
	userToken: store.authentication.user_token
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	actMessagesByThreadIdInit: actGetMessagesByThreadId,
	actNewMessageInit: actNewMessage,
	actInputTextChangedInit: actInputTextChanged,
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( MessagesDetails ) );
