import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Person, { getStateName } from '../../../entities/Person';

import Typography from '../../typography/Typography';
import Card from '../card/Card';
import styles from './styles';

const UserCard = ( { person } ) => (
	<Card style={styles.cardContainer}>
		<View style={styles.avatarWrapper}>
			<Image style={styles.avatar} source={person.image} />
		</View>
		<View>
			<Typography variant="profileUserTitleRegular" color="charcoalGrey">
				{`${person.firstName} ${person.lastName}`}
			</Typography>
			<View style={styles.jobTextWrapper}>
				<Typography variant="midBody" color="lightGreyBlueTwo">{person.job}</Typography>
			</View>
			<Typography variant="midBody" color="darkSkyBlue">
				{getStateName( person.state )}
			</Typography>
		</View>
	</Card>
);

UserCard.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired
};

export default UserCard;
