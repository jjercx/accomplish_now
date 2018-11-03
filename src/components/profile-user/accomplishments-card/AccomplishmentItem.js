import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';
import styles from './styles';

const AccomplishmentItem = ( { accomplishment, isLast } ) => (
	<View style={isLast ? styles.itemWrapperLast : styles.itemWrapper}>
		<View style={styles.iconWrapper}>
			<Image source={require( '../../../assets/images/icons/suitcase.png' )} />
		</View>
		<Spacing size="base" />
		<View style={styles.textWrapper}>
			<Typography variant="smallBody" color="charcoalGrey" textAlign="center">
				{accomplishment}
			</Typography>
		</View>
		<Spacing size={isLast ? 'base' : 'large'} />
	</View>
);

AccomplishmentItem.propTypes = {
	accomplishment: PropTypes.string.isRequired,
	isLast: PropTypes.bool.isRequired
};

export default AccomplishmentItem;
