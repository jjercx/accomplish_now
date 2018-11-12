import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import ButtonEdit from '../../button-icon/ButtonEdit';
import Card, { CardIcon } from '../card/Card';
import styles from './styles';

const WorkingOnCard = ( {
	title, text, editable, onPressEdit
} ) => (
	<Card title={title} icon={CardIcon.CURRENTLY_WORKING_ON}>
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" textAlign="justify" color="charcoalGrey">{text}</Typography>
		</View>
		{ editable && <ButtonEdit onPress={onPressEdit} style={styles.buttonEdit} /> }
	</Card>
);

WorkingOnCard.propTypes = {
	title: PropTypes.string,
	text: PropTypes.string.isRequired,
	editable: PropTypes.bool.isRequired,
	onPressEdit: PropTypes.func
};

WorkingOnCard.defaultProps = {
	title: 'Currently Working On',
	onPressEdit: () => {}
};

export default WorkingOnCard;
