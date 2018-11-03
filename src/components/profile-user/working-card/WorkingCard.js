import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import Card, { CardIcon } from '../card/Card';
import styles from './styles';

const WorkingOnCard = ( { title, text } ) => (
	<Card title={title} icon={CardIcon.CURRENTLY_WORKING_ON}>
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" textAlign="justify" color="charcoalGrey">{text}</Typography>
		</View>
	</Card>
);

WorkingOnCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string.isRequired
};

WorkingOnCard.defaultProps = {
	title: 'Currently Working On'
};

export default WorkingOnCard;
