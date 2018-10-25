import React from 'react';
import { View, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Place from '../../../entities/Place';

const PlaceBox = ( { place } ) => (
	<ImageBackground style={styles.imgPlace} source={place.image}>
		<View style={styles.wrapperName}>
			<Typography variant="largeTitle" color="white">{place.name}</Typography>
		</View>
	</ImageBackground>
);

PlaceBox.propTypes = {
	place: PropTypes.instanceOf( Place ).isRequired
};


export default PlaceBox;
