/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
	},
	buttonContainer: {
		flex: 1,
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center'
	}
} );

class AboutMe extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = {
			iAmText: '',
			iAmLookingToText: '',
			enabled: false
		};

		this._onChangeIAmText = this._onChangeIAmText.bind( this );
		this._onChangeIAmLookingToText = this._onChangeIAmLookingToText.bind( this );
		this._onPressBack = this._onPressBack.bind( this );
	}

	componentDidMount() {
		this.baseInput.blur();
		setTimeout( () => {
			this.baseInput.focus();
		}, 500 );
	}

	_onChangeIAmText( iAmText ) {
		const { iAmLookingToText } = this.state;
		const isEnabled = ( ( iAmText.length > 3 ) || ( iAmLookingToText.length > 3 ) );
		this.setState( { enabled: isEnabled, iAmText } );
	}

	_onChangeIAmLookingToText( iAmLookingToText ) {
		const { iAmText } = this.state;
		const isEnabled = ( ( iAmLookingToText.length > 3 ) || ( iAmText.length > 3 ) );
		this.setState( { enabled: isEnabled, iAmLookingToText } );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		let { enabled, iAmText, iAmLookingTo } = this.state;
		const { editing } = this.props;

		const isEnabled = enabled || editing;

		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="About me" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<BaseInput
						onRef={( ref ) => { this.baseInput = ref; }}
						label="I am"
						labelColor={Colors.charcoalGrey}
						placeholder="Lorem ipsum dolor sit amet..."
						onChangeText={this._onChangeIAmText}
						style={localStyles.input}
						labelStyle={localStyles.label}
						value={iAmText}
					/>
				</View>
				<View style={localStyles.inputContainer}>
					<BaseInput
						onRef={( ref ) => { this.baseInput = ref; }}
						label="I am looking to"
						labelColor={Colors.charcoalGrey}
						placeholder="Lorem ipsum dolor sit amet..."
						onChangeText={this._onChangeIAmLookingToText}
						style={localStyles.input}
						labelStyle={localStyles.label}
						value={iAmLookingTo}
					/>
				</View>
				<View style={localStyles.buttonContainer}>
					<ButtonForward
						style={s.buttonForward}
						enabled={isEnabled}
						editing={editing}
						onPress={isEnabled ? this._onPressBack : null}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

AboutMe.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired
};

AboutMe.defaultProps = {
	editing: false
};

export default AboutMe;
