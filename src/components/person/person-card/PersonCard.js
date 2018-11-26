import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, TouchableOpacity } from 'react-native';
import Typography from '../../typography/Typography';
import Person from '../../../entities/Person';
import styles from './styles';
import Spacing from '../../spacing/Spacing';
import ProfileImage from '../../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const avatarImg = require( '../../../assets/images/messages/phProfile.png' );

const PersonCard = ( {
	person, rating, meetingsCount, distance, onPress
} ) => (
	<View style={styles.cardContainer}>
		<View style={styles.distanceWrapper}>
			<TouchableOpacity onPress={onPress}>
				<Image style={styles.icon} source={require( '../../../assets/images/icons/location.png' )} />
			</TouchableOpacity>
			<Typography variant="xsmallBody" color="greyishBrown">{ distance === 0 ? 'Near you' : `${distance.toFixed( 2 )} miles` }</Typography>
		</View>

		<View style={styles.avatarWrapper}>
			<ProfileImage
				style={styles.avatar}
				source={( person.image ) ? { uri: person.image } : avatarImg}
			/>
		</View>
		<View style={styles.personInfoWrapper}>
			<Typography variant="midTitle" color="charcoalGrey">
				{`${person.firstName} ${person.lastName}`}
			</Typography>
			<Spacing size="small" />
			<Typography variant="xsmallBody" color="greyishBrown">
				{person.job ? person.job : ''}
			</Typography>
		</View>

		<View style={styles.statsWrapper}>

			{rating ? (
				<View style={styles.ratingWrapper}>
					<Image style={styles.icon} source={require( '../../../assets/images/icons/rating.png' )} />
					<Typography variant="xsmallBody" color="greyishBrown">{ rating }</Typography>
				</View>
			) : null}

			<View style={styles.meetingsCountWrapper}>
				<Image style={styles.icon} source={require( '../../../assets/images/icons/meeting.png' )} />
				<Typography variant="xsmallBody" color="greyishBrown">
					{ `${meetingsCount} meeting${meetingsCount > 1 ? 's' : ''}` }
				</Typography>
			</View>

		</View>


		{ ( person.skills && person.skills.length > 0 ) ? (

			<View style={[
				styles.skillsWrapper,
				person.skills.length < 3
					? styles.fewSkillsWrapper
					: null
			]}
			>
				{person.skills.map( s => (
					<View style={styles.skill} key={s.id}>
						<Typography variant="xxsmallBody" color="greyishBrown">{s.skill.name}</Typography>
					</View>
				) ).slice( 0, 1 )
				}
			</View>

		) : (
			<View />
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
