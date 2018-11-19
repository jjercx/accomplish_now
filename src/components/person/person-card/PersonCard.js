import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity } from 'react-native';
import Typography from '../../typography/Typography';
import Person from '../../../entities/Person';
import styles from './styles';
import Spacing from '../../spacing/Spacing';

const PersonCard = ( {
	person, rating, meetingsCount, distance, onPress
} ) => (
	<View style={styles.cardContainer}>
		{ ( ( distance > 0 ) && (
			<View style={styles.distanceWrapper}>
				<TouchableOpacity onPress={onPress}>
					<Image style={styles.icon} source={require( '../../../assets/images/icons/location.png' )} />
				</TouchableOpacity>
				<Typography variant="xsmallBody" color="greyishBrown">{ `${distance} miles` }</Typography>
			</View>
		) ) || (
			<View>
				<Spacing size="base" />
				<Spacing size="tiny" />
			</View>
		)}
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
						<Image style={styles.icon} source={require( '../../../assets/images/icons/rating.png' )} />
						<Typography variant="xsmallBody" color="greyishBrown">{ rating }</Typography>
					</View>
				) }
				{ ( meetingsCount > 0 ) && (
					<View style={styles.meetingsCountWrapper}>
						<Image style={styles.icon} source={require( '../../../assets/images/icons/meeting.png' )} />
						<Typography variant="xsmallBody" color="greyishBrown">
							{ `${meetingsCount} meeting${meetingsCount === 1 ? 's' : ''}` }
						</Typography>
					</View>
				) }
			</View>
		) }
		{ ( person.skills.length > 0 ) && (
			<View
				style={[
					styles.skillsWrapper,
					person.skills.length < 3
						? styles.fewSkillsWrapper
						: null
				]}
			>
				<View style={styles.skill}>
					<Typography variant="xxsmallBody" color="greyishBrown">{person.skills[ 0 ].skill.name}</Typography>
				</View>
				{ ( person.skills.length > 1 ) && (
					<View style={styles.skill}>
						<Typography variant="xxsmallBody" color="greyishBrown">{person.skills[ 1 ].skill.name}</Typography>
					</View>
				) }
			</View>
		) }
	</View>
);

PersonCard.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired,
	rating: PropTypes.number,
	meetingsCount: PropTypes.number,
	distance: PropTypes.number,
	onPress: PropTypes.func
};

PersonCard.defaultProps = {
	rating: 0,
	meetingsCount: 0,
	distance: 0,
	onPress: () => {}
};

export default PersonCard;
