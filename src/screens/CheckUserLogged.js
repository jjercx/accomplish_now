import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actVerifyLogin } from '../actions/authentication';
import colors from '../theme/palette';
import NavigatorPropType from '../types/navigator';
import AsyncStorage from '../utils/AsyncStorage';

const s = StyleSheet.create( {
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
} );

class CheckUserLogged extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	componentWillMount() {
		const { actVerifyLoginConnect } = this.props;
		actVerifyLoginConnect( ( res ) => { // eslint-disable-line consistent-return
			if ( res === 'notLogged' ) {
				const { navigator } = this.props;
				navigator.resetTo( { screen: 'onboarding', animationType: 'fade' } );
			} else {
				const { navigator } = this.props;
				AsyncStorage.getUser().then( ( asyncUser ) => {
				   if ( asyncUser ) navigator.push( { screen: 'home' } );
			   } );
			}
		} );
	}

	render() {
		return (
			<View style={s.container}>
				<ActivityIndicator size="large" color={colors.orange} />
			</View>
		);
	}
}

CheckUserLogged.propTypes = {
	navigator: NavigatorPropType.isRequired,
	actVerifyLoginConnect: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators(
	{ actVerifyLoginConnect: actVerifyLogin }, dispatch );

export default compose( connect( null, mapDispatchToProps )( CheckUserLogged ) );
