/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import NavBar from './../Templates/NavBar';
import Header from './../Templates/Header';
import TrendingCards from './../Templates/Cards/TrendingCards';

const Home = ({navigation}) => {
  const [pageTitle, setPageTitle] = useState('Trending');

  return (
    <View style={styles.mainContainer}>
      <Header pagetitle={pageTitle} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.trendingContainer}>
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '1',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '2',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '3',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '4',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '5',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '6',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '7',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
            <TrendingCards
              musicData={{
                songTitle: 'Nkechi Turn Up',
                artiste: 'CKay',
                ranking: '8',
                imageCover: 'hello',
                plays: '2.3M',
              }}
            />
          </View>
        </View>
      </ScrollView>
      <NavBar navigation={navigation} pageTitle={pageTitle} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#0b121c',
  },

  container: {
    flex: 1,
    backgroundColor: '#0b121c',
    paddingHorizontal: 15,
    paddingBottom: 60,
    marginTop: 25,
  },
});

export default Home;
