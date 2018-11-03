import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import styles from './styles';

const AboutItem = ( { title, description } ) => (
	<View>
		<View style={styles.titleWrapper}>
			<Typography variant="midBody" color="darkSkyBlue" textAlign="left">
				{title}
			</Typography>
		</View>
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" color="charcoalGrey" textAlign="justify">
				{description}
			</Typography>
		</View>
	</View>
);

AboutItem.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired
};

export default AboutItem;
