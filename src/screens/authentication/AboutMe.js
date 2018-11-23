/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';

import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actSetProfileData } from '../../actions/authentication';
import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInput from '../../components/base-input/BaseInputForm';
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
		this._onPressSave = this._onPressSave.bind( this );
		this._onChangeIAmLookingToText = this._onChangeIAmLookingToText.bind( this );
		this._onPressBack = this._onPressBack.bind( this );
	}

	componentWillMount() {
		let { initialize, editing, user } = this.props;
		if ( editing && user.aboutMe ) {
			let expertise = user.aboutMe.expertise ? user.aboutMe.expertise[ 0 ].desc : '';
			let interests = user.aboutMe.interests ? user.aboutMe.interests[ 0 ].desc : '';
			this.setState( {
				iAmText: expertise,
				iAmLookingToText: interests
			} );
			initialize( {
				aboutMe: {
					expertise,
					interests
				}
			} );
		}
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

	_onPressSave( values ) {
		let { actSetProfile } = this.props;
		let expertise = [];
		let interests = [];
		if ( values ) {
			expertise.push( { desc: values.aboutMe.expertise } );
			interests.push( { desc: values.aboutMe.interests } );
			let obj = {
				aboutMe: {
					expertise,
					interests
				}
			};
			actSetProfile( obj, this._onPressBack );
		}
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		let { enabled, iAmText, iAmLookingTo } = this.state;
		const { editing, handleSubmit } = this.props;

		const isEnabled = enabled || editing;

		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="About me" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<Field
						name="aboutMe.expertise"
						onRef={( ref ) => { this.baseInput = ref; }}
						label="I am"
						labelColor={Colors.charcoalGrey}
						placeholder="Lorem ipsum dolor sit amet..."
						component={BaseInput}
						onChangeText={this._onChangeIAmText}
						style={localStyles.input}
						labelStyle={localStyles.label}
						value={iAmText}
					/>
				</View>
				<View style={localStyles.inputContainer}>
					<Field
						name="aboutMe.interests"
						onRef={( ref ) => { this.baseInput = ref; }}
						label="I am looking to"
						labelColor={Colors.charcoalGrey}
						component={BaseInput}
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
						onPress={handleSubmit( this._onPressSave )}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

AboutMe.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired,
	initialize: PropTypes.func,
	user: PropTypes.any.isRequired,
	handleSubmit: PropTypes.func
};

AboutMe.defaultProps = {
	editing: false,
	initialize: () => {},
	handleSubmit: () => {}
};

const mapStateToProps = store => ( {
	user: store.authentication.user
} );

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actSetProfile: actSetProfileData }, dispatch );

export default reduxForm( {
	form: 'createAccountForm'
} )( connect( mapStateToProps, mapDispatchToProps )( AboutMe ) );
