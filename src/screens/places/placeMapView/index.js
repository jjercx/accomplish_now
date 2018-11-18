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

	componentDidMount() {
		this.getCurrentPosition();
	}

	componentWillUnmount() {
		navigator.geolocation.clearWatch( this.watchID );
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
		const { places } = this.props;
		return <PlaceMapView region={region} places={places} />;
	}
}

export default PlaceMapViewContainer;
