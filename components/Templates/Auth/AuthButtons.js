/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {FacebookIcon, SignUpIcon, SignInIcon} from './AuthIcons';
import { loginWithFacebook } from './../../../utils/facebookAuth';

export const SignupButton = props => (
  <View style={styles.inputGroup}>
    <SignUpIcon />
    <TouchableOpacity
      style={[styles.Button, styles.SignUpButton]}
      onPress={props.handleSubmit}
      activeOpacity={0.5}>
      <Text style={styles.ButtonTextStyle}> SignUp </Text>
    </TouchableOpacity>
  </View>
);

export const SigninButton = props => (
  <View style={styles.inputGroup}>
    <SignInIcon />
    <TouchableOpacity
      style={[styles.Button, styles.SignUpButton]}
      onPress={props.handleSubmit}
      activeOpacity={0.5}>
      <Text style={styles.ButtonTextStyle}> Login </Text>
    </TouchableOpacity>
  </View>
);

export const FacebookButton = () => (
  <View style={styles.inputGroup}>
    <FacebookIcon />
    <TouchableOpacity
      style={[styles.FacebookButton, styles.Button]}
      activeOpacity={0.5}
      onPress={loginWithFacebook}>
      <Text style={styles.ButtonTextStyle}>Facebook</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  inputGroup: {
    flexDirection: 'row',
    marginRight: -35,
    justifyContent: 'center',
    alignItems: 'center',
  },

  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: 350,
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 30,
  },

  SignUpButton: {
    borderWidth: 3,
    borderColor: '#a41940',
  },

  SignUpButtonLanding: {
    backgroundColor: '#a41940',
  },

  FacebookButton: {
    backgroundColor: '#3b5998',
  },

  ButtonTextStyle: {
    fontSize: 18,
    fontFamily: 'SegoeUI-SemiBold',
    color: '#fff',
    textAlign: 'center',
  },

  LoginButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    // alignItems: 'center',
    marginVertical: 20,
    width: 350,
    marginTop: 10,
    paddingVertical: 10,
    // marginLeft: 30,
    // marginRight: 30,
    // backgroundColor: 'black',
    borderRadius: 18,
    borderWidth: 3,
    borderColor: '#a41940',
  },
  ////////////////////////////////////////
});
