import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import ButtonIcon from './ButtonIcon';

const buttonForward = ({ style ,...props }) => (
  <ButtonIcon iconName='arrow-forward' iconStyle={{color:'white'}} style={[styles.buttonForwardContainer, style]} { ...props }/>
);

export default buttonForward;
