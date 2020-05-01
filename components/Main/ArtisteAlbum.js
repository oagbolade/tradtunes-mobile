/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from 'react-native';
import BackButton from './../Templates/BackButton';
import {TouchableOpacity} from 'react-native-gesture-handler';
const Genre = ({navigation}) => {
  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={require('./../../assets/images/cover1.jpg')}
            style={styles.genreCoverImage}>
            <View style={styles.innerImageContainer}>
              <View style={styles.backButtonContainer}>
                <TouchableOpacity onPress={goBack}>
                  <BackButton />
                </TouchableOpacity>
              </View>
              <Text style={[styles.priceText]}>N700</Text>
            </View>
          </ImageBackground>
        </View>
        <Text style={[styles.whiteText, styles.buyButton]}>Buy</Text>

        <View style={styles.container}>
          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Underrated - The EP
              </Text>
              <Text style={[styles.whiteText, styles.artisteNameText]}>
                T-Classic
              </Text>
            </View>

            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryText]}>Jore</Text>
                <Text style={[styles.whiteText, styles.secondaryText]}>
                  Kizz Daniel x Adekunle Gold
                </Text>
              </View>

              <View>
                <Text
                  style={[
                    styles.whiteText,
                    styles.secondaryText,
                    styles.musicLengthText,
                  ]}>
                  4:32
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  card: {
    marginRight: 20,
    paddingBottom: 50,
  },

  genreCoverImage: {
    width: null,
    height: 340,
  },

  innerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backButtonContainer: {
    marginTop: -60,
    marginLeft: -250,
  },

  priceText: {
    fontFamily: 'SegoeUI-SemiBold',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#B1B1B1',
    borderRadius: 30,
    fontSize: 18,
    marginTop: 100,
    marginLeft: 280,
  },

  buyButton: {
    marginTop: 300,
    marginLeft: 300,
    position: 'absolute',
    fontSize: 22,
    zIndex: 999,
    padding: 25,
    backgroundColor: '#a41940',
    borderRadius: 40,
    fontFamily: 'SegoeUI-Bold',
  },

  genreTitle: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  artisteTitle: {
    fontSize: 15,
    fontWeight: '100',
    marginHorizontal: 24,
  },

  container: {
    flex: 1,
    backgroundColor: '#0b121c',
    paddingHorizontal: 25,
  },

  artisesCard: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },

  artiseImages: {
    width: 110,
    height: 110,
    borderRadius: 150 / 2,
    marginRight: 22,
  },

  imageContainer: {
    width: 185,
    height: 185,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  recentlyPlayedContainer: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: 'flex-end',
    marginVertical: 10,
  },

  musicLengthText: {
    marginLeft: 100,
    fontFamily: 'SegoeUI-SemiBold',
  },

  whiteText: {
    color: 'white',
  },

  titleText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 20,
    marginTop: 35,
  },

  textContainer: {
    marginTop: 10,
    width: 155,
  },

  images: {
    height: 185,
    width: 185,
  },

  recentlyPlayedImages: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    marginHorizontal: 10,
  },

  primaryText: {
    fontFamily: 'SegoeUI-SemiBold',
    fontSize: 15,
  },

  artisteNameText: {
    fontFamily: 'SegoeUI-Light',
    fontSize: 15,
  },

  secondaryText: {
    fontFamily: 'SegoeUI-Light',
    fontWeight: '100',
    fontSize: 13,
  },
});

export default Genre;
