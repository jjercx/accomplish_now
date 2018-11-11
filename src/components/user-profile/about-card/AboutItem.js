import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../../typography/Typography';
import styles from './styles';

const AboutItem = ( { title, descriptions } ) => (
	<View>
		<View style={styles.titleWrapper}>
			<Typography variant="midBody" color="darkSkyBlue" textAlign="left">
				{title}
			</Typography>
		</View>
		{descriptions.map( ( description, i ) => (
			<View key={i.toString()} style={styles.textWrapper}>
				<Typography variant="smallBody" color="charcoalGrey" textAlign="justify">
					{description}
				</Typography>
			</View>
		) )}
	</View>
);

AboutItem.propTypes = {
	title: PropTypes.string.isRequired,
	descriptions: PropTypes.arrayOf( PropTypes.string ).isRequired
};

export default AboutItem;
