/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import s from './styles';
import NavigatorPropType from '../../types/navigator';

const localStyles = StyleSheet.create( {
	inputContainer: {
		marginLeft: wp( WTP( 25 ) ),
		marginTop: hp( HTP( 40 ) ),
		marginRight: wp( WTP( 25 ) )
	},
	input: {
		fontSize: hp( HTP( 20 ) )
	},
	label: {
		marginBottom: hp( HTP( 11 ) )
	}
} );

class BiggestChallenge extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = { enabled: false };
		this.onChangeText = this.onChangeText.bind( this );
	}

	componentDidMount() {
		this.baseInput.blur();
		setTimeout( () => {
			this.baseInput.focus();
		}, 500 );
	}

	onChangeText( text ) {
		const isEnabled = ( text.length > 3 );
		this.setState( { enabled: isEnabled } );
	}

	_onPressButtonFoward() {
		const { navigator } = this.props;
		navigator.push( { screen: 'currentlyWorkingOn' } );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		let { enabled } = this.state;

		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="Biggest challenge" onPressBack={() => this._onPressBack()} />
				<View style={localStyles.inputContainer}>
					<BaseInput
						onRef={( ref ) => { this.baseInput = ref; }}
						label="Add your text"
						labelColor={Colors.charcoalGrey}
						placeholder="Add your biggest challenge"
						onChangeText={this.onChangeText}
						style={localStyles.input}
						labelStyle={localStyles.label}
					/>
				</View>
				<View style={[ s.flex1, s.space_a ]}>
					<ButtonForward
						style={s.buttonForward}
						enabled={enabled}
						onPress={enabled ? () => this._onPressButtonFoward() : null}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

BiggestChallenge.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default BiggestChallenge;
