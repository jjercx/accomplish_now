/* eslint-disable react/jsx-no-bind */
/* @flow */
import React, { Component } from 'react';
import {
	ImageBackground,
	View,
	Switch,
	StyleSheet,
	ActivityIndicator
} from 'react-native';
import Firebase from 'react-native-firebase';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { actGetMessages } from '../actions/messages';
import { actGetUser } from '../actions/users';
import UserSection from '../components/home/header/UserSection';
import { responsiveSize } from '../utils/dimensions';
import Typography from '../components/typography/Typography';
import Spacing from '../components/spacing/Spacing';
import colors from '../theme/palette';
import HomeSearch from '../components/home/search/HomeSearch';
import MyConnectionsSection from '../components/home/my-connections/MyConnectionsSection';
import WithoutConnections from '../components/home/my-connections/without-connections/WhithoutConnections';
import PlacesSection from '../components/home/places/PlacesSection';
import Place from '../entities/Place';
import Person from '../entities/Person';
import NavBar from '../components/navbar/NavBar';
import NavigatorPropType from '../types/navigator';

const styles = StyleSheet.create( {
	container: {
		backgroundColor: colors.graySearchBar,
		flex: 1
	},
	imageBackground: {
		height: responsiveSize( 180 ),
		width: '100%'
	},
	wrapperContainerAvailable: {
		flexDirection: 'row',
		width: '100%',
		position: 'absolute',
		top: responsiveSize( 30 )
	},
	wrapperAvailable: {
		flexDirection: 'row',
		marginLeft: responsiveSize( -5 ),
		alignItems: 'center',
		width: '100%',
		justifyContent: 'flex-end'
	},
	activityIndicatorContainer: {
		position: 'relative',
		backgroundColor: colors.white,
		height: '100%',
		width: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	}
} );

const IM_AVAILABLE_TEXT = "I'm Available";
const Place1 = new Place( 1, 'Office 305', require( '../assets/images/places/office305.png' ), 0, 0 );
const Place2 = new Place( 2, 'Corner SC', require( '../assets/images/places/cornersc.png' ), 0, 0 );

const places = [ Place1, Place2 ];

class Home extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	constructor( props ) {
		super( props );
		this.state = {
			available: false
		};

		this._onSearchPress = this._onSearchPress.bind( this );
	}

	componentWillMount() {
		let { actMessagesInit } = this.props; // eslint-disable-line react/prop-types
		actMessagesInit();
	}

	_goToPlaceDetails = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'placeDetails' } );
	}

	_goToAllConnections = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'meetings' } );
	}

	getConnections = ( messages ) => {
		let connections = [];

		messages.forEach( ( message ) => {
			if ( connections.map( e => e.id ).indexOf( message.id )
				&& message.id !== Firebase.auth().currentUser._user.uid ) {
				connections.push( new Person(
					message.id,
					message.firstName,
					message.lastName,
					null,
					{ uri: message.image }
				) );
			}
		} );

		return connections;
	}

	_onUserPicturePress = ( userId ) => {
		const { navigator, actGetUserInit } = this.props; // eslint-disable-line react/prop-types
		actGetUserInit( userId );
		navigator.push( { screen: 'userProfile' } );
	}

	_onSearchPress() {
		const { navigator } = this.props;
		navigator.push( { screen: 'peopleSearch' } );
	}

	_showPlacesList() {
		const { navigator } = this.props;
		navigator.push( { screen: 'places' } );
	}

	_onValueChange( value ) {
		this.setState( { available: value } );
	}

	/* eslint-disable class-methods-use-this */
	renderMyConnectionsSection( connections ) {
		return (
			<MyConnectionsSection
				connections={connections}
				onPress={this._onUserPicturePress}
				onPressSeeAll={this._goToAllConnections}
			/>
		);
	}
	/* eslint-enable class-methods-use-this */

	/* eslint-disable class-methods-use-this */
	renderPlacesSection() {
		return (
			<PlacesSection
				places={places}
				onPressShowPlacesList={this._showPlacesList.bind( this )}
				onPressPlace={this._goToPlaceDetails.bind( this )}
			/>
		);
	}

	renderWithOuthConnectionSection() {
		return (
			<WithoutConnections
				onPress={() => {}}
			/>

		);
	}
	/* eslint-enable class-methods-use-this */

	render() {
		const { available } = this.state;
		// eslint-disable-next-line react/prop-types
		const {
			navigator: _navigator,
			user, // eslint-disable-line react/prop-types
			isFetching, // eslint-disable-line react/prop-types
			messages // eslint-disable-line react/prop-types
		} = this.props;

		if ( !user || isFetching ) {
			return (
				<View style={styles.activityIndicatorContainer}>
					<ActivityIndicator size="small" color="black" style={{ marginTop: 20 }} />
				</View>
			);
		}

		let connections = this.getConnections( messages );

		return (
			<View style={styles.container}>
				<ImageBackground
					source={require( '../assets/images/home/header.png' )}
					style={styles.imageBackground}
				>
					<UserSection userFirstName={user.basicInfo.firstName} meetings={12} />
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
					<HomeSearch onPress={this._onSearchPress} />
				</ImageBackground>
				{ connections.length > 0
					? this.renderMyConnectionsSection( connections )
					: this.renderWithOuthConnectionSection() }
				{ connections.length > 0 ? <Spacing size="large" /> : <Spacing size="xtiny" /> }
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

const mapStateToProps = store => ( {
	user: store.authentication.user,
	messages: store.messages.messages,
	isFetching: store.messages.isFetching
} );

const mapDispatchToProps = dispatch => bindActionCreators( {
	actMessagesInit: actGetMessages,
	actGetUserInit: actGetUser
}, dispatch );

export default compose( connect( mapStateToProps, mapDispatchToProps )( Home ) );
