import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';

const TitleSection = ( { title, onPressSeeAll } ) => (
	<View style={styles.wrapperTitle}>
		<View style={styles.wrapperMyTitle}>
			<Typography variant="midPlusTitle" color="blackLabels">{title}</Typography>
		</View>
		<View style={styles.wrapperSeeAll}>
			<TouchableOpacity onPress={onPressSeeAll}>
				<Typography variant="smallTitle" color="darkSkyBlue">See all</Typography>
			</TouchableOpacity>
		</View>
	</View>
);

TitleSection.propTypes = {
	title: PropTypes.string.isRequired,
	onPressSeeAll: PropTypes.func
};

TitleSection.defaultProps = {
	onPressSeeAll: () => {}
};

export default TitleSection;
