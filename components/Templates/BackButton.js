/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const BackButton = ({navigation, goBack}) => {
  // Icons
  const backButtonSize = 40;
  const BackIconMaterial = () => (
    <MaterialIcon
      name="keyboard-backspace"
      color="white"
      style={styles.backButtonIcon}
      size={backButtonSize}
    />
  );

  goBack = () => {
    navigation.navigate('Landing');
  };

  return <BackIconMaterial />;
};

const styles = StyleSheet.create({
  backButtonIcon: {
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    height: 100,
  },
});

export default BackButton;
