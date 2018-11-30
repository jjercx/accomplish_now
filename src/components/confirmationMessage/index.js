import React from 'react';
import { View, Image } from 'react-native';
import PropTypes from 'prop-types';
import CustomModal from '../customModal';
import styles from './styles';
import Typography from '../typography/Typography';
import Button from '../button/Button';
import colors from '../../theme/palette';


const alertImage = require( '../../assets/images/icons/alert.png' );


const ConfirmationMessage = ( { visible, onConfirmPress, onCancelPress } ) => (
	<CustomModal
		openModal={visible}
	>
		<View style={styles.card}>
			<View style={styles.cardWrapper}>
				<View style={styles.imageWrapper}>
					<Image style={styles.imageStyle} source={alertImage} />
				</View>
				<View style={styles.title}>
					<Typography variant="smallTitleBold" color="charcoalGrey">
						{'Are you sure you want to end this meting?'}
					</Typography>
				</View>

				<View style={styles.message}>
					<Typography variant="smallBody" color="charcoalGrey">
						{'This action can’t be undone'}
					</Typography>
				</View>
			</View>
			<View style={styles.actionButton}>
				<View style={[ styles.buttonWrapper, styles.buttonBorderBottomLeftRadius ]}>
					<Button onPress={onConfirmPress} text="Yes" buttonColor="transparent" textColor={colors.darkSkyBlue} />
				</View>
				<View style={[ styles.buttonWrapper, styles.buttonBorderBottomRightRadius ]}>
					<Button onPress={onCancelPress} text="No" buttonColor="transparent" textColor={colors.greyishBrown} />
				</View>
			</View>
		</View>
	</CustomModal>
);

ConfirmationMessage.propTypes = {
	visible: PropTypes.bool.isRequired,
	onConfirmPress: PropTypes.func.isRequired,
	onCancelPress: PropTypes.func.isRequired
};

export default ConfirmationMessage;
