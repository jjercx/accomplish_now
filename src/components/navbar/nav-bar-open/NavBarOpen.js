import React, { Component } from 'react';
import { View } from 'react-native';
import Firebase from 'react-native-firebase';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actGetUser } from '../../../actions/users';
import styles from './styles';
import TabButton from '../tab-button/TabButton';
import Spacing from '../../spacing/Spacing';
import { responsiveSize } from '../../../utils/dimensions';
import NavigatorPropType from '../../../types/navigator';

class NavBarOpen extends Component {
	_onPressDashboard = () => {
		const { navigator } = this.props;
		navigator.resetTo( { screen: 'home', animationType: 'fade' } );
	}

	_onPressMessages = () => {
		const { navigator } = this.props;
		navigator.resetTo( { screen: 'messages', animationType: 'fade' } );
	}

	_onPressMeetings = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'meetings', animationType: 'fade' } );
	}

	_onPressPeople = () => {
		const { navigator } = this.props;
		navigator.resetTo( { screen: 'peopleNearby', animationType: 'fade' } );
	}

	_onPressUserProfile = () => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( Firebase.auth().currentUser.uid );
		navigator.resetTo( { screen: 'userProfile', animationType: 'fade' } );
	}

	_onPressPlaces = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'places' } );
	}

	render() {
		return (
			<View style={styles.navBarOpenContainer}>
				<View style={styles.navBarOpen}>
					<View style={styles.wrapperMenuButtonsRow1}>
						<TabButton
							text="DASHBOARD"
							image={require( '../../../assets/images/navbar/dashboardon.png' )}
							imageWidth={responsiveSize( 29.7 )}
							imageHeight={responsiveSize( 30.3 )}
							onPress={() => this._onPressDashboard()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PEOPLE"
							image={require( '../../../assets/images/navbar/peopleon.png' )}
							imageWidth={responsiveSize( 33 )}
							imageHeight={responsiveSize( 33 )}
							onPress={() => this._onPressPeople()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PLACES"
							image={require( '../../../assets/images/navbar/placeson.png' )}
							imageWidth={responsiveSize( 38 )}
							imageHeight={responsiveSize( 30 )}
							onPress={() => this._onPressPlaces()}
						/>
					</View>
					<Spacing size="base" />
					<View style={styles.wrapperMenuButtonsRow1}>
						<TabButton
							text="MESSAGES"
							image={require( '../../../assets/images/navbar/messageson.png' )}
							imageWidth={responsiveSize( 32 )}
							imageHeight={responsiveSize( 24 )}
							onPress={() => this._onPressMessages()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="MEETINGS"
							image={require( '../../../assets/images/navbar/meetingson.png' )}
							imageWidth={responsiveSize( 35 )}
							imageHeight={responsiveSize( 26 )}
							onPress={() => this._onPressMeetings()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PROFILE"
							image={require( '../../../assets/images/navbar/profileon.png' )}
							imageWidth={responsiveSize( 34 )}
							imageHeight={responsiveSize( 34 )}
							onPress={() => this._onPressUserProfile()}
						/>
					</View>
				</View>
			</View>
		);
	}
}

NavBarOpen.propTypes = {
	navigator: NavigatorPropType.isRequired
};

const mapDispatchToProps = dispatch => bindActionCreators( {
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( null, mapDispatchToProps )( NavBarOpen ) );
