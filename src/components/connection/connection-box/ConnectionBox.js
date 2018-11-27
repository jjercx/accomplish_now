import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';
import Person from '../../../entities/Person';
import Image from '../../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const ConnectionBox = ( { person, onPress } ) => (
	<TouchableOpacity style={styles.wrapperPerson} onPress={onPress}>
		<Image
			style={styles.imgPerson}
			source={person.image}
		/>
		<Spacing size="smallPlus" />
		<Typography variant="smallBody" color="blackLabels">{`${person.firstName} ${person.lastName}`}</Typography>
	</TouchableOpacity>
);

ConnectionBox.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired,
	onPress: PropTypes.func.isRequired
};

export default ConnectionBox;
