/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontisoIcon from 'react-native-vector-icons/Fontisto';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';

const iconSize = 20;
export const FacebookIcon = () => (
  <Icon
    name="facebook"
    color="white"
    style={styles.inputIcons}
    size={iconSize}
  />
);

export const SignInIcon = () => (
  <AntDesignIcon
    name="login"
    color="white"
    style={styles.inputIcons}
    size={iconSize}
  />
);

export const SignUpIcon = () => (
  <AntDesignIcon
    name="login"
    color="white"
    style={styles.inputIconsSignup}
    size={iconSize}
  />
);

export const UserIcon = () => (
  <AntDesignIcon
    name="profile"
    color="white"
    style={styles.inputIcons}
    size={iconSize}
  />
);

export const EmailIcon = () => (
  <FontisoIcon
    name="email"
    color="white"
    style={styles.inputIcons}
    size={iconSize}
  />
);

export const PasswordIcon = () => (
  <EvilIcon name="lock" color="white" style={styles.inputIcons} size={30} />
);

export const PhoneIcon = () => (
  <FeatherIcon
    name="phone-call"
    color="white"
    style={styles.inputIcons}
    size={iconSize}
  />
);

const styles = StyleSheet.create({
  logoTextContainer: {
    marginTop: 80,
    marginBottom: 105,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textContainer: {
    marginTop: 10,
    color: 'white',
  },

  whiteText: {
    color: 'white',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    borderBottomColor: 'white',
    width: 350,
    textAlign: 'center',
    borderBottomWidth: 1,
    color: 'white',
  },

  inputIcons: {
    marginRight: -40,
    marginTop: -10,
    zIndex: 999,
  },

  inputIconsSignup: {
    marginRight: -40,
    marginTop: -10,
    zIndex: 999,
    transform: [{rotate: '268deg'}],
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  logo: {
    width: 70,
    height: 80,
  },

  textTitle: {
    color: 'white',
    fontSize: 20,
  },

  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: 350,
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 18,
  },

  LoginButton: {
    borderWidth: 3,
    borderColor: '#a41940',
  },

  SignUpButton: {
    backgroundColor: '#a41940',
  },

  FacebookButton: {
    backgroundColor: '#3b5998',
  },

  ButtonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});
