import React from "react";
import { TextInput, View, Text } from "react-native";
import styles from "./styles";

const BaseInput = ({ style, label, ...props }) => (
    [<Text key={1}>{label}</Text>,
      <TextInput
      key={2}
      style={[ styles.input, style ]}
      {...props}
    />]
);

export default BaseInput;
