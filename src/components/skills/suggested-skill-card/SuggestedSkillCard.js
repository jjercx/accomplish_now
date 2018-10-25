import React from 'react';
import {
	Image, Text, View, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const getImageSource = ( skillText ) => {
	let source = '';
	switch ( skillText ) {
		case 'Designer': source = require( '../../../assets/images/skills-icons/designer.png' ); break;
		case 'Coaching': source = require( '../../../assets/images/skills-icons/coaching.png' ); break;
		case 'User Experience': source = require( '../../../assets/images/skills-icons/ux.png' ); break;
		default: source = require( '../../../assets/images/skills-icons/designer.png' );
	}
	return source;
};

const SkillCard = ( {
	text,
	onAdd
} ) => (

	<View style={styles.card}>
		<Image source={getImageSource( text )} style={{ alignSelf: 'center' }} />
		<Text style={styles.text}>{text}</Text>
		<TouchableOpacity onPress={() => onAdd()} style={styles.addButton}>
			<Text style={styles.addText}>ADD</Text>
		</TouchableOpacity>
	</View>

);

SkillCard.propTypes = {
	text: PropTypes.string.isRequired,
	onAdd: PropTypes.func.isRequired
};

export default SkillCard;
