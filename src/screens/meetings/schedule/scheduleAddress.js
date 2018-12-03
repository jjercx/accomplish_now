/* eslint-disable react/prefer-stateless-function,react/prop-types */
import React, { Component } from 'react';
import {
	View, StatusBar, Platform, KeyboardAvoidingView, TextInput, Image
} from 'react-native';
import styles from './styles';
import Header from '../../../components/register/Header';
import Typography from '../../../components/typography/Typography';

const checkOn = require( '../../../assets/images/meetings/checkOn.png' );

class ScheduleAddress extends Component {
	constructor() {
		super();
		this._onPressBack = this._onPressBack.bind( this );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		return (
			<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
				<StatusBar
					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
				/>
				<Header title="Add Address" onPressBack={() => this._onPressBack()} />
				<View style={styles.addressForm}>
					<Typography
						variant="midTitle"
						color="charcoalGrey"
						textAlign="left"
					>
						{'Add your Address'}
					</Typography>
					<View style={styles.addressInputContainer}>
						<TextInput
							placeholder="Ej.: New York"
							style={styles.addressInput}
						/>
					</View>
				</View>
				<View style={styles.addressButtonContainer}>
					<Image source={checkOn} resizeMode="contain" style={styles.addressButton} />
				</View>

			</KeyboardAvoidingView>
		);
	}
}

export default ScheduleAddress;
