/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image, ImageBackground} from 'react-native';

const Cards = props => {
  const [image, setImage] = useState('');

  useEffect(() => {
    setImage(props.imageSource);
  }, [props.imageSource]);
  const TradtunesIcon = () => (
    <Image
      source={require('./../../../assets/images/logos/discover/discover_logo.png')}
      style={styles.albumLogo}
    />
  );

  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <ImageBackground source={require('./../../../assets/images/DemoImages/DiscoverScreen/demo_talking_drum1.jpg')} style={styles.images}>
          <View style={styles.albumAssetsContainer}>
            <View style={styles.albumTextContainer}>
              <Text style={styles.albumText}>{props.category}</Text>
            </View>
            <View>
              <TradtunesIcon />
            </View>
          </View>
        </ImageBackground> 
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  albumText: {
    fontFamily: 'SegoeUI-Black',
    color: 'white',
    fontSize: 20,
  },

  albumTextContainer: {
    marginTop: 50,
    marginBottom: 20,
  },

  albumAssetsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0, 0.3)',
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

  images: {
    height: 185,
    width: 185,
  },

  cardContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: -20,
  },

  card: {
    width: '40%',
    marginHorizontal: 20,
    marginVertical: 5,
  },

  imageContainer: {
    width: 185,
    height: 185,
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default Cards;
