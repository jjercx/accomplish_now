/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import {
	View, StyleSheet, StatusBar, FlatList, Platform
} from 'react-native';
import {
	heightPercentageToDP as hp,
	widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { HTP, WTP } from '../utils/dimensions';
import NavigatorPropType from '../types/navigator';
import NavBar from '../components/navbar/NavBar';
import PlaceItem from '../components/place/place-item/PlaceItem';
import Header from '../components/header/Header';
import Place from '../entities/Place';
import PlaceMapView from './places/placeMapView';
import HeaderTitle from '../components/headerTitle';

const iconOrder = require( '../assets/images/icons/orderSmall.png' );
const iconFiltter = require( '../assets/images/icons/filterSmall.png' );
const iconLocation = require( '../assets/images/icons/map.png' );
const iconList = require( '../assets/images/icons/list.png' );

const styles = StyleSheet.create( {
	container: {
		flex: 1
	},
	subContainer: {
		marginTop: hp( HTP( Platform.OS === 'ios' ? 20 : 0 ) ),
		marginLeft: wp( WTP( 15 ) )
	},
	flatList: {
		flex: 1,
		marginTop: hp( HTP( 5 ) ),
		marginLeft: wp( WTP( 15 ) )
	}
} );

class Places extends Component {
	static navigatorStyle = {
		navBarHidden: true
	};

	state = {
		showMapView: false
	};

	// eslint-disable-next-line react/sort-comp
	_onPressBack() {
    	const { navigator } = this.props;
    	navigator.pop();
	}

	// eslint-disable-next-line class-methods-use-this
	_filter() {
    	// eslint-disable-next-line no-console
    	console.log( 'Filter actions' );
	}

	// eslint-disable-next-line class-methods-use-this
	_order() {
    	// eslint-disable-next-line no-console
    	console.log( 'Order action' );
	}

	placesMock = [
		new Place( 1, 'Office Global 305', require( '../assets/images/places/office305.png' ), 37.785347, -122.410771, 'New York', '2 miles from you' ),
		new Place( 2, 'Corner Corner SC', require( '../assets/images/places/cornersc.png' ), 37.784805, -122.402686, 'New York', '2 miles from you' ),
		new Place( 3, 'Office Global 305', require( '../assets/images/places/cornersc.png' ), 37.783210, -122.405471, 'New York', '2 miles from you' ),
		new Place( 4, 'Corner Corner SC', require( '../assets/images/places/cornersc.png' ), 37.782413, -122.409462, 'New York', '2 miles from you' )
	];

	buttonIcons = () => {
		const { showMapView } = this.state;
		return [
			{ id: 1, icon: iconOrder, onPress: this._order },
			{ id: 2, icon: iconFiltter, onPress: this._filter },
			{ id: 3, icon: showMapView ? iconList : iconLocation, onPress: this._location }
		];
	}

	_location = () => {
    	this.setState( prevState => ( { showMapView: !prevState.showMapView } ) );
	}

	_goToPlaceDetails = () => {
		const { navigator } = this.props;
		navigator.push( { screen: 'placeDetails' } );
	}

	renderPlaceListView =
		<FlatList
			style={styles.flatList}
			data={this.placesMock}
			keyExtractor={( item, index ) => index.toString()}
			renderItem={( { item } ) => (
				<PlaceItem {...item} _onPress={() => this._goToPlaceDetails()} />
			)}
		/>;

	renderPlaceMapView = <PlaceMapView places={this.placesMock} />;

	render() {
		const { navigator: _navigator } = this.props;
		const { showMapView } = this.state;
    	return (
    		<View style={styles.container}>
    			<View style={styles.subContainer}>
    				<StatusBar
    					barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
    				/>
					<Header
					  onPressBack={this._onPressBack.bind( this )}
						buttonIcons={this.buttonIcons()}
					/>
					<HeaderTitle title="Places to Work" />
    			</View>
				{ showMapView ? this.renderPlaceMapView : this.renderPlaceListView }
    			<NavBar navigator={_navigator} />
    		</View>

    	);
	}
}

Places.propTypes = {
	navigator: NavigatorPropType.isRequired
};

export default Places;
