/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import AntIcon from 'react-native-vector-icons/AntDesign';

const TrendingCards = props => {
  const iconSize = 20;

  const OptionsIcon = () => (
    <Icon
      name="options-vertical"
      color="white"
      //   style={styles.trendingIcons}
      size={iconSize}
    />
  );

  const PlayIcon = () => (
    <AntIcon
      name="play"
      // style={styles.inputIcons}
      size={iconSize}
    />
  );

  return (
    <View style={styles.trendingContainer}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={require('./../../../assets/images/cover1.jpg')}
          style={styles.imageBackground}>
          <View style={styles.trendingAssetsContainer}>
            <View style={styles.trendingTextContainer}>
              <Text style={styles.trendingText}>
                #{props.musicData.ranking}
              </Text>
            </View>
          </View>
        </ImageBackground>
      </View>

      <View style={styles.trendingDataContainer}>
        <View>
          <Text style={[styles.secondaryText, styles.whiteText]}>
            {props.musicData.songTitle}
          </Text>
          <Text style={styles.primaryText}>{props.musicData.artiste}</Text>
        </View>
        <View>
          <Text style={[styles.playsText, styles.whiteText]}>
            <PlayIcon /> {props.musicData.plays}
          </Text>
        </View>
      </View>

      <View style={styles.optionsIconContainer}>
        <Text>
          <OptionsIcon />
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
  },

  images: {
    height: 140,
    width: 140,
  },

  imageContainer: {
    width: 140,
    height: 140,
    borderRadius: 10,
    overflow: 'hidden',
  },

  trendingTextContainer: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 100,
    borderBottomLeftRadius: 60,
    backgroundColor: '#a41940',
    marginTop: -108,
    marginLeft: -99,
  },

  trendingText: {
    color: 'white',
  },

  trendingAssetsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.60)',
  },

  trendingContainer: {
    alignItems: 'stretch',
    flexDirection: 'row',
    marginBottom: 15,
  },

  trendingDataContainer: {
    paddingHorizontal: 25,
    justifyContent: 'space-between',
  },

  optionsIconContainer: {
    marginHorizontal: 18,
  },

  secondaryText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 18,
  },

  primaryText: {
    fontFamily: 'SegoeUI-Light',
    color: 'grey',
    fontSize: 18,
  },

  playsText: {
    fontFamily: 'SegoeUI-SemiBold',
    fontSize: 12,
  },

  whiteText: {
    color: 'white',
  },
});

export default TrendingCards;
