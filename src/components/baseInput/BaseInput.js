import React, {Component} from "react";
import { TextInput, View, Text, Animated } from "react-native";
import styles from "./styles";
import Colors from '../../theme/palette'

class BaseInput extends Component{
  state={
    isFocused:false
  }

  componentWillMount() {
     this._animatedIsFocused = new Animated.Value(0);
   }

  handleFocus = () => this.setState({ isFocused: true });
  handleBlur = () => this.setState({ isFocused: false });

  componentDidUpdate() {
    Animated.timing(this._animatedIsFocused, {
      toValue: this.state.isFocused ? 1 : 0,
      duration: 300,
    }).start();
  }

  render(){
    let { style, label, labelStyle, width, containerStyle, underlay, ...inputProps } = this.props;

    const color = this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.pinkishGrey, Colors.darkSkyBlue]
    });
    const borderBottom = this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 1.5]
    });
    const borderColor = this._animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [Colors.pinkishGrey, Colors.charcoalGrey]
    });

    let fixedLabel= label?{borderBottomWidth: borderBottom, borderColor: borderColor}:{}

      return(
        <Animated.View style={[ {width: width}, fixedLabel, containerStyle]}>
          {label?<Animated.Text style={[styles.label, labelStyle, {color:color}]}>{label}</Animated.Text>:null}
            <TextInput
            style={[ styles.input, {width:'100%'} ,style ]}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            {...inputProps}
          />
        </Animated.View>
    );
  }
}

BaseInput.defaultProps={
  width:'100%'
}

export default BaseInput;
