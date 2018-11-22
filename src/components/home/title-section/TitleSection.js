import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';

const TitleSection = ( { title, onPressSeeAll, placesDetailActive } ) => (
	<View style={[
		styles.wrapperTitle,
		placesDetailActive
			? styles.wrapperTitlePlacesDetailActive
			: null
	]}
	>
		<View style={styles.wrapperMyTitle}>
			<Typography variant="midPlusTitle" color="blackLabels">{title}</Typography>
		</View>
		{!placesDetailActive ? (
			<View style={styles.wrapperSeeAll}>
				<TouchableOpacity onPress={onPressSeeAll}>
					<Typography variant="smallTitle" color="darkSkyBlue">See all</Typography>
				</TouchableOpacity>
			</View>
		) : null}
	</View>
);

TitleSection.propTypes = {
	title: PropTypes.string.isRequired,
	onPressSeeAll: PropTypes.func,
	placesDetailActive: PropTypes.bool
};

TitleSection.defaultProps = {
	onPressSeeAll: () => {},
	placesDetailActive: false
};

export default TitleSection;
