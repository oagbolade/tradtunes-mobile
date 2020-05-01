/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text, Image, StatusBar} from 'react-native';

const Tradtunes = () => {
  return (
    <View style={styles.logoTextContainer}>
      <StatusBar backgroundColor="#0b121c" barStyle="light-content" />
      <View>
        <Image
          source={require('../../assets/images/logos/tradtunes_logo.png')}
          style={styles.logo}
        />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.textTitle}>TRADTUNES</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  logoTextContainer: {
    marginTop: 50,
    marginBottom: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 70,
    height: 80,
  },

  textContainer: {
    marginTop: 10,
    color: 'white',
  },

  textTitle: {
    color: 'white',
    fontSize: 25,
    fontFamily: 'SegoeUI-BlackItalic',
  },
});

export default Tradtunes;
