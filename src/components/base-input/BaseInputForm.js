import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	TextInput, Animated, View, Text
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import Colors from '../../theme/palette';

class BaseInputForm extends Component {
	state = { isFocused: false };

	componentWillMount() { this._animatedIsFocused = new Animated.Value( 0 ); }

	componentDidMount() { if ( this.props.onRef ) this.props.onRef(this.textInput); } //eslint-disable-line
	// use onRef instead of ref for BaseInput events

	componentDidUpdate() {
  	let { isFocused } = this.state;
  	Animated.timing( this._animatedIsFocused, {
  		toValue: isFocused ? 1 : 0,
  		duration: 300
  	} ).start();
	}

  handleFocus = () => {
	 this.setState( { isFocused: true } );
	 const { handleFocus } = this.props;
	 if ( handleFocus ) handleFocus();
	 }

  handleBlur = () => {
	 this.setState( { isFocused: false } );
	 const { handleBlur } = this.props;
	 if ( handleBlur ) handleBlur();
	 }

  render() {
  	let {
  		  style, label, labelStyle = {}, labelColor, width, containerStyle = {},
			  iconName, iconStyle, input, meta: { touched, error }, ...customProps
		  } = this.props;

  	const color = ( typeof labelColor === 'string' )
  		? labelColor
  		: this._animatedIsFocused.interpolate( {
  			inputRange: [ 0, 1 ],
  			outputRange: [ labelColor.colorStart, labelColor.colorEnd ]
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
	<View style={[ { width }, containerStyle ]}>
	 <Animated.View style={[ fixedLabel ]}>
		{ label ? (
			<Animated.Text
				style={[ styles.label, labelStyle, { color } ]}
			>
				{label}
			</Animated.Text>
				) : null}
				<View style={styles.textInputContainer}>
					<TextInput
						ref={( ref ) => { this.textInput = ref; }}
						style={[ styles.input, { flex: 1 }, style ]}
						onFocus={this.handleFocus}
						onBlur={this.handleBlur}
						{...input}
						{...customProps}
					/>
					{iconName ? <Icon name={iconName} style={[ styles.icon, iconStyle ]} /> : null}
				</View>
  </Animated.View>
		{ touched && error ? <Text style={styles.errorText}>{error}</Text> : null }
 </View>
		);
		/* eslint-enable react/jsx-indent */
    /* eslint-enable indent */
  	/* eslint-enable react/jsx-indent-props */
  }
}

BaseInputForm.propTypes = {
	label: PropTypes.string,
	labelColor: PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.shape( {
			colorStart: PropTypes.string,
			colorEnd: PropTypes.string
		} )
	] ),
	width: PropTypes.string,
	iconName: PropTypes.string,
	iconStyle: PropTypes.objectOf( PropTypes.oneOfType( [
		PropTypes.string,
		PropTypes.number
	] ) )
};

BaseInputForm.defaultProps = {
	width: '100%',
	label: '',
	labelColor: {
		colorStart: Colors.pinkishGrey,
		colorEnd: Colors.darkSkyBlue
	},
	iconName: '',
	iconStyle: {}
};

export default BaseInputForm;
