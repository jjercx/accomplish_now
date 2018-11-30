import React, { Component } from 'react';
import {
	View, ImageBackground, Platform, StatusBar, ScrollView
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavigatorPropType from '../../../types/navigator';
import styles from './styles';
import ButtonIcon from '../../../components/button-icon/ButtonIcon';
import Colors from '../../../theme/palette';
import Typography from '../../../components/typography/Typography';
import Card from './Card';
import Place from '../../../entities/Place';
import PlacesSection from '../../../components/home/places/PlacesSection';

const imageTest = require( '../../../assets/images/places/officeGlobalScBig.png' );
const iconAbout = require( '../../../assets/images/places/about.png' );
const iconOpeningHours = require( '../../../assets/images/places/openingHours.png' );
const iconAmenities = require( '../../../assets/images/places/amenities.png' );
const iconLocationOrange = require( '../../../assets/images/places/locationOrange.png' );

const Place1 = new Place( 1, 'Office 305', require( '../../../assets/images/places/office305.png' ), 0, 0 );
const Place2 = new Place( 2, 'Corner SC', require( '../../../assets/images/places/cornersc.png' ), 0, 0 );

const places = [ Place1, Place2 ];

class PlaceDetails extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	_onPressBack() {
		const { navigator } = this.props;
		navigator.pop();
	}

	_onShare() { // eslint-disable-line
		alert('Share Place'); // eslint-disable-line
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar
					barStyle={Platform.OS === 'ios' ? 'light-content' : 'dark-content'}
				/>
				<View style={styles.shadowStatusBar} />
				<ScrollView>
					<View style={styles.imageContainer}>
						<ImageBackground
							source={imageTest}
							style={styles.placeImage}
							resizeMode="cover"
						>
							<View style={styles.headerIconsContainer}>
								<ButtonIcon
									iconName="arrow-back"
									iconStyle={{ color: Colors.white }}
									onPress={() => this._onPressBack()}
								/>
								<ButtonIcon
									iconName="share"
									iconStyle={{ color: Colors.white }}
									onPress={() => this._onShare()}
								/>
							</View>
						</ImageBackground>
					</View>
					<View style={styles.content}>
						<Typography
							variant="midPlusTitle"
							color="charcoalGrey"
							textAlign="left"
						>
							{'Office Global 305'}
						</Typography>
						<View style={styles.placeLocationContainer}>
							<Icon name="location-on" size={20} style={styles.placeLocationIcon} />
							<Typography
								variant="midTitle"
								color="charcoalGrey"
								textAlign="left"
							>
								{'New York'}
							</Typography>
						</View>

						<Card
							icon={iconAbout}
							text="About"
						>
							<Typography
								variant="midBody"
								color="charcoalGrey"
								textAlign="left"
							>
								{'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
							</Typography>
						</Card>

						<Card
							icon={iconOpeningHours}
							text="Opening Hours"
							style={styles.openingHoursCardContent}
						>
							<View>
								<Typography
									variant="smallBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'MON - FRY'}
								</Typography>
								<Typography
									variant="smallTitle"
									color="charcoalGrey"
									textAlign="left"
								>
									{'08:00 - 18:00'}
								</Typography>
							</View>
							<View style={styles.button}>
								<Typography
									variant="smallBody"
									color="white"
									textAlign="left"
								>
									{'OPEN NOW'}
								</Typography>
							</View>
						</Card>

						<Card
							icon={iconLocationOrange}
							text="Location"
							style={styles.locationCardContent}
						>
							<View style={styles.locationSideLeft}>
								<Typography
									variant="midBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'New York - United States'}
								</Typography>
								<Typography
									variant="midBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'Address line 2'}
								</Typography>
								<Typography
									variant="midBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'Address line 3'}
								</Typography>
							</View>
							<View style={styles.locationSideRight}>
								<View style={styles.button}>
									<Typography
										variant="smallBody"
										color="white"
										textAlign="left"
									>
										{'OPEN MAPS'}
									</Typography>
								</View>
							</View>
						</Card>

						<Card
							icon={iconAmenities}
							text="Amenities"
							style={styles.amenitiesCardContent}
						>
							<View style={styles.amenity}>
								<Typography
									variant="smallBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'Wifi'}
								</Typography>
							</View>
							<View style={styles.amenity}>
								<Typography
									variant="smallBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'3D Printer'}
								</Typography>
							</View>
							<View style={styles.amenity}>
								<Typography
									variant="smallBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'Meeting Room'}
								</Typography>
							</View>
							<View style={styles.amenity}>
								<Typography
									variant="smallBody"
									color="charcoalGrey"
									textAlign="left"
								>
									{'Internet 100mbs/s'}
								</Typography>
							</View>
						</Card>

					</View>

					<PlacesSection
						places={places}
						title="Similars place to work"
						placesDetailActive
					/>

				</ScrollView>
			</View>
		);
	}
}

PlaceDetails.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default PlaceDetails;
