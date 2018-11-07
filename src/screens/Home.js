import React, { Component } from 'react';
import {
	ImageBackground,
	View,
	Switch,
	StyleSheet
} from 'react-native';
import { widthPercentageToDP as wpd, heightPercentageToDP as hpd } from 'react-native-responsive-screen';
import UserSection from '../components/home/header/UserSection';
import { HTP, WTP } from '../utils/dimensions';
import Typography from '../components/typography/Typography';
import Spacing from '../components/spacing/Spacing';
import colors from '../theme/palette';
import HomeSearch from '../components/home/search/HomeSearch';
import MyConnectionsSection from '../components/home/my-connections/MyConnectionsSection';
import PlacesSection from '../components/home/places/PlacesSection';
import Person from '../entities/Person';
import Place from '../entities/Place';
import NavBar from '../components/navbar/NavBar';
import NavigatorPropType from '../types/navigator';

const styles = StyleSheet.create( {
	container: {
		backgroundColor: colors.graySearchBar,
		flex: 1
	},
	imageBackground: {
		height: hpd( HTP( 180 ) ),
		width: '100%'
	},
	wrapperContainerAvailable: {
		flexDirection: 'row',
		width: '100%',
		position: 'absolute',
		top: hpd( '5%' )
	},
	wrapperAvailable: {
		flexDirection: 'row',
		marginLeft: wpd( WTP( -5 ) ),
		alignItems: 'center',
		width: '100%',
		justifyContent: 'flex-end'
	}
} );

const IM_AVAILABLE_TEXT = "I'm Available";
const Place1 = new Place( 1, 'Office 305', require( '../assets/images/places/office305.png' ) );
		const Place2 = new Place( 2, 'Corner SC', require( '../assets/images/places/cornersc.png' ) );
		const places = [ Place1, Place2 ];

/* eslint-disable react/prefer-stateless-function */
class Home extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		available: false
	}

	_onValueChange( value ) {
		this.setState( { available: value } );
	}

	/* eslint-disable class-methods-use-this */
	renderMyConnectionsSection() {
		// const JD = new Person( 1, 'Jhon', 'D.', 'Designer', require( '../assets/images/connections/jd.png' ) );
		// const C = new Person( 2, 'Claire', 'T.', 'Designer', require( '../assets/images/connections/c.png' ) );
		// const MD = new Person( 3, 'Michae', 'D.', 'Designer', require( '../assets/images/connections/md.png' ) );
		// const SW = new Person( 4, 'Stephanie', 'W.', 'Designer', require( '../assets/images/connections/sd.png' ) );
		const connections = [ ];
		return (
			<MyConnectionsSection
				connections={connections}
			/>
		);
	}
	/* eslint-enable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	renderPlacesSection() {
		return (
			<PlacesSection
				places={places}
			/>
		);
	}
	/* eslint-enable class-methods-use-this */

	render() {
		const { available } = this.state;
		const { navigator: _navigator } = this.props;

		return (
			<View style={styles.container}>
				<ImageBackground
					source={require( '../assets/images/home/header.png' )}
					style={styles.imageBackground}
				>
					<UserSection userFirstName="Javier" meetings={12} />
					<View style={styles.wrapperContainerAvailable}>
						<View style={styles.wrapperAvailable}>
							<Typography variant="smallTitle" color="white">{IM_AVAILABLE_TEXT}</Typography>
							<Spacing size="small" horizontal />
							<Switch
								onValueChange={value => this._onValueChange( value )}
								value={available}
								onTintColor={colors.orange}
								thumbTintColor={colors.switchThumbTintColor}
								tintColor={colors.switchTintColor}
								style={{ transform: [ { scaleX: 0.8 }, { scaleY: 0.8 } ] }}
							/>
						</View>
					</View>
					<HomeSearch />
				</ImageBackground>
				{this.renderMyConnectionsSection()}
				{ places.length > 0 ? <Spacing size="twoXLarge" /> : <Spacing size="tiny" /> }
				{this.renderPlacesSection()}
				<NavBar navigator={_navigator} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

Home.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Home;
