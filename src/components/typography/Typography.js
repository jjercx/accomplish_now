import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../theme/palette';
import variants from './styles';

const Typography = ( {
	color,
	variant,
	children,
	numberOfLines,
	textAlign
} ) => (
	<Text
		style={[ {
			color: colors[ color ],
			...variants[ variant ],
			textAlign
		}]}
		numberOfLines={numberOfLines}
	>
		{ children }
	</Text>
);

Typography.propTypes = {
	color: PropTypes.string,
	variant: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	numberOfLines: PropTypes.number,
	textAlign: PropTypes.string
};

Typography.defaultProps = {
	color: 'primary',
	numberOfLines: null,
	textAlign: 'center'
};

export default Typography;
