import React from 'react';
import PropTypes from 'prop-types';
import { Image, View, ViewPropTypes } from 'react-native';
import Typography from '../../typography/Typography';
import styles from './styles';

export const CardIcon = {
	SKILLS: () => require( '../../../assets/images/icons/skills.png' ),
	ABOUT_ME: () => require( '../../../assets/images/icons/about.png' ),
	BIGGEST_CHALLENGE: () => require( '../../../assets/images/icons/challenge.png' ),
	CURRENTLY_WORKING_ON: () => require( '../../../assets/images/icons/workingOn.png' ),
	ACCOMPLISHMENTS: () => require( '../../../assets/images/icons/accomplishments.png' )
};

const Card = ( {
	title, icon, style, children
} ) => (
	<View style={[ styles.container, style ]}>
		{( ( title.length > 0 ) || ( icon !== null ) ) && (
			<View style={styles.title}>
				{ ( icon !== null ) && <Image style={styles.icon} source={icon()} />}
				{ ( title.length > 0 ) && <Typography variant="smallTitle" color="charcoalGrey">{ title }</Typography>}
			</View>
		)}
		{children}
	</View>
);

Card.propTypes = {
	title: PropTypes.string,
	icon: PropTypes.oneOf( [
		CardIcon.SKILLS,
		CardIcon.ABOUT_ME,
		CardIcon.BIGGEST_CHALLENGE,
		CardIcon.CURRENTLY_WORKING_ON,
		CardIcon.ACCOMPLISHMENTS,
		null
	] ),
	style: ViewPropTypes.style,
	children: PropTypes.oneOfType( [
		PropTypes.arrayOf( PropTypes.node ),
		PropTypes.node
	] ).isRequired
};

Card.defaultProps = {
	title: '',
	icon: null,
	style: {}
};

export default Card;
