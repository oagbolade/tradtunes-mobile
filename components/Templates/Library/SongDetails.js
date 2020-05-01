/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SongDetails = (props) => {
  return (
    <View>
      <View style={styles.libraryContainer}>
        <View>
          <Text style={[styles.whiteText, styles.numberingStyle]}>{props.songData.numbering}</Text>
        </View>

        <View style={styles.songDetailsContainer}>
          <Text style={[styles.whiteText, styles.primaryText]}>{props.songData.songTitle}</Text>
          <Text style={[styles.whiteText, styles.secondaryText]}>
            {props.songData.artiste}
          </Text>
        </View>

        <View>
          <Text
            style={[
              styles.whiteText,
              styles.secondaryText,
              styles.musicLengthText,
            ]}>
            {props.songData.duration}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 18,
  },

  libraryContainer: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 18,
    alignItems: 'flex-end',
    marginVertical: 10,
    marginBottom: 1,
  },

  songDetailsContainer: {
    marginHorizontal: 20,
  },

  whiteText: {
    color: 'white',
  },

  numberingStyle: {
    fontSize: 20,
    marginVertical: 18,
  },

  musicLengthText: {
    fontWeight: 'bold',
    marginHorizontal: 138,
    marginVertical: 10,
  },

  primaryText: {
    fontWeight: 'bold',
    fontSize: 15,
  },

  secondaryText: {
    paddingTop: 5,
    fontWeight: '100',
    fontSize: 12,
  },
});

export default SongDetails;
