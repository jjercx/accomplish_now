import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';
import Person from '../../../entities/Person';

const ConnectionBox = ( { person } ) => (
	<View style={styles.wrapperPerson}>
		<Image
			style={styles.imgPerson}
			source={person.image}
		/>
		<Spacing size="smallPlus" />
		<Typography variant="midBody" color="blackLabels">{`${person.firstName} ${person.lastName}`}</Typography>
	</View>
);

ConnectionBox.propTypes = {
	person: PropTypes.instanceOf( Person ).isRequired
};

export default ConnectionBox;
