import React from 'react';
import {StyleSheet, ImageBackground, StatusBar} from 'react-native';

const SplashScreen = () => {
  return (
    <React.Fragment>
      <ImageBackground
        source={require('../../assets/images/backgrounds/SplashScreen.jpg')}
        style={styles.backgroundImage}
      />
      <StatusBar backgroundColor="#0b121c" barStyle="light-content" />
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },
});

export default SplashScreen;
