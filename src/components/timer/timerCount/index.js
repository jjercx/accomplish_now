import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Count from './count';
import { formatTime } from '../utils';

const TimerCount = ( { count, hours } ) => {
	const time = formatTime( count, hours );
	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Typography variant="timerCountHeader" color="skyBlue"> TIME </Typography>
			</View>
			<View style={styles.count}>
				<Count value={time.hour} title="HOURS" />
				<Typography variant="semiLargeTitle" color="black">: </Typography>
				<Count value={time.min} title="MIN" />
				<Typography variant="semiLargeTitle" color="black"> : </Typography>
				<Count value={time.sec} title="SEC" />
			</View>
		</View>
	);
};

TimerCount.propTypes = {
	count: PropTypes.number.isRequired,
	hours: PropTypes.number.isRequired,
};

export default TimerCount;
