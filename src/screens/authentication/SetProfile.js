/* @flow */

import React, { Component } from 'react';
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import { HTP, WTP } from '../../utils/dimensions';
import styles from './styles';

const localStyles = StyleSheet.create( {
	SPInputSpace: {
		marginRight: wp( WTP( 20 ) )
	},
	SPButtonForward: {
		marginTop: hp( HTP( 30 ) )
	},
	addPhotoButton: {
		width: wp( WTP( 87 ) ),
		height: hp( HTP( 87 ) ),
		borderRadius: hp( HTP( 87 ) ) / 2,
		alignSelf: 'center',
		marginBottom: 0,
		marginTop: hp( HTP( 11 ) )
	},
	inputsContainer: {
		padding: hp( HTP( 24 ) )
	},
	inputRow: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: hp( HTP( 36 ) )
	}
} );

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
  			<TouchableOpacity style={localStyles.addPhotoButton}>
  				<Image source={require( '../../assets/images/icons/addPhoto.png' )} />
  			</TouchableOpacity>
  			<View style={localStyles.inputsContainer}>
  				<View style={localStyles.inputRow}>
  					<BaseInput placeholder="John" label="First name" width="46%" containerStyle={localStyles.SPInputSpace} />
  					<BaseInput placeholder="Doe" label="Last name" width="46%" />
  				</View>
  				<BaseInput placeholder="your@email.com" label="Email" />
  				<ButtonForward style={localStyles.SPButtonForward} enabled={enabled} />
  			</View>
  		</View>
  	);
    /* eslint-enable react/jsx-indent */
    /* eslint-enable indent */
  	/* eslint-enable react/jsx-indent-props */
  }
}