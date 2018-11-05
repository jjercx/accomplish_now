import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ComputedSkill } from '../../../entities/Skill';
import Spacing from '../../spacing/Spacing';
import Card, { CardIcon } from '../card/Card';
import SkillItem from './SkillItem';
import styles from './styles';

const SkillsCard = ( { title, skills } ) => {
	const lastItemIndex = skills.length - 1;
	return (
		<Card title={title} icon={CardIcon.SKILLS}>
			<View style={styles.contentWrapper}>
				{ skills.map( ( item, index ) => (
					<View key={String( item.skill.id )}>
						<SkillItem skill={item} />
						{ ( index !== lastItemIndex ) && <Spacing size="small" /> }
					</View>
				) )}
			</View>
		</Card>
	);
};

SkillsCard.propTypes = {
	title: PropTypes.string,
	skills: PropTypes.arrayOf(
		PropTypes.instanceOf( ComputedSkill )
	).isRequired
};

SkillsCard.defaultProps = {
	title: 'Skills'
};

export default SkillsCard;
