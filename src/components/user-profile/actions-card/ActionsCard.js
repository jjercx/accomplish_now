import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity } from 'react-native';
import ViewOverflow from 'react-native-view-overflow';
import Typography from '../../typography/Typography';
import Card from '../card/Card';
import styles from './styles';

const ActionsCard = ( { onPressMessage, onPressSchedule } ) => (
	<Card style={styles.cardContainer}>
		<View style={styles.actionMessage}>
			<TouchableOpacity onPress={onPressMessage} style={styles.icon}>
				<Image source={require( '../../../assets/images/icons/message.png' )} />
			</TouchableOpacity>
			<ViewOverflow style={styles.textWrapper}>
				<Typography variant="smallBody" color="charcoalGrey">Message</Typography>
			</ViewOverflow>
		</View>
		<View style={styles.actionSchedule}>
			<TouchableOpacity onPress={onPressSchedule} style={styles.icon}>
				<Image source={require( '../../../assets/images/icons/schedule.png' )} />
			</TouchableOpacity>
			<ViewOverflow style={styles.textWrapper}>
				<Typography variant="smallBody" color="charcoalGrey">Schedule a meeting</Typography>
			</ViewOverflow>
		</View>
	</Card>
);

ActionsCard.propTypes = {
	onPressMessage: PropTypes.func,
	onPressSchedule: PropTypes.func
};

ActionsCard.defaultProps = {
	onPressMessage: () => {},
	onPressSchedule: () => {}
};

export default ActionsCard;
