/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import Tradtunes from './../Templates/Tradtunes';
import {FacebookIcon, SignInIcon, SignUpIcon} from './../Templates/Auth/AuthIcons'

const LandingScreen = ({navigation}) => {
  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goToSignup = () => {
    navigation.navigate('SignUp');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/backgrounds/drum.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.logoTextContainer}>
        <Tradtunes />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.inputGroup}>
          <SignInIcon />
          <TouchableOpacity
            style={[styles.LoginButton, styles.Button]}
            activeOpacity={0.5}
            onPress={goToLogin}>
            <Text style={styles.ButtonTextStyle}> Login </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <SignUpIcon />
          <TouchableOpacity
            style={[styles.SignUpButton, styles.Button]}
            activeOpacity={0.5}
            onPress={goToSignup}>
            <Text style={styles.ButtonTextStyle}> SignUp </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputGroup}>
          <FacebookIcon />
          <TouchableOpacity
            style={[styles.FacebookButton, styles.Button]}
            activeOpacity={0.5}
            onPress={goToLogin}>
            <Text style={styles.ButtonTextStyle}> Facebook </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

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
    marginRight: -18,
  },

  inputText: {
    borderBottomColor: 'white',
    width: 350,
    textAlign: 'center',
    borderBottomWidth: 1,
    color: 'white',
  },

  inputIcons: {
    marginRight: -25,
    marginTop: -10,
    zIndex: 999,
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
    borderRadius: 30,
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
    fontSize: 18,
    fontFamily: 'SegoeUI-SemiBold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default LandingScreen;
