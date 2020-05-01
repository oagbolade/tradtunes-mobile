/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import axios from 'axios';
import NavBar from './../Templates/NavBar';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import SongDetails from './../Templates/Library/SongDetails';

const Library = ({ navigation }) => {
  const [pageTitle, setPageTitle] = useState('Library');
  
  const iconSize = 25;

  const ShuffleIcon = () => (
    <EntypoIcon
      name="shuffle"
      color="white"
      style={styles.shuffle}
      size={iconSize}
    />
  );
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <View>
          <Text style={[styles.whiteText, styles.titleText]}>My Library</Text>
        </View>

        <View style={styles.playFunctionalityContainer}>
          <View>
            <Text style={[styles.playAllText]}>PLAY ALL</Text>
          </View>
          <View>
            <ShuffleIcon />
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={styles.container}>
          <View>
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
              }}
            />
            <SongDetails
              songData={{
                songTitle: 'Jore',
                numbering: '1',
                artiste: 'Kizz Daniel x Adekunle Gold',
                duration: '4:32',
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
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 18,
  },

  container: {
    paddingHorizontal: 25,
  },

  wrapper: {
    flex: 1,
    backgroundColor: '#0b121c',
  },

  playFunctionalityContainer: {
    flexDirection: 'row',
  },

  playAllText: {
    borderColor: 'white',
    backgroundColor: 'grey',
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 30,
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },

  shuffle: {
    borderColor: 'white',
    backgroundColor: '#a41940',
    padding: 10,
    marginHorizontal: 12,
    marginTop: 3,
    borderRadius: 60,
    fontSize: 18,
    fontWeight: 'bold',
  },

  whiteText: {
    color: 'white',
  },

  recentlyPlayedImages: {
    width: 60,
    height: 60,
    borderRadius: 150 / 2,
    marginHorizontal: 10,
  },
});

export default Library;
