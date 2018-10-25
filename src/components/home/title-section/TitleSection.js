import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';

const TitleSection = ( { title } ) => (
	<View style={styles.wrapperTitle}>
		<View style={styles.wrapperMyTitle}>
			<Typography variant="midPlusTitle" color="blackLabels">{title}</Typography>
		</View>
		<View style={styles.wrapperSeeAll}>
			<Typography variant="smallTitle" color="darkSkyBlue">See all</Typography>
		</View>
	</View>
);

TitleSection.propTypes = {
	title: PropTypes.string.isRequired
};

export default TitleSection;
