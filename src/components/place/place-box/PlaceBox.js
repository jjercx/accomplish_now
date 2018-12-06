import React from 'react';
import { View, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Place from '../../../entities/Place';

const PlaceBox = ( { place, onPress } ) => (
	<TouchableOpacity onPress={onPress}>
		<ImageBackground style={styles.imgPlace} source={place.image}>
			<View style={styles.wrapperName}>
				<Typography variant="largeTitle" color="white">{place.name}</Typography>
			</View>
		</ImageBackground>
	</TouchableOpacity>
);

PlaceBox.propTypes = {
	place: PropTypes.instanceOf( Place ).isRequired,
	onPress: PropTypes.func
};

PlaceBox.defaultProps = {
	onPress: () => {}
};

export default PlaceBox;
