import React from 'react';
import { ImageBackground } from 'react-native';
import styles from './styles';

const HeaderSection = () => (
	<ImageBackground
		source={require( '../../../assets/images/home/header.png' )}
		style={styles.imageBackground}
	/>
);

export default HeaderSection;
