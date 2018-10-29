import React from 'react';
import { View, Image } from 'react-native';
import styles from './styles';

const NavBarClosed = () => (
	<View style={styles.navBarClose}>
		<Image
			style={styles.imgArrowUp}
			source={require( '../../../assets/images/navbar/up.png' )}
		/>
	</View>
);

export default NavBarClosed;
