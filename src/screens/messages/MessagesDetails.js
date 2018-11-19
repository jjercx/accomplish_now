/* @flow */

import React, { Component } from 'react';
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

import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import moment from 'moment';
import { actGetMessagesByThreadId } from '../../actions/messages';
import { HTP } from '../../utils/dimensions';
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
		marginTop: hp( HTP( Platform.OS === 'ios' ? 20 : 0 ) )
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
		fontSize: hp( HTP( 17 ) ),
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
		marginTop: hp( HTP( 5 ) )
	}
} );

const avatarImg = require( '../../assets/images/messages/phProfile.png' );

class MessagesDetails extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	static formatDate( unixTimestamp ) {
		return moment.unix( unixTimestamp ).format( 'ddd[,] MMM DD h:mm A' );
	}

	state = {
		date: '12:24 PM',
		_textInputText: ''
	}

	componentWillMount() {
		const { actMessagesByThreadIdInit, threadId } = this.props;
		actMessagesByThreadIdInit( threadId );
	}

	_onSendMessage = () => {
		const { messages, _textInputText } = this.state;
		let _messages = messages.slice();
		_messages.push( {
			send: true,
			date: 'Less than a minute ago',
			text: _textInputText
		} );
		this.setState( {
			messages: _messages,
			_textInputText: ''
		} );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
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
		const { date, _textInputText } = this.state;
		const { messages, isFetching } = this.props;

		// const message = this.props.messages[this.props.messageId]; // redux

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
											date={MessagesDetails.formatDate( item.createdOn )}
										/>
									)
									: (
										<MessageReceived
											key={item.id}
											text={item.text}
											image={item.image ? { uri: item.image } : avatarImg}
											date={MessagesDetails.formatDate( item.createdOn )}
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
							value={_textInputText}
							onChangeText={text => this.setState( { _textInputText: text } )}
							onFocus={() => setTimeout( () => this.scrollView.scrollToEnd(
								{ animated: true } ), 500 )}
						/>
					</View>
					<TouchableOpacity style={s.buttonSend} onPress={this._onSendMessage}>
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
	navigator: NavigatorPropType.isRequired
};

const mapStateToProps = store => ( {
	threadId: store.messages.activeThreadId,
	messages: store.messages.threadMessages,
	isFetching: store.messages.isFetching
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	actMessagesByThreadIdInit: actGetMessagesByThreadId
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( MessagesDetails ) );
