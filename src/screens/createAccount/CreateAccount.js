/* @flow */

import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Image } from "react-native";
import ButtonIcon from "../../components/buttonIcon/ButtonIcon";
import Typography from '../../components/typography/Typography';
import BaseInput from '../../components/baseInput/BaseInput';
import Colors from '../../theme/palette';
import fonts from '../../theme/fonts';
import styles from "./styles";

export default class CreateAccount extends Component {
  constructor(props){
    super(props)
    this.state={ enabled: false, createAccount: true }
    this.onChangeText=this.onChangeText.bind(this)
  }

  onChangeText(text){
    if(text.length == 9){
      this.setState({ enabled:true })
    }else{
      this.setState({ enabled:false })
    }
  }

  render() {
    let { enabled, createAccount } = this.state;
    let title = createAccount ? 'Create Account' : 'Welcome back';

    return (
      <View style={styles.container}>
        <ButtonIcon iconName='arrow-back' style={{top:'5%'}}/>
        <View style={styles.titleWrapper}>
        <Typography variant="semiLargeTitle" color={'darkSkyBlue'} textAlign='left'>{title}</Typography>
        </View>
        <View style={styles.infoWrapper}>
        <Typography variant="smallTitle" color={'charcoalGrey'} textAlign='left'>Enter your mobile number to setup an account. You will receive a verification code via text message and data rates may apply.</Typography>
        </View>
        <View style={styles.inputWrapper}>
        <View style={styles.inputLeftContainer}>
        <Image source={require('../../assets/images/icons/flag.png')} style={{alignSelf:'center'}}/>
        </View>
        <View style={styles.inputRightContainer}>
        <Text style={styles.inputTextHint}>
        +1
        </Text>
        <BaseInput style={styles.inputText} placeholder="(000) 000-0000"  keyboardType="numeric" onChangeText={this.onChangeText} maxLength={9}/>
        </View>
        </View>
        <View style={[styles.infoWrapper, { marginBottom: createAccount ? 0 : 33 } ]}>
        { createAccount ? <Typography variant="smallBody" color={'charcoalGrey'} textAlign='left'>By continuing you are agreeing with our <Text style={{fontFamily:fonts.productSansBold}}>terms of service and privacy policy.</Text></Typography> : null}
        </View>
        <ButtonIcon iconName='arrow-forward' iconStyle={{color:'white'}} style={[styles.buttonForwardContainer, {backgroundColor:enabled?Colors.macaroneAndCheese:Colors.disabled}]}/>
      </View>
    );
  }
}
