import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import ButtonEdit from '../../button-icon/ButtonEdit';
import Card, { CardIcon } from '../card/Card';
import styles from './styles';

const ChallengeCard = ( {
	title, text, editable, onPressEdit
} ) => (
	<Card title={title} icon={CardIcon.BIGGEST_CHALLENGE}>
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" color="charcoalGrey" textAlign="justify">{text}</Typography>
		</View>
		{ editable && <ButtonEdit onPress={onPressEdit} style={styles.buttonEdit} /> }
	</Card>
);

ChallengeCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string.isRequired,
	editable: PropTypes.bool.isRequired,
	onPressEdit: PropTypes.func
};

ChallengeCard.defaultProps = {
	title: 'Biggest Challenge',
	onPressEdit: () => {}
};

export default ChallengeCard;
