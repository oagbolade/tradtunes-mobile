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
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

const Genre = () => {
  return (
    <ScrollView>
      <View>
        <View>
          <ImageBackground
            source={require('./../../assets/images/cover1.jpg')}
            style={styles.genreCoverImage}>
            <View style={styles.innerImageContainer}>
              <Text style={[styles.whiteText, styles.genreTitle]}>
                AFROBEATS
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={styles.container}>
          <View>
            <Text style={[styles.whiteText, styles.titleText]}>Artistes</Text>
          </View>

          <ScrollView horizontal={true}>
            <View style={styles.artisesCard}>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.artiseImages}
                />
                <Text style={[styles.whiteText, styles.artisteTitle]}>
                  Olamide
                </Text>
              </View>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.artiseImages}
                />
                <Text style={[styles.whiteText, styles.artisteTitle]}>
                  Olamide
                </Text>
              </View>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.artiseImages}
                />
                <Text style={[styles.whiteText, styles.artisteTitle]}>
                  Olamide
                </Text>
              </View>
              <View>
                <Image
                  source={require('./../../assets/images/cover1.jpg')}
                  style={styles.artiseImages}
                />
                <Text style={[styles.whiteText, styles.artisteTitle]}>
                  Olamide
                </Text>
              </View>
            </View>
          </ScrollView>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Recent Singles
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
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>Albums</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.cardContainer}>
                <View style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./../../assets/images/cover1.jpg')}
                      style={styles.images}
                    />
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={[styles.whiteText, styles.primaryText]}>
                      Vol. 1
                    </Text>
                    <Text style={[styles.whiteText, styles.secondaryText]}>
                      K1 De Ultimate
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./../../assets/images/cover1.jpg')}
                      style={styles.images}
                    />
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={[styles.whiteText, styles.primaryText]}>
                      Vol. 2
                    </Text>
                    <Text style={[styles.whiteText, styles.secondaryText]}>
                      K1 De Ultimate
                    </Text>
                  </View>
                </View>

                <View style={styles.card}>
                  <View style={styles.imageContainer}>
                    <Image
                      source={require('./../../assets/images/cover1.jpg')}
                      style={styles.images}
                    />
                  </View>

                  <View style={styles.textContainer}>
                    <Text style={[styles.whiteText, styles.primaryText]}>
                      Vol. 2
                    </Text>
                    <Text style={[styles.whiteText, styles.secondaryText]}>
                      K1 De Ultimate
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
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
    backgroundColor: 'rgba(0,0,0, 0.60)',
    flexDirection: 'row',
    fontSize: 30,
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 145,
  },

  whiteText: {
    color: 'white',
  },

  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 18,
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
    fontWeight: 'bold',
    fontSize: 15,
  },

  secondaryText: {
    paddingTop: 5,
    fontWeight: '100',
    fontSize: 12,
  },
});

export default Genre;
