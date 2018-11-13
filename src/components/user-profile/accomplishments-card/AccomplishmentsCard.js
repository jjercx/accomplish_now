import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Spacing from '../../spacing/Spacing';
import Card, { CardIcon } from '../card/Card';
import ButtonAdd from '../../button-icon/ButtonAdd';
import AccomplishmentItem from './AccomplishmentItem';
import styles from './styles';

const AccomplishmentsCard = ( {
	title, accomplishments, editable, onPressAdd
} ) => {
	const lastItemIndex = accomplishments.length - 1;
	return (
		<Card title={title} icon={CardIcon.ACCOMPLISHMENTS}>
			<View style={styles.contentWrapper}>
				{accomplishments.map( ( item, index ) => (
					<View key={String( index )}>
						{ ( index !== 0 ) && <Spacing size="base" />}
						<AccomplishmentItem accomplishment={item} isLast={index === lastItemIndex} />
						{ ( index !== lastItemIndex ) && <Spacing size="base" />}
					</View>
				) )}
			</View>
			{ editable && <ButtonAdd onPress={onPressAdd} /> }
		</Card>
	);
};

AccomplishmentsCard.propTypes = {
	title: PropTypes.string,
	accomplishments: PropTypes.arrayOf( PropTypes.string ).isRequired,
	editable: PropTypes.bool.isRequired,
	onPressAdd: PropTypes.func
};

AccomplishmentsCard.defaultProps = {
	title: 'Accomplishments',
	onPressAdd: () => {}
};

export default AccomplishmentsCard;
