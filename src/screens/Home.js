import React, { Component } from 'react';
import {
	ImageBackground,
	View,
	Switch,
	StyleSheet,
	findNodeHandle
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

/* eslint-disable react/prefer-stateless-function */
class Home extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		available: false,
		blurViewRef: null
	}

	componentDidMount() {
		this.setState( {
			blurViewRef: findNodeHandle( this.viewRef )
		} );
	}

	_onValueChange( value ) {
		this.setState( { available: value } );
	}

	/* eslint-disable class-methods-use-this */
	renderMyConnectionsSection() {
		const JD = new Person( 1, 'Jhon', 'D.', require( '../assets/images/connections/jd.png' ) );
		const C = new Person( 2, 'Claire', 'T.', require( '../assets/images/connections/c.png' ) );
		const MD = new Person( 3, 'Michae', 'D.', require( '../assets/images/connections/md.png' ) );
		const SW = new Person( 4, 'Stephanie', 'W.', require( '../assets/images/connections/sd.png' ) );
		const connections = [ JD, C, MD, SW ];
		return (
			<MyConnectionsSection
				connections={connections}
			/>
		);
	}
	/* eslint-enable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	renderPlacesSection() {
		const Place1 = new Place( 1, 'Office 305', require( '../assets/images/places/office305.png' ) );
		const Place2 = new Place( 2, 'Corner SC', require( '../assets/images/places/cornersc.png' ) );
		const places = [ Place1, Place2 ];
		return (
			<PlacesSection
				places={places}
			/>
		);
	}
	/* eslint-enable class-methods-use-this */

	render() {
		const { available, blurViewRef } = this.state;
		return (
			<View style={styles.container}>
				<View ref={( ref ) => { this.viewRef = ref; }}>
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
					<Spacing size="xLarge" />
					{this.renderPlacesSection()}
				</View>
				<NavBar viewRef={blurViewRef} />
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

export default Home;
