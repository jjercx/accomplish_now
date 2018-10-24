import React from 'react';
import {
	View,
	Image,
	TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';

const HomeSearch = ( { onPress } ) => (
	<TouchableOpacity
		style={styles.wrapperSearch}
		onPress={onPress}
		activeOpacity={1}
	>
		<View style={styles.inputSearch}>
			<Image
				style={styles.searchIcon}
				source={require( '../../../assets/images/home/searchgray.png' )}
			/>
			<Spacing size="smallPlus" horizontal />
			<Typography variant="midBody" color="placeholder">Search People near by ...</Typography>
		</View>
	</TouchableOpacity>
);

HomeSearch.propTypes = {
	onPress: PropTypes.func
};

HomeSearch.defaultProps = {
	onPress: () => {}
};

export default HomeSearch;
