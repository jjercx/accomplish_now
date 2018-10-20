import React from "react";
import { View } from "react-native";
import styles from "./styles";
import ButtonIcon from '../buttonIcon/ButtonIcon';
import Typography from '../typography/Typography';

const Header = ({ style, title, onPressBack }) => (
  <View>
    <ButtonIcon iconName='arrow-back' style={{top:'5%'}} onPress={onPressBack}/>
    <View style={styles.titleWrapper}>
      <Typography variant="semiLargeTitle" color={'darkSkyBlue'} textAlign='left'>{title}</Typography>
    </View>
  </View>
);

export default Header;
