import React from 'react';
import { View, Image } from 'react-native';
import { Marker } from 'react-native-maps';
import PropTypes from 'prop-types';
import Place from '../../../../entities/Place';
import styles from './styles';

const placeMarker = ( { place } ) => (
	<Marker coordinate={place.coordinate}>
		<View style={styles.container}>
			<Image style={styles.markerImage} source={require( '../../../../assets/images/icons/customMarker.png' )} />
			<Image style={styles.placeImage} source={place.image} />
		</View>
	</Marker>

);

placeMarker.propTypes = {
	place: PropTypes.instanceOf( Place ).isRequired
};

export default placeMarker;
