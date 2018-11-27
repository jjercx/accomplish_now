import React from 'react';
import PropTypes from 'prop-types';
import ViewOverflow from 'react-native-view-overflow';
import { View, TouchableOpacity } from 'react-native';
import Person, { getStateName } from '../../../entities/Person';
import Typography from '../../typography/Typography';
import ButtonEdit from '../../button-icon/ButtonEdit';
import Card from '../card/Card';
import styles from './styles';
import Image from '../../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const UserCard = ( {
	person, editable, onPress, onPressEdit
} ) => (
	<Card style={styles.cardContainer}>
		<ViewOverflow style={styles.viewOverflowContainer}>
			<View style={styles.avatarWrapper}>
				<TouchableOpacity onPress={onPress}>
					<Image style={styles.avatar} source={person.image} />
				</TouchableOpacity>
			</View>
		</ViewOverflow>
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
		{ editable && <ButtonEdit onPress={onPressEdit} style={styles.buttonEdit} /> }
	</Card>
);

UserCard.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired,
	editable: PropTypes.bool.isRequired,
	onPress: PropTypes.func,
	onPressEdit: PropTypes.func
};

UserCard.defaultProps = {
	onPress: () => {},
	onPressEdit: () => {}
};

export default UserCard;
