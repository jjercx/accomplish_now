import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet
} from 'react-native';

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from 'react-native-responsive-screen';

import ImagePicker from 'react-native-image-picker';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInput';
import ButtonForward from '../../components/button-icon/ButtonForward';
import { HTP, WTP } from '../../utils/dimensions';
import styles from './styles';
import NavigatorPropType from '../../types/navigator';

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
	},
	imageProfile: {
		width: wp( WTP( 87 ) ),
		height: hp( HTP( 87 ) ),
		borderRadius: hp( HTP( 87 ) ) / 2
	}
} );

const options = {
	title: 'Select Avatar',
	quality: 1.0,
	maxWidth: 500,
	maxHeight: 500,
	  torageOptions: {
		skipBackup: true
	}
};


class SetProfile extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = {
			enabled: true,
			avatarSource: null,
			selectAvatar: false
		};

		this._onPressBack = this._onPressBack.bind( this );
		this._onPressButtonFoward = this._onPressButtonFoward.bind( this );
		this._onPressProfilePicture = this._onPressProfilePicture.bind( this );
	}

	_onPressButtonFoward() {
  	const { navigator } = this.props;
  	navigator.push( { screen: 'biggestChallenge' } );
	}

	_onPressBack() {
  	const { navigator } = this.props;
  	navigator.pop();
	}

	/* eslint-disable no-console */
	_onPressProfilePicture() {
  	ImagePicker.showImagePicker( options, ( response ) => {
  	  console.log( 'Response = ', response );

		  if ( response.didCancel ) {
		    console.log( 'User cancelled image picker' );
		  } else if ( response.error ) {
		    console.log( 'ImagePicker Error: ', response.error );
		  } else if ( response.customButton ) {
		    console.log( 'User tapped custom button: ', response.customButton );
		  } else {
		    // const source = { uri: response.uri };

		    // You can also display the image using data:
		    const source = { uri: `data:image/jpeg;base64,${response.data}` };

  			console.log( source );

		    this.setState( {
		      avatarSource: source,
  				selectAvatar: true
		    } );
		  }
  	} );
	}
	/* eslint-enable no-console */

	render() {
		let { enabled, avatarSource, selectAvatar } = this.state;
		const { editing } = this.props;

		const isEnabled = enabled || editing;

		const handlerOnPress = editing
			? this._onPressBack
			: this._onPressButtonFoward;

  	/* eslint-disable react/jsx-indent */
  		/* eslint-disable indent */
    /* eslint-disable react/jsx-indent-props */
  	return (
  		<View style={styles.container}>
  			<Header title="Set Profile" onPressBack={this._onPressBack} />
  			<TouchableOpacity
					style={localStyles.addPhotoButton}
					onPress={this._onPressProfilePicture}
  			>
  				<Image style={localStyles.imageProfile} source={!selectAvatar ? require( '../../assets/images/icons/addPhoto.png' ) : avatarSource} />
  			</TouchableOpacity>
  			<View style={localStyles.inputsContainer}>
  				<View style={localStyles.inputRow}>
  					<BaseInput placeholder="John" label="First name" width="46%" containerStyle={localStyles.SPInputSpace} />
  					<BaseInput placeholder="Doe" label="Last name" width="46%" />
  				</View>
  				<BaseInput placeholder="your@email.com" label="Email" />
  				<ButtonForward
					style={localStyles.SPButtonForward}
					enabled={isEnabled}
					editing={editing}
					onPress={isEnabled ? handlerOnPress : null}
  				/>
  			</View>
  		</View>
  	);
    /* eslint-enable react/jsx-indent */
    /* eslint-enable indent */
  	/* eslint-enable react/jsx-indent-props */
	}
}

SetProfile.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired
};

SetProfile.defaultProps = {
	editing: false
};

export default SetProfile;
