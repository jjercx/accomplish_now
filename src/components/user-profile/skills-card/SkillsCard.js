import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { ComputedSkill } from '../../../entities/Skill';
import Spacing from '../../spacing/Spacing';
import Card, { CardIcon } from '../card/Card';
import ButtonAdd from '../../button-icon/ButtonAdd';
import SkillItem from './SkillItem';
import styles from './styles';

const SkillsCard = ( {
	title, skills, editable, onPressAdd
} ) => {
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
			{ editable && <ButtonAdd onPress={onPressAdd} style={styles.buttonAdd} /> }
		</Card>
	);
};

SkillsCard.propTypes = {
	title: PropTypes.string,
	skills: PropTypes.arrayOf(
		PropTypes.instanceOf( ComputedSkill )
	).isRequired,
	editable: PropTypes.bool.isRequired,
	onPressAdd: PropTypes.func
};

SkillsCard.defaultProps = {
	title: 'Skills',
	onPressAdd: () => {}
};

export default SkillsCard;
