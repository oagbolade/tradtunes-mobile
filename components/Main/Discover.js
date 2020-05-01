/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import NavBar from './../Templates/NavBar';
import Header from './../Templates/Header';
import Cards from './../Templates/Cards/Cards';

const Home = ({navigation}) => {
  const [pageTitle, setPageTitle] = useState('Discover');

  return (
    <View style={styles.mainContainer}>
      <Header pagetitle={pageTitle} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.cardContainer}>
            <Cards
              imageSource={'./../../assets/images/DemoImages/DiscoverScreen/demo_talking_drum1.jpg'}
              category={'Afrobeats'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Fuji'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Afrofusion'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Ibo'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Hausa'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Fuji'}
            />
            <Cards
              imageSource={'./../../assets/images/cover1.jpg'}
              category={'Yoruba'}
            />
          </View>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} pageTitle={pageTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  albumText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  albumTextContainer: {
    marginTop: 50,
    marginBottom: 20,
  },

  albumAssetsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.60)',
  },

  albumLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  albumLogo: {
    width: 22,
    height: 25,
  },

  container: {
    flex: 1,
    backgroundColor: '#0b121c',
    paddingHorizontal: 15,
    paddingBottom: 60,
  },

  card: {
    width: '40%',
    marginHorizontal: 20,
    marginVertical: 5,
  },

  cardContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -20,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: '#0b121c',
  },

  navImage: {
    width: 25,
    height: 30,
    alignSelf: 'center',
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

  imageContainer: {
    width: 185,
    height: 185,
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },

  discoverImageContainer: {
    marginLeft: 20,
    width: 320,
    height: 180,
    justifyContent: 'space-evenly',
    borderWidth: 2,
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

  primaryText: {
    fontWeight: 'bold',
    fontSize: 15,
  },
});

export default Home;
