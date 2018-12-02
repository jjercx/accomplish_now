/* @flow */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { responsiveSize } from '../../utils/dimensions';
import Header from '../../components/register/Header';
import BaseInputForm from '../../components/base-input/BaseInputForm';
import ButtonForward from '../../components/button-icon/ButtonForward';
import Colors from '../../theme/palette';
import s from './styles';
import NavigatorPropType from '../../types/navigator';
import { actSetProfileData } from '../../actions/authentication';

const localStyles = StyleSheet.create( {
	inputContainer: {
		marginLeft: responsiveSize( 25 ),
		marginTop: responsiveSize( 40 ),
		marginRight: responsiveSize( 25 )
	},
	input: {
		fontSize: responsiveSize( 20 )
	},
	label: {
		marginBottom: responsiveSize( 11 )
	},
	buttonContainer: {
		flex: 1,
		display: 'flex',
		alignContent: 'space-around',
		justifyContent: 'space-around'
	}
} );

class BiggestChallenge extends Component {
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
				biggestChallenge: user.biggestChallenge ? user.biggestChallenge : ''
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
		navigator.push( { screen: 'currentlyWorkingOn' } );
	}

	_onPressSave( values ) {
		let { actSetProfileData } = this.props;
		actSetProfileData( values, this._onPressBack );
	}

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
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
				<Header title="Biggest challenge" onPressBack={this._onPressBack} />
				<View style={localStyles.inputContainer}>
					<Field
						name="biggestChallenge"
						withRef
						onRef={( ref ) => { this.baseInput = ref; }}
						label="Add your text"
						labelColor={Colors.charcoalGrey}
						placeholder="Add your biggest challenge"
						onChangeText={this.onChangeText}
						style={localStyles.input}
						labelStyle={localStyles.label}
						component={BaseInputForm}
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

BiggestChallenge.propTypes = {
	editing: PropTypes.bool,
	navigator: NavigatorPropType.isRequired,
	initialize: PropTypes.func,
	user: PropTypes.any.isRequired,
	handleSubmit: PropTypes.func
};

BiggestChallenge.defaultProps = {
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
} )( connect( mapStateToProps, mapDispatchToProps )( BiggestChallenge ) );
