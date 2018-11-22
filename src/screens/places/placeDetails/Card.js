import React from 'react';
import {
	View, Image
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../../components/typography/Typography';

const Card = ( {
	icon, text, children, style
} ) => (
	<View style={styles.card}>
		<View style={styles.cardHeader}>
			<Image
				source={icon}
				style={styles.imageCardHeader}
			/>
			<Typography
				variant="midTitle"
				color="charcoalGrey"
				textAlign="left"
			>
				{text}
			</Typography>
		</View>
		<View style={[ styles.cardContent, style ]}>
			{children}
		</View>
	</View>
);

Card.propTypes = {
	icon: PropTypes.any.isRequired,
	text: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired,
	style: PropTypes.objectOf( PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number
	] ) )
};

Card.defaultProps = {
	style: {}
};

export default Card;
