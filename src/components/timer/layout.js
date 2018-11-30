import React from 'react';
import { View, Image } from 'react-native';
import PercentageCircle from 'react-native-percentage-circle';
import PropTypes from 'prop-types';
import styles from './styles';
import TimerCount from './timerCount';
import Button from '../button/Button';
import colors from '../../theme/palette';
import { statusTime } from './utils';
import ConfirmationMessage from '../confirmationMessage';
import { normalizeHP } from '../../utils/dimensions';

const timerImage = require( '../../assets/images/icons/timerImage.png' );

const Timer = ( {
	percent,
	statusPress,
	status,
	count,
	hours,
	openEndModal,
	onEndPress,
	onConfirmPress,
	onCancelPress
} ) => (
	<View style={styles.container}>
		<View style={styles.circleContainer}>
			<PercentageCircle borderWidth={10} style={styles.container} radius={normalizeHP( 15 )} percent={percent} color="#009DF7">
				<Image style={styles.imageContainer} source={timerImage} />
			</PercentageCircle>
			<View style={styles.timerCount}>
				<TimerCount count={count} hours={hours} />
			</View>
		</View>
		<View style={styles.buttonContainer}>
			<View style={styles.buttonWrapper}>
				<Button
					style={styles.buttonStyle}
					text={status}
					textColor={colors.white}
					buttonColor={colors.orange}
					onPress={statusPress}
				/>
			</View>
			{status !== statusTime.default && (
				<View style={styles.buttonWrapper}>
					<Button
						style={styles.buttonStyle}
						text="END"
						textColor={colors.white}
						buttonColor={colors.darkSkyBlue}
						onPress={onEndPress}
					/>
				</View>
			)}


		</View>
		<ConfirmationMessage
			visible={openEndModal}
			onConfirmPress={onConfirmPress}
			onCancelPress={onCancelPress}
		/>
	</View>
);

Timer.propTypes = {
	percent: PropTypes.number.isRequired,
	statusPress: PropTypes.func.isRequired,
	onEndPress: PropTypes.func.isRequired,
	status: PropTypes.string.isRequired,
	count: PropTypes.number.isRequired,
	hours: PropTypes.number.isRequired,
	openEndModal: PropTypes.bool.isRequired,
	onConfirmPress: PropTypes.func.isRequired,
	onCancelPress: PropTypes.func.isRequired
};

export default Timer;
