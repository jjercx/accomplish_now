import React, { Component } from 'react';
import PlaceMapView from './layout';
import Place from '../../../entities/Place';
import {
	LATITUDE, LONGITUDE, LATITUDE_DELTA, LONGITUDE_DELTA
} from './constants';

class PlaceMapViewContainer extends Component {
	state = {
		region: {
		  latitude: LATITUDE,
		  longitude: LONGITUDE,
		  latitudeDelta: LATITUDE_DELTA,
		  longitudeDelta: LONGITUDE_DELTA
		}
	};

	// Place Mock
	placesMock =[
		new Place( 1, 'Office 305', require( '../../../assets/images/places/office305.png' ), 37.7860575, -122.4060963 ),
		new Place( 2, 'Office 305', require( '../../../assets/images/places/office305.png' ), 37.784805, -122.402686 ),
		new Place( 3, 'Office 305', require( '../../../assets/images/places/office305.png' ), 37.783210, -122.405471 ),
		new Place( 4, 'Office 305', require( '../../../assets/images/places/office305.png' ), 37.782413, -122.409462 ),
		new Place( 5, 'Office 305', require( '../../../assets/images/places/office305.png' ), 37.785347, -122.410771 )
	];

	componentDidMount() {
		this.getCurrentPosition();
	}

	getCurrentPosition = () => {
		navigator.geolocation.getCurrentPosition(
		  ( position ) => {
				this.updateRegion( position );
		  },
			error => console.log( error.message ),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
		);

		this.watchID = navigator.geolocation.watchPosition(
		  ( position ) => {
				this.updateRegion( position );
		  }
		);
	}

	updateRegion = ( position ) => {
		this.setState( {
			region: {
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				latitudeDelta: LATITUDE_DELTA,
				longitudeDelta: LONGITUDE_DELTA
			}
		} );
	}

	render() {
		const { region } = this.state;
		return <PlaceMapView region={region} places={this.placesMock} />;
	}
}

export default PlaceMapViewContainer;
