/* eslint-disable react/require-default-props */
import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../../typography/Typography';
import Spacing from '../../../spacing/Spacing';
import Button from '../../../button/Button';
import colors from '../../../../theme/palette';

const WhithoutConnections = ( { onPress } ) => (
	<View style={styles.container}>
		<View style={styles.containerLabel}>
			<Image
				style={styles.personIcon}
				source={require( '../../../../assets/images/home/peoplePh.png' )}
			/>
			<Spacing size="smallPlus" horizontal />
			<Typography variant="midBody" color="placeholder">You don’t have any connections yet. </Typography>
		</View>
		<Button
			text="Find Conecctions"
			textColor={colors.darkSkyBlue}
			buttonColor={colors.veryLightPink}
			style={{ heigth: 10, backgroundColor: colors.veryLightPink, width: '90%' }}
			onPress={onPress}
		/>
	</View>
);

WhithoutConnections.propTypes = {
	onPress: PropTypes.func
};

WhithoutConnections.defaultProps = {
	onPress: () => {}
};

export default WhithoutConnections;
