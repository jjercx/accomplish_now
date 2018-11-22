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
import BaseInput from '../../components/base-input/BaseInputForm';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import s from './styles';
import NavigatorPropType from '../../types/navigator';
import { actPushAccomplisment } from '../../actions/authentication';
import { required } from '../../utils/Validations';

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

class AddAccomplishment extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = { enabled: false };
		this._onChangeText = this._onChangeText.bind( this );
		this._onPressBack = this._onPressBack.bind( this );
		this._onPressSave = this._onPressSave.bind( this );
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

	_onPressSave( value ) {
		let { actSetAccomplisment } = this.props;
		let accomplishmentsObj = {
			accomplishments: {
				description: value.accomplishment,
				timestamp: new Date()
			}
		};
		actSetAccomplisment( accomplishmentsObj, this._onPressBack );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	render() {
		let { enabled } = this.state;
		const { editing, handleSubmit } = this.props;

		const isEnabled = enabled || editing;

		return (
			<KeyboardAvoidingView style={s.container} behavior="padding">
				<Header title="Add Accomplishment" titleSize="small" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<Field
						name="accomplishment"
						onRef={( ref ) => { this.baseInput = ref; }}
						label="Add your text"
						labelColor={Colors.charcoalGrey}
						placeholder="Add your accomplishment"
						onChangeText={this._onChangeText}
						style={localStyles.input}
						validate={required}
						component={BaseInput}
						labelStyle={localStyles.label}
					/>
				</View>
				<View style={localStyles.buttonContainer}>
					<ButtonForward
						style={s.buttonForward}
						editing={editing}
						enabled={isEnabled}
						onPress={handleSubmit( this._onPressSave )}
					/>
				</View>
			</KeyboardAvoidingView>
		);
	}
}

AddAccomplishment.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired,
	handleSubmit: PropTypes.func
};

AddAccomplishment.defaultProps = {
	editing: false,
	handleSubmit: () => {}
};

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actSetAccomplisment: actPushAccomplisment }, dispatch );

export default reduxForm( {
	form: 'createAccountForm'
} )( connect( null, mapDispatchToProps )( AddAccomplishment ) );
