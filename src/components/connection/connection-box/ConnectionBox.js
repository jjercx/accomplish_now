import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';
import Person from '../../../entities/Person';
import Image from '../../default-profile-image-on-loading/DefaultProfileImageOnLoading';

const ConnectionBox = ( { person } ) => (
	<View style={styles.wrapperPerson}>
		<Image
			style={styles.imgPerson}
			source={person.image}
		/>
		<Spacing size="smallPlus" />
		<Typography variant="smallBody" color="blackLabels">{`${person.firstName} ${person.lastName}`}</Typography>
	</View>
);

ConnectionBox.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired
};

export default ConnectionBox;
