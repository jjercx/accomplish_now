import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import Card, { CardIcon } from '../card/Card';
import styles from './styles';

const ChallengeCard = ( { title, text } ) => (
	<Card title={title} icon={CardIcon.BIGGEST_CHALLENGE}>
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" color="charcoalGrey" textAlign="justify">{text}</Typography>
		</View>
	</Card>
);

ChallengeCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string.isRequired
};

ChallengeCard.defaultProps = {
	title: 'Biggest Challenge'
};

export default ChallengeCard;
