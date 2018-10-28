/* @flow */

import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';

import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import styles from './styles';
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
	buttonForward: {
		marginTop: hp( HTP( 210 ) )
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
			<View style={styles.container}>
				<Header title="Biggest challenge" onPressBack={() => this._onPressBack()} />
				<View style={localStyles.inputContainer}>
					<BaseInput
						label="Add your text"
						labelColor={Colors.charcoalGrey}
						placeholder="Add your biggest challenge"
						onChangeText={this.onChangeText}
						style={localStyles.input}
						labelStyle={localStyles.label}
					/>
				</View>
				<ButtonForward
					style={localStyles.buttonForward}
					enabled={enabled}
					onPress={enabled ? () => this._onPressButtonFoward() : null}
				/>
			</View>
		);
	}
}

BiggestChallenge.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default BiggestChallenge;
