/* @flow */

import React, { Component } from 'react';
import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	ScrollView,
	TextInput,
	KeyboardAvoidingView,
	TouchableOpacity
} from 'react-native';
import {
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { HTP } from '../../utils/dimensions';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import ButtonIcon from '../../components/button-icon/ButtonIcon';
import Typography from '../../components/typography/Typography';
import MessageReceived from '../../components/messages/MessageReceived';
import MessageSended from '../../components/messages/MessageSended';
import fonts from '../../theme/fonts';

const imageProfileDefault = require( '../../assets/images/messages/phProfile.png' );

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
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
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
	}
} );

class MessagesDetails extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		person: {
			firstName: 'Frank',
			lastName: 'Doe'
		},
		date: '12:24 PM',
		messages: [
			{
				send: false,
				date: '1 hour ago',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vehicula placerat libero.'
			},
			{
				send: true,
				date: '1 min ago',
				text: 'Awesome! Tell me more!'
			},
			{
				send: false,
				date: '1 min ago',
				text: 'Ok! Wait'
			}
		],
		_textInputText: ''
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

	render() {
		const {
			 person, date, messages, _textInputText
		} = this.state;

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
							{`${person.firstName} ${person.lastName}`}
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

					{messages.map( ( message ) => {
						if ( message.send ) {
							return (
								<MessageSended
									key={message.date + message.text}
									text={message.text}
									date={message.date}
								/>
							);
						}
						return (
							<MessageReceived
								key={message.date + message.text}
								text={message.text}
								image={imageProfileDefault}
								date={message.date}
							/>
						);
					} )}

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

export default MessagesDetails;
