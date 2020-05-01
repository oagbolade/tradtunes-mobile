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
import PlaylistCards from './../Templates/Cards/PlaylistCards';

const Playlist = ({navigation}) => {
  const [pageTitle, setPageTitle] = useState('Playlist');
  const [buys, setBuys] = useState('2.3');
  const [albumTitle, setAlbumTitle] = useState('Marlian Choice');
  const [price, setPrice] = useState('2,600');
  const [albumArt, setAlbumArt] = useState('');

  return (
    <View style={styles.mainContainer}>
      <Header pagetitle={pageTitle} />
      <ScrollView>
        <View style={styles.container}>
          <PlaylistCards albumArt={albumArt} albumTitle={albumTitle} price={price} buys={buys} />
          <PlaylistCards albumArt={albumArt} albumTitle={albumTitle} price={price} buys={buys} />
          <PlaylistCards albumArt={albumArt} albumTitle={albumTitle} price={price} buys={buys} />
          <PlaylistCards albumArt={albumArt} albumTitle={albumTitle} price={price} buys={buys} />
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

export default Playlist;
