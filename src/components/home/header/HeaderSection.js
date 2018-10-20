import React from 'react';
import { ImageBackground, View } from 'react-native';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';

/* eslint-disable react/jsx-one-expression-per-line */
const HeaderSection = () => {
	const MEETINGS_TEXT = 'You’ve had 12 meetings this year!';
	return (
		<ImageBackground
			source={require( '../../../assets/images/home/header.png' )}
			style={styles.imageBackground}
		>
			<View style={styles.wrapperUserInfo}>
				<Typography variant="userTitleRegular" color="white">
					Hi,
					<Typography variant="userTitle" color="white"> Javier</Typography>
				</Typography>
				<Spacing size="tiny" />
				<Typography variant="smallTitle" color="white">{MEETINGS_TEXT}</Typography>
			</View>
		</ImageBackground>
	);
};

export default HeaderSection;
