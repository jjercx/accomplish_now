import React from 'react';
import { Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonIcon from '../button-icon/ButtonIcon';

const getImageSource = ( skillText ) => {
	let source = '';
	switch ( skillText ) {
		case 'Designer': source = require( '../../assets/images/skills-icons/designer.png' ); break;
		case 'Coaching': source = require( '../../assets/images/skills-icons/coaching.png' ); break;
		case 'User Experience': source = require( '../../assets/images/skills-icons/ux.png' ); break;
		default: source = require( '../../assets/images/skills-icons/designer.png' );
	}
	return source;
};

const SkillCard = ( {
	text,
	onDelete
} ) => (

	<View style={styles.card}>
		<Image source={getImageSource( text )} style={{ alignSelf: 'center' }} />
		<Text style={styles.text}>{text}</Text>
		<ButtonIcon
			iconName="close"
			style={styles.iconContainer}
			iconStyle={styles.icon}
			onPress={() => onDelete()}
		/>
	</View>

);

SkillCard.propTypes = {
	text: PropTypes.string.isRequired,
	onDelete: PropTypes.func.isRequired
};

export default SkillCard;
