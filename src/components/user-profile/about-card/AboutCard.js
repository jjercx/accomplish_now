import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import AboutInfo from '../../../entities/AboutInfo';
import Card, { CardIcon } from '../card/Card';
import ButtonEdit from '../../button-icon/ButtonEdit';
import AboutItem from './AboutItem';
import styles from './styles';

const AboutCard = ( {
	title, aboutInfo, editable, onPressEdit
} ) => (
	<Card title={title} icon={CardIcon.ABOUT_ME}>
		<View style={styles.contentWrapper}>
			<AboutItem title="I am" descriptions={aboutInfo.iAmText} />
			<AboutItem title="I am looking to" descriptions={aboutInfo.iAmLookingToText} />
		</View>
		{ editable && <ButtonEdit onPress={onPressEdit} style={styles.buttonEdit} /> }
	</Card>
);

AboutCard.propTypes = {
	title: PropTypes.string,
	aboutInfo: PropTypes.instanceOf( AboutInfo ).isRequired,
	editable: PropTypes.bool.isRequired,
	onPressEdit: PropTypes.func
};

AboutCard.defaultProps = {
	title: 'About me',
	onPressEdit: () => {}
};

export default AboutCard;
