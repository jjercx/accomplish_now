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
import { HTP, WTP } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInputForm from '../../components/base-input/BaseInputForm';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import NavigatorPropType from '../../types/navigator';
import s from './styles';
import { actSetProfileData } from '../../actions/authentication';

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
		alignContent: 'space-around',
		justifyContent: 'space-around'
	}
} );

class CurrentlyWorkingOn extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = { enabled: false };
		this._onChangeText = this._onChangeText.bind( this );
		this._onPressBack = this._onPressBack.bind( this );
		this._onPressSave = this._onPressSave.bind( this );
		this._onPressButtonFoward = this._onPressButtonFoward.bind( this );
	}

	componentWillMount() {
		let { initialize, editing, user } = this.props;
		if ( editing ) {
			initialize( {
				workingOn: user.workingOn ? user.workingOn : ''
			} );
		}
	}

	componentDidMount() {
		this.baseInput.blur();
		setTimeout( () => {
			this.baseInput.focus();
		}, 500 );
	}

	_onChangeText( text ) {
		const isEnabled = ( text.length > 3 );
		this.setState( { enabled: isEnabled } );
	}

	_onPressButtonFoward() {
		const { navigator } = this.props;
		navigator.push( { screen: 'addSkills' } );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onPressSave( values ) {
		let { actSetProfileData } = this.props;
		actSetProfileData( values, this._onPressBack );
	}

	render() {
		let { enabled } = this.state;
		const { editing, handleSubmit } = this.props;

		const isEnabled = enabled || editing;

		const handlerOnPress = editing
			? this._onPressSave
			: this._onPressButtonFoward;

		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="Currently working on" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<Field
						name="workingOn"
						onRef={( ref ) => { this.baseInput = ref; }}
						withRef
						label="Add your text"
						labelColor={Colors.charcoalGrey}
						placeholder="Add your text here"
						onChangeText={this.onChangeText}
						style={localStyles.input}
						component={BaseInputForm}
						labelStyle={localStyles.label}
					/>
				</View>
				<View style={localStyles.buttonContainer}>
					<ButtonForward
						style={s.buttonForward}
						enabled
						editing={editing}
						onPress={handleSubmit( handlerOnPress )}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

CurrentlyWorkingOn.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired,
	initialize: PropTypes.func,
	user: PropTypes.any.isRequired,
	handleSubmit: PropTypes.func
};

CurrentlyWorkingOn.defaultProps = {
	editing: false,
	initialize: () => {},
	handleSubmit: () => {}
};

const mapStateToProps = store => ( {
	user: store.authentication.user
} );

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actSetProfileData }, dispatch );

export default reduxForm( {
	form: 'createAccountForm',
	destroyOnUnmount: false
} )( connect( mapStateToProps, mapDispatchToProps )( CurrentlyWorkingOn ) );
