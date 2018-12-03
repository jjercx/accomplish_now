import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	View,
	Image,
	TouchableOpacity,
	StyleSheet,
	Alert,
	ActivityIndicator
} from 'react-native';
import { bindActionCreators } from 'redux';
import {
	reduxForm, Field, change, formValueSelector
} from 'redux-form';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { actUploadImg, actSetProfileData } from '../../actions/authentication';
import Header from '../../components/register/Header';
import BaseInputForm from '../../components/base-input/BaseInputForm';
import ButtonForward from '../../components/button-icon/ButtonForward';
import { responsiveSize } from '../../utils/dimensions';
import styles from './styles';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import { required, validateEmail, onlyWords } from '../../utils/Validations';

const localStyles = StyleSheet.create( {
	SPInputSpace: {
		marginRight: responsiveSize( 20 )
	},
	SPButtonForward: {
		marginTop: responsiveSize( 30 )
	},
	addPhotoButton: {
		width: responsiveSize( 87 ),
		height: responsiveSize( 87 ),
		borderRadius: responsiveSize( 87 ) / 2,
		alignSelf: 'center',
		marginBottom: 0,
		marginTop: responsiveSize( 11 )
	},
	inputsContainer: {
		padding: responsiveSize( 24 )
	},
	inputRow: {
		flexDirection: 'row',
		marginBottom: responsiveSize( 36 )
	},
	imageProfile: {
		width: responsiveSize( 87 ),
		height: responsiveSize( 87 ),
		borderRadius: responsiveSize( 87 ) / 2
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
			isLoading: false
		};
		this._callback = this._callback.bind( this );
		this.uploadImage = this.uploadImage.bind( this );
		this._onPressBack = this._onPressBack.bind( this );
		this._onPressSave = this._onPressSave.bind( this );
		this._saveCallback = this._saveCallback.bind( this );
		this._onPressButtonFoward = this._onPressButtonFoward.bind( this );
		this._onPressProfilePicture = this._onPressProfilePicture.bind( this );
	}

	componentWillMount() {
		let { initialize, editing, user } = this.props;
		if ( editing ) {
			this.setState( { avatarSource: { uri: user.basicInfo && user.basicInfo.profilePhotoUrl } } );
			initialize( {
				basicInfo: {
					'firstName': user.basicInfo && user.basicInfo.firstName,
					'lastName': user.basicInfo && user.basicInfo.lastName,
					'email': user.basicInfo && user.basicInfo.email,
					'profilePhotoUrl': user.basicInfo && user.basicInfo.profilePhotoUrl,
					'phoneNumber': user.basicInfo && user.basicInfo.phoneNumber
				}
			} );
		}
	}

	_callback = ( res ) => {
		let { dispatch } = this.props;
		this.setState( { isLoading: false } );
		dispatch( change( 'createAccountForm', 'basicInfo.profilePhotoUrl', res ) );
	}

	_onPressButtonFoward() {
  	const { navigator, photo } = this.props;
		if ( photo ) {
  	navigator.push( { screen: 'biggestChallenge' } );
		} else {
			Alert.alert(
				'Ups!',
				'You must select a photo',
				[
					{ text: 'OK' }
				],
				{ cancelable: false }
			);
		}
	}

	_saveCallback() {
		const { navigator } = this.props;
		this.setState( { isLoading: false }, navigator.pop() );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onPressSave( values ) {
  	const { actSetProfileData, photo } = this.props;
		if ( photo ) {
			this.setState( { isLoading: true }, actSetProfileData( values, this._saveCallback ) );
		} else {
			Alert.alert(
				'Ups!',
				'You must select a photo',
				[
					{ text: 'OK' }
				],
				{ cancelable: false }
			);
		}
	}

	/* eslint-disable no-console */
	_onPressProfilePicture() {
  	ImagePicker.showImagePicker( options, ( response ) => {
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
					isLoading: true
		    }, this.uploadImage( response.uri ) );
		  }
  	} );
	}

	uploadImage( source ) {
		let { actUploadImg } = this.props;
		actUploadImg( source, this._callback );
	}
	/* eslint-enable no-console */

	render() {
		let {
			enabled, avatarSource, isLoading
		} = this.state;
		const { editing, handleSubmit } = this.props;

		const isEnabled = enabled || editing;

		const handlerOnPress = editing
			? this._onPressSave
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
  				<Image style={localStyles.imageProfile} source={!avatarSource ? require( '../../assets/images/icons/addPhoto.png' ) : avatarSource} />
  			</TouchableOpacity>
  			<View style={localStyles.inputsContainer}>
  				<View style={localStyles.inputRow}>
  					<Field name="basicInfo.firstName" placeholder="John" label="First name" width="46%" containerStyle={localStyles.SPInputSpace} validate={[ required, onlyWords ]} component={BaseInputForm} />
  					<Field name="basicInfo.lastName" placeholder="Doe" label="Last name" width="46%" component={BaseInputForm} validate={[ required, onlyWords ]} />
  				</View>
  				<Field name="basicInfo.email" autoCapitalize="none" placeholder="your@email.com" label="Email" component={BaseInputForm} validate={[ required, validateEmail ]} />
  				{ isLoading ? <ActivityIndicator size="large" color={Colors.orange} style={localStyles.SPButtonForward} /> : (
							<ButtonForward
												style={localStyles.SPButtonForward}
												enabled={isEnabled}
												editing={editing}
												onPress={handleSubmit( handlerOnPress )}
							/>
							)}
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
	navigator: NavigatorPropType.isRequired,
	initialize: PropTypes.func,
	user: PropTypes.any.isRequired,
	handleSubmit: PropTypes.func,
	dispatch: PropTypes.func
};

SetProfile.defaultProps = {
	editing: false,
	initialize: () => {},
	handleSubmit: () => {},
	dispatch: () => {}
};

const mapStateToProps = ( store ) => {
	const selector = formValueSelector( 'createAccountForm' );
	return {
		photo: selector( store, 'basicInfo.profilePhotoUrl' ),
		user: store.authentication.user
	};
};

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actUploadImg, actSetProfileData }, dispatch );

export default reduxForm( {
	form: 'createAccountForm',
	destroyOnUnmount: false
} )( connect( mapStateToProps, mapDispatchToProps )( SetProfile ) );
