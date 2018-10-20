import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";
import fonts from "../../theme/fonts";
import Icon from "react-native-vector-icons/MaterialIcons";

const ButtonIcon = ({ text, textColor, buttonColor, onPress, iconName, iconStyle, style }) => (
  <TouchableOpacity
    style={[styles.button, style]}
    activeOpacity={0.9}
    onPress={onPress}
  >
    <Icon name={iconName} style={[styles.icon, iconStyle]}/>
    <Text style={[styles.label,{ color: textColor, fontFamily: fonts.productSansRegular }]}>
      {text}
    </Text>
  </TouchableOpacity>
);

export default ButtonIcon;
