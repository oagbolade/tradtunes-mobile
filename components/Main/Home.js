/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState} from 'react';
import {StyleSheet, View, Text, Image, ScrollView} from 'react-native';
import Header from './../Templates/Header';
import NavBar from './../Templates/NavBar';
import {PlayListCard, DiscoverCards, SharedCard} from './../Templates/Cards/HomeCards';

const Home = ({navigation}) => {
  const [pageTitle, setPageTitle] = useState('Home');
  const [buys, setBuys] = useState('2.3');
  const [albumTitle, setAlbumTitle] = useState('Marlian Choice');
  const [price, setPrice] = useState('2,600');
  const [albumArt, setAlbumArt] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Header pagetitle={''} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.newReleasesContainer}>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Popular New Releases
              </Text>
            </View>

            <View style={styles.cardContainer}>
              <ScrollView horizontal={true}>
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
              </ScrollView>
            </View>
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Hot Albums
              </Text>
            </View>

            <View style={styles.cardContainer}>
              <ScrollView horizontal={true}>
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
                <SharedCard title={'Vol.1'} artiste={'K1 De Ultimate'} />
              </ScrollView>
            </View>
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Popular Artistes
              </Text>
            </View>

            <ScrollView horizontal={true}>
              <View style={styles.popularArtisesCard}>
                <Image
                  source={require('./../../assets/images/DemoImages/Artiste/demo_fireboy.jpg')}
                  style={styles.artiseImages}
                />
                <Image
                  source={require('./../../assets/images/DemoImages/Popular/demo_joro.jpg')}
                  style={styles.artiseImages}
                />
                <Image
                  source={require('./../../assets/images/DemoImages/Popular/demo_rema.jpg')}
                  style={styles.artiseImages}
                />
                <Image
                  source={require('./../../assets/images/DemoImages/Artiste/demo_marley.jpg')}
                  style={styles.artiseImages}
                />
                <Image
                  source={require('./../../assets/images/DemoImages/Artiste/demo_olamide.jpg')}
                  style={styles.artiseImages}
                />
              </View>
            </ScrollView>
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Recently Played
              </Text>
            </View>

            <View style={styles.recentlyPlayedContainer}>
              <View>
                <Image
                  source={require('./../../assets/images/DemoImages/others/demo_disco_background.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryTextSongArtiste]}>
                  Jore
                </Text>
                <Text style={[styles.whiteText, styles.secondaryTextSongTitle]}>
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
                  source={require('./../../assets/images/DemoImages/others/demo_disco_background.jpg')}
                  style={styles.recentlyPlayedImages}
                />
              </View>

              <View>
                <Text style={[styles.whiteText, styles.primaryTextSongArtiste]}>
                  Jore
                </Text>
                <Text style={[styles.whiteText, styles.secondaryTextSongTitle]}>
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

          <View style={styles.libraryButton}>
            <Text style={styles.libraryText}>Go To Library</Text>
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>
                Playlists
              </Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.PlayListCard}>
                <PlayListCard
                  albumArt={albumArt}
                  albumTitle={albumTitle}
                  price={price}
                  buys={buys}
                />
                <PlayListCard
                  albumArt={albumArt}
                  albumTitle={albumTitle}
                  price={price}
                  buys={buys}
                />
                <PlayListCard
                  albumArt={albumArt}
                  albumTitle={albumTitle}
                  price={price}
                  buys={buys}
                />
              </View>
            </ScrollView>
          </View>

          <View>
            <View>
              <Text style={[styles.whiteText, styles.titleText]}>Discover</Text>
            </View>
            <ScrollView horizontal={true}>
              <View style={styles.discoverCard}>
                <DiscoverCards category={'Fuji'} />
                <DiscoverCards category={'Fuji'} />
                <DiscoverCards category={'Fuji'} />
                <DiscoverCards category={'Fuji'} />
                <DiscoverCards category={'Fuji'} />
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} pageTitle={pageTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b121c',
    paddingHorizontal: 25,
    paddingBottom: 60,
  },

  PlayListCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  libraryButton: {
    marginVertical: 20,
    borderRadius: 80,
    borderColor: 'white',
    borderWidth: 2,
    padding: 15,
  },

  libraryText: {
    color: 'white',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 20,
    textAlign: 'center',
  },

  navText: {
    fontSize: 10,
    textAlign: 'center',
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#0b121c',
  },

  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 50,
    // paddingVertical: 30,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navIcons: {
    alignSelf: 'center',
  },

  navImage: {
    width: 25,
    height: 30,
    alignSelf: 'center',
  },

  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  discoverCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  popularArtisesCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
  },

  newReleasesContainer: {},

  recentlyPlayedContainer: {
    flexDirection: 'row',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    paddingBottom: 10,
    alignItems: 'flex-end',
    marginVertical: 10,
  },

  musicLengthText: {
    fontFamily: 'SegoeUI-SemiBold',
    marginHorizontal: 100,
  },

  whiteText: {
    color: 'white',
  },

  titleText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 23,
    marginVertical: 18,
  },

  textContainer: {
    marginTop: 10,
    width: 155,
  },

  imageContainer: {
    width: 185,
    height: 185,
    margin: 5,
    marginHorizontal: -10,
    borderRadius: 10,
    overflow: 'hidden',
  },

  discoverImageContainer: {
    marginLeft: 20,
    width: 320,
    height: 180,
    justifyContent: 'space-evenly',
    borderRadius: 10,
    overflow: 'hidden',
  },

  discoverImageContainerSide: {
    width: 320,
    height: 150,
    alignSelf: 'center',
  },

  discoverImages: {
    width: 320,
    height: 350,
  },

  images: {
    height: 185,
    width: 185,
  },

  artiseImages: {
    width: 75,
    height: 75,
    borderRadius: 150 / 2,
    marginHorizontal: 10,
  },

  recentlyPlayedImages: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    marginHorizontal: 10,
  },

  primaryTextSongArtiste: {
    fontFamily: 'SegoeUI-SemiBold',
    fontSize: 15,
  },

  secondaryTextSongTitle: {
    fontFamily: 'SegoeUI-Light',
    paddingTop: 5,
    fontSize: 12,
  },

  primaryText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 15,
  },

  secondaryText: {
    fontFamily: 'Gilroy-Light',
    paddingTop: 5,
    fontSize: 12,
  },
});

export default Home;
