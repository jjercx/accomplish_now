import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, ViewPropTypes } from 'react-native';
import Typography from '../typography/Typography';
import Person from '../../entities/Person';
import styles from './styles';
import Spacing from '../spacing/Spacing';

const PersonCard = ( {
	person, rating, meetingsCount, distance
} ) => (
	<View style={styles.cardContainer}>
		{ ( distance > 0 ) && (
			<View style={styles.distanceWrapper}>
				<Image style={styles.icon} source={require( '../../assets/images/icons/location.png' )} />
				<Typography variant="xsmallBody" color="greyishBrown">{ `${distance} miles` }</Typography>
			</View>
		) }
		<View style={styles.avatarWrapper}>
			<Image style={styles.avatar} source={person.image} />
		</View>
		<View style={styles.personInfoWrapper}>
			<Typography variant="midTitle" color="charcoalGrey">
				{`${person.firstName} ${person.lastName}`}
			</Typography>
			<Spacing size="small" />
			<Typography variant="xsmallBody" color="greyishBrown">
				{person.job}
			</Typography>
		</View>
		{ ( ( rating > 0 ) || ( meetingsCount > 0 ) ) && (
			<View style={styles.statsWrapper}>
				{ ( rating > 0 ) && (
					<View style={styles.ratingWrapper}>
						<Image style={styles.icon} source={require( '../../assets/images/icons/rating.png' )} />
						<Typography variant="xsmallBody" color="greyishBrown">{ rating }</Typography>
					</View>
				) }
				{ ( meetingsCount > 0 ) && (
					<View style={styles.meetingsCountWrapper}>
						<Image style={styles.icon} source={require( '../../assets/images/icons/meeting.png' )} />
						<Typography variant="xsmallBody" color="greyishBrown">
							{ `${meetingsCount} meeting${meetingsCount === 1 ? 's' : ''}` }
						</Typography>
					</View>
				) }
			</View>
		) }
		{ ( person.skills.length > 0 ) && (
			<View style={styles.skillsWrapper}>
				<View style={styles.skill}>
					<Typography variant="xsmallBody" color="greyishBrown">{person.skills[ 0 ].skill.name}</Typography>
				</View>
			</View>
		) }
	</View>
);

PersonCard.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired,
	rating: PropTypes.number,
	meetingsCount: PropTypes.number,
	distance: PropTypes.number
};

PersonCard.defaultProps = {
	rating: 0,
	meetingsCount: 0,
	distance: 0
};

export default PersonCard;