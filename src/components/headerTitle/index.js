import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Typography from '../typography/Typography';
import styles from './styles';

const HeaderTitle = ( { title } ) => (

	<View style={styles.container}>
		<Typography
			variant="semiLargeTitle"
			color="darkSkyBlue"
			textAlign="left"
		>
			{title}
		</Typography>
	</View>
);

HeaderTitle.propTypes = {
	title: PropTypes.string.isRequired
};

export default HeaderTitle;
