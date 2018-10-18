import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import spacings from './styles';

const Spacing = ( { size } ) => {
	const spacingSize = spacings[ size ];
	const height = spacingSize;
	return ( <View style={{ height, width: '100%' }} /> );
};

Spacing.propTypes = {
	size: PropTypes.string.isRequired
};

export default Spacing;
