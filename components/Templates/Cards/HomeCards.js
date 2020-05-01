/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text, ImageBackground, Image} from 'react-native';
import {SmallPlayIcon, TradtunesIcon} from './../../Templates/Icons';

export const SharedCard = props => (
         // I'm supposed to pass image as props, will be using a static image
         // for the meantime
         <View style={styles.sharedCardContainer}>
           <View style={styles.sharedImageContainer}>
             <Image
               source={require('./../../../assets/images/DemoImages/Popular/demo_joro.jpg')}
               style={styles.sharedImages}
             />
           </View>

           <View style={styles.sharedTextContainer}>
             <Text style={[styles.sharedWhiteText, styles.sharedPrimaryText]}>
               {props.title}
             </Text>
             <Text style={[styles.sharedWhiteText, styles.sharedSecondaryText]}>
               {props.artiste}
             </Text>
           </View>
         </View>
       );

export const DiscoverCards = props => (
  <View style={styles.discoverImageContainer}>
    <ImageBackground
      source={require('./../../../assets/images/DemoImages/DiscoverScreen/demo_talking_drum1.jpg')}
      style={styles.discoverImage}>
      <View style={styles.discoverAlbumAssetsContainer}>
        <View style={styles.discoverAlbumTextContainer}>
          <Text style={styles.discoverAlbumText}>{props.category}</Text>
        </View>
        <View style={styles.discoverLogoContainer}>
          <TradtunesIcon />
        </View>
      </View>
    </ImageBackground>
  </View>
);

export const PlayListCard = props => (
  <View style={styles.playlistContainer}>
    <ImageBackground
      style={styles.playlistCardImage}
      source={require('./../../../assets/images/DemoImages/Artiste/demo_marley.jpg')}>
      <View>
        <View style={styles.primaryTextContainer}>
          <Text style={styles.playlistPrimaryText}>{props.albumTitle}</Text>
        </View>
        <View style={styles.playlistDetailsContainer}>
          <View>
            <Text style={[styles.playlistSecondaryText, styles.playlistPrice]}>
              N{props.price}
            </Text>
          </View>
          <View style={styles.playlistSecondaryText}>
            <SmallPlayIcon />
          </View>
          <View>
            <Text style={styles.playlistSecondaryText}>
              {' '}
              {props.buys}M buys
            </Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  sharedImageContainer: {
    width: 185,
    height: 185,
    margin: 5,
    marginHorizontal: -10,
    borderRadius: 10,
    overflow: 'hidden',
    },
    
    sharedCardContainer: {
      marginRight: 30,  
    },

  sharedImages: {
    height: 185,
    width: 185,
  },

  sharedTextContainer: {
    marginTop: 10,
    width: 155,
  },

  sharedPrimaryText: {
    fontFamily: 'Gilroy-Light',
    fontSize: 15,
  },

  sharedSecondaryText: {
    fontFamily: 'Gilroy-Light',
    paddingTop: 5,
    fontSize: 12,
  },

  sharedWhiteText: {
    color: 'white',
  },

  discoverLogoContainer: {
    marginBottom: 15,
  },

  discoverAlbumText: {
    fontFamily: 'SegoeUI-Black',
    color: 'white',
    fontSize: 20,
  },

  discoverAlbumTextContainer: {
    marginTop: 50,
    marginBottom: 20,
  },

  discoverAlbumAssetsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },

  discoverAlbumLogoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  discoverImage: {
    height: 120,
    width: 120,
  },

  discoverImageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginRight: 10,
  },

  playlistContainer: {
    marginRight: 15,
  },

  playlistCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  playlistCardImage: {
    height: 150,
    width: 300,
    borderRadius: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },

  playlistDetailsContainer: {
    flexDirection: 'row',
    padding: 10,
    marginBottom: -20,
    alignItems: 'center',
  },

  primaryTextContainer: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 170,
  },

  playlistPrimaryText: {
    padding: 2,
    paddingHorizontal: 5,
    fontFamily: 'SegoeUI-Bold',
    color: 'white',
    fontSize: 20,
    width: 100,
    minHeight: 50,
  },

  playlistSecondaryText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 10,
    marginVertical: 15,
  },

  playlistPrice: {
    marginRight: 40,
  },
});
