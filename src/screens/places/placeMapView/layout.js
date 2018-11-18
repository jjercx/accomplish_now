import React from 'react';
import { View } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import PropTypes from 'prop-types';
import Place from '../../../entities/Place';
import PlaceMarker from './placeMarker';
import styles from './styles';

const placeMapView = ( { region, places } ) => (
	<View style={styles.container}>
		<MapView
			provider={PROVIDER_GOOGLE}
			showsUserLocation
			style={styles.map}
			region={region}
		>
			{places.map( place => (
				<PlaceMarker key={place.id} place={place} />
			) )}
		</MapView>
	</View>

);

placeMapView.propTypes = {
	region: PropTypes.shape( {
		latitude: PropTypes.number,
		longitude: PropTypes.number,
		latitudeDelta: PropTypes.number,
		longitudeDelta: PropTypes.number
	} ).isRequired,
	places: PropTypes.arrayOf( PropTypes.instanceOf( Place ) ).isRequired
};

export default placeMapView;
