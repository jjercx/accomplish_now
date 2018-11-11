import React, { Component } from 'react';
import { View } from 'react-native';
import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import styles from './styles';
import TabButton from '../tab-button/TabButton';
import Spacing from '../../spacing/Spacing';
import { HTP, WTP } from '../../../utils/dimensions';
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

	_onPressPeople = () => {
		const { navigator } = this.props;
		navigator.resetTo( { screen: 'peopleNearby', animationType: 'fade' } );
	}

	_onPressUserProfile = () => {
		const { navigator } = this.props;
		navigator.resetTo( { screen: 'userProfile', animationType: 'fade' } );
	}

	render() {
		const percentSmaller = 0.10;
		return (
			<View style={styles.navBarOpenContainer}>
				<View style={styles.navBarOpen}>
					<View style={styles.wrapperMenuButtonsRow1}>
						<TabButton
							text="DASHBOARD"
							image={require( '../../../assets/images/navbar/dashboardon.png' )}
							imageWidth={wpd( WTP( 29.7 - ( 29.7 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 30.3 - ( 30.3 * percentSmaller ) ) )}
							onPress={() => this._onPressDashboard()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PEOPLE"
							image={require( '../../../assets/images/navbar/peopleon.png' )}
							imageWidth={wpd( WTP( 33.7 - ( 33.7 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 33.7 - ( 33.7 * percentSmaller ) ) )}
							onPress={() => this._onPressPeople()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PLACES"
							image={require( '../../../assets/images/navbar/placeson.png' )}
							imageWidth={wpd( WTP( 38.3 - ( 38.3 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 30.3 - ( 30.3 * percentSmaller ) ) )}
							onPress={() => this._onPressMessages()}
						/>
					</View>
					<Spacing size="base" />
					<View style={styles.wrapperMenuButtonsRow1}>
						<TabButton
							text="MESSAGES"
							image={require( '../../../assets/images/navbar/messageson.png' )}
							imageWidth={wpd( WTP( 32 - ( 32 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 24.7 - ( 24.7 * percentSmaller ) ) )}
							onPress={() => this._onPressMessages()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="MEETINGS"
							image={require( '../../../assets/images/navbar/meetingson.png' )}
							imageWidth={wpd( WTP( 35.7 - ( 35.7 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 26.7 - ( 26.7 * percentSmaller ) ) )}
							onPress={() => this._onPressMessages()}
						/>
						<Spacing size="base" horizontal />
						<TabButton
							text="PROFILE"
							image={require( '../../../assets/images/navbar/profileon.png' )}
							imageWidth={wpd( WTP( 34 - ( 34 * percentSmaller ) ) )}
							imageHeight={hpd( HTP( 34 - ( 34 * percentSmaller ) ) )}
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

export default NavBarOpen;
