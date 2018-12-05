import React from 'react';
import {
	Image, Text, View, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonIcon from '../../button-icon/ButtonIcon';

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
	onDelete,
	noClose,
	isSelected,
	onPress
} ) => {
	const Container = noClose ? TouchableOpacity : View;
	return (
		<Container
			style={[
				styles.card, isSelected
					? styles.cardSelected
					: ( noClose && styles.largeCard ) ]}
			onPress={onPress}
		>
			<Image source={getImageSource( text )} style={{ alignSelf: 'center' }} />
			<Text style={[ styles.text, isSelected && styles.textOnCardSelected ]}>{text}</Text>
			{!noClose && (
				<ButtonIcon
					iconName="close"
					style={styles.iconContainer}
					iconStyle={styles.icon}
					onPress={() => onDelete()}
				/>
			)}
			{isSelected && (
				<ButtonIcon
					iconName="check"
					iconStyle={styles.iconCheck}
				/>
			)}
		</Container>
	);
};

SkillCard.propTypes = {
	text: PropTypes.string.isRequired,
	onDelete: PropTypes.func,
	noClose: PropTypes.bool,
	isSelected: PropTypes.bool,
	onPress: PropTypes.func
};

SkillCard.defaultProps = {
	noClose: false,
	isSelected: false,
	onPress: () => {},
	onDelete: () => {}
};

export default SkillCard;
