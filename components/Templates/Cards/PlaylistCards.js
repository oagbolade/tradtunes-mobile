/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import {SmallPlayIcon} from './../../Templates/Icons';

const PlaylistCards = (props) => {

  return (
    <View style={styles.playlistContainer}>
      <ImageBackground
        style={styles.playlistCardImage}
        source={require('./../../../assets/images/DemoImages/Artiste/demo_marley.jpg')}>
        <View>
          <View style={styles.primaryTextContainer}>
            <Text style={styles.primaryText}>{props.albumTitle}</Text>
          </View>
          <View style={styles.playlistDetailsContainer}>
            <View>
              <Text style={[styles.secondaryText, styles.playlistPrice]}>
                N{props.price}
              </Text>
            </View>
            <View style={styles.secondaryText}>
              <SmallPlayIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}> {props.buys}M buys</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  playlistContainer: {
    marginBottom: 15,
  },

  playlistCardImage: {
    height: 220,
    width: '100%',
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  playlistDetailsContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: -14,
  },

  primaryTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 220,
  },

  primaryText: {
    padding: 5,
    paddingHorizontal: 10,
    fontFamily: 'SegoeUI-Bold',
    color: 'white',
    fontSize: 27,
    width: 150,
    minHeight: 80,
  },

  secondaryText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 15,
    marginVertical: 15,
  },

  playlistPrice: {
    marginRight: 40,
  },
});

export default PlaylistCards;
