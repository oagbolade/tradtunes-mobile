/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import BackButton from './../Templates/BackButton';

const Logout = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <BackButton />
        </View>
        <View style={styles.options}>
          <Text style={styles.text}>Security</Text>
        </View>
        <View style={styles.options}>
          <Text style={styles.text}>Notifications</Text>
        </View>
        <View style={styles.options}>
          <Text style={styles.text}>Notification Sound</Text>
        </View>
        <View style={styles.options}>
          <Text style={styles.text}>Terms of service</Text>
        </View>
        <View style={styles.options}>
          <Text style={styles.text}>Privacy policy</Text>
        </View>
        <View>
          <Text style={styles.text}>Logout</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b121c',
    minHeight: 1000,
    paddingHorizontal: 20,
  },
  options: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },
  text: {
    color: 'white',
    paddingBottom: 20,
    fontFamily: 'SegoeUI',
    fontSize: 17,
    paddingTop: 20,
  },
  borderStyle: {
    color: 'white',
    paddingBottom: 20,
    paddingTop: 20,
  },
  backButton: {
    marginLeft: -30,
    marginBottom: -55,
  },
});

export default Logout;
