import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import { ComputedSkill } from '../../../entities/Skill';
import Typography from '../../typography/Typography';
import styles from './styles';

const SkillItem = ( { skill } ) => (
	<View style={styles.itemWrapper}>
		<View>
			<Image source={skill.skill.image} />
		</View>
		<View style={styles.textWrapper}>
			<Typography variant="midBody" color="white" textAlign="left">
				{skill.skill.name}
			</Typography>
		</View>
		<View>
			<Typography variant="midBody" color="white" textAlign="left">
				{ `(${skill.points})` }
			</Typography>
		</View>
	</View>
);

SkillItem.propTypes = {
	skill: PropTypes.instanceOf( ComputedSkill ).isRequired
};

export default SkillItem;
