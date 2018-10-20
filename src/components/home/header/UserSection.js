import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';
import Typography from '../../typography/Typography';
import Spacing from '../../spacing/Spacing';

/* eslint-disable react/jsx-one-expression-per-line */
const UserSection = ( { userFirstName, meetings } ) => {
	const MEETINGS_TEXT_HAD =	'You’ve had ';
	const MEETINGS_TEXT = ' this year!';
	const space = ' ';
	return (
		<View style={styles.container}>
			<View style={styles.wrapperUserInfo}>
				<Typography variant="userTitleRegular" color="white">
					Hi,{space}
					<Typography variant="userTitle" color="white">
						{
							userFirstName
						}
					</Typography>
				</Typography>
				<Spacing size="tiny" />
				<Typography variant="smallTitle" color="white">
					{
						MEETINGS_TEXT_HAD
					}
					<Typography variant="smallTitleBold" color="white">
						{
							`${meetings} meetings`
						}
					</Typography>
					{
						MEETINGS_TEXT
					}
				</Typography>
			</View>
		</View>
	);
};

UserSection.propTypes = {
	userFirstName: PropTypes.string.isRequired,
	meetings: PropTypes.number.isRequired
};

export default UserSection;
