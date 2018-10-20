import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, Animated } from 'react-native';
import styles from './styles';
import Colors from '../../theme/palette';

class BaseInput extends Component {
  state = { isFocused: false };

  componentWillMount() { this._animatedIsFocused = new Animated.Value( 0 ); }

  componentDidUpdate() {
  	let { isFocused } = this.state;
  	Animated.timing( this._animatedIsFocused, {
  		toValue: isFocused ? 1 : 0,
  		duration: 300
  	} ).start();
  }

  handleFocus = () => this.setState( { isFocused: true } );

  handleBlur = () => this.setState( { isFocused: false } );

  render() {
  	let {
  		style, label, labelStyle, width, containerStyle, ...inputProps
  	} = this.props;

  	const color = this._animatedIsFocused.interpolate( {
  		inputRange: [ 0, 1 ],
  		outputRange: [ Colors.pinkishGrey, Colors.darkSkyBlue ]
  	} );
  	const borderBottom = this._animatedIsFocused.interpolate( {
  		inputRange: [ 0, 1 ],
  		outputRange: [ 1, 1.5 ]
  	} );
  	const borderColor = this._animatedIsFocused.interpolate( {
  		inputRange: [ 0, 1 ],
  		outputRange: [ Colors.pinkishGrey, Colors.charcoalGrey ]
  	} );

  	let fixedLabel = label
  		? { borderBottomWidth: borderBottom, borderColor }
  		: {};

  	/* eslint-disable react/jsx-indent */
  	/* eslint-disable indent */
    /* eslint-disable react/jsx-indent-props */
  	return (

	 <Animated.View style={[ { width }, fixedLabel, containerStyle ]}>
     { label ? (
       <Animated.Text
         style={[ styles.label, labelStyle, { color } ]}
       >
  					{label}
       </Animated.Text>
  			) : null}
  			<TextInput
  				style={[ styles.input, { width: '100%' }, style ]}
  				onFocus={this.handleFocus}
	         onBlur={this.handleBlur}
  				{...inputProps}
  			/>
  </Animated.View>
  	);
  	/* eslint-enable react/jsx-indent */
    /* eslint-enable indent */
  	/* eslint-enable react/jsx-indent-props */
  }
}

BaseInput.propTypes = {
	label: PropTypes.string,
	labelStyle: PropTypes.objectOf( PropTypes.array ),
	width: PropTypes.string,
	containerStyle: PropTypes.objectOf( PropTypes.array )
};

BaseInput.defaultProps = {
	width: '100%',
	containerStyle: {},
	label: '',
	labelStyle: {}
};

export default BaseInput;
