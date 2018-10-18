import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../theme/palette';
import variants from './styles';

const Typography = ( {
	color,
	variant,
	children,
	numberOfLines
} ) => (
	<Text
		style={[ {
			color: colors[ color ],
			...variants[ variant ]
		} ]}
		numberOfLines={numberOfLines}
	>
		{ children }
	</Text>
);

Typography.propTypes = {
	color: PropTypes.string,
	variant: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	numberOfLines: PropTypes.number
};

Typography.defaultProps = {
	color: 'primary',
	numberOfLines: null
};

export default Typography;
