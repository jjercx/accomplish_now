/* @flow */

import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import styles from './styles';

export default class SetProfile extends Component {
  state={
  	enabled: true
  }

  render() {
  	let { enabled } = this.state;
  	/* eslint-disable react/jsx-indent */
  	/* eslint-disable indent */
    /* eslint-disable react/jsx-indent-props */
  	return (
  		<View style={styles.container}>
  			<Header title="Set Profile" />
  			<TouchableOpacity style={styles.addPhotoButton}>
  				<Image source={require( '../../assets/images/icons/addPhoto.png' )} />
  			</TouchableOpacity>
  			<View style={styles.inputsContainer}>
  				<View style={styles.inputRow}>
  					<BaseInput placeholder="John" label="First name" width="46%" containerStyle={styles.SPInputSpace} />
  					<BaseInput placeholder="Doe" label="Last name" width="46%" />
  				</View>
  				<BaseInput placeholder="your@email.com" label="Email" />
  				<ButtonForward style={[ styles.SPButtonForward,
  					{ backgroundColor: enabled ? Colors.macaroneAndCheese : Colors.disabled } ]}
  				/>
  			</View>
  		</View>
  	);
    /* eslint-enable react/jsx-indent */
    /* eslint-enable indent */
  	/* eslint-enable react/jsx-indent-props */
  }
}
