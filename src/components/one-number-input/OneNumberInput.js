import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Typography from '../typography/Typography';
import styles from './styles';
import s from '../../screens/authentication/styles';

/* eslint-disable react/prefer-stateless-function */
class OneNumberInput extends Component {
	render() {
		const { number } = this.props;
		const isNumberValid = number !== '#';
		return (
			<View style={[ styles.container, s.center ]}>
				<View style={[ { opacity: isNumberValid ? 1 : 0 } ]}>
					<Typography
						variant="userTitleRegular"
						color="charcoalGrey"
						textAlign="center"
					>
						{number}
					</Typography>
				</View>
				<View style={[
					styles.line,
					isNumberValid
						? styles.lineWithNumber
						: styles.lineWithoutNumber
					 ]}
				/>
			</View>
		);
	}
}
/* eslint-enable react/prefer-stateless-function */

OneNumberInput.propTypes = {
	number: PropTypes.string
};

OneNumberInput.defaultProps = {
	number: '#'
};

export default OneNumberInput;
