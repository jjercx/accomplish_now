import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import styles from './styles';

const SliderCircles = ( { circles, activeCircle } ) => {
	const sliders = [];
	for ( let i = 1; i < circles + 1; i += 1 ) {
		sliders.push( i );
	}
	return (
		<View style={styles.wrapper}>
			{
				sliders.map( circle => (
					circle === activeCircle
						? <View key={circle} style={styles.circleOn} />
						: <View key={circle} style={styles.circleOff} />
				)
				)
			}
		</View>
	);
};


SliderCircles.propTypes = {
	circles: PropTypes.number.isRequired,
	activeCircle: PropTypes.number.isRequired
};

export default SliderCircles;
