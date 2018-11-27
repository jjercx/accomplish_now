import React from 'react';
import { View } from 'react-native';
import Proptypes from 'prop-types';
import Typography from '../../../typography/Typography';
import styles from './styles';

const Count = ( { value, title } ) => (
	<View style={styles.container}>
		<View style={styles.countNumber}>
			<Typography variant="semiLargeTitle" color="black">
				{value}
			</Typography>
		</View>
		<View style={styles.countText}>
			<Typography variant="timerCountHeader" color="timeCountGray">
				{title}
			</Typography>
		</View>
	</View>
);

Count.propTypes = {
	value: Proptypes.string.isRequired,
	title: Proptypes.string.isRequired
};

export default Count;
