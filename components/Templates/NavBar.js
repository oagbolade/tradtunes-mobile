/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const NavBar = props => {
  const iconSize = 25;
  const HomeIcon = () => (
    <Icon name="home" color="white" style={[
            styles.navIcons,
            props.pageTitle === 'Home'
              ? styles.navigationStyle
              : styles.whiteText,
          ]} size={iconSize} />
  );
  const TrendingIcon = () => (
    <Icon
      name="hotjar"
      color="white"
      style={[
        styles.navIcons,
        props.pageTitle === 'Trending' ? styles.navigationStyle : styles.whiteText,
      ]}
      size={iconSize}
    />
  );

  const TradtunesIcon = () => (
    <Image
      source={require('./../../assets/images/logos/tradtunes_logo_rs.png')}
      style={styles.navImage}
    />
  );

  const LibraryIcon = () => (
    <Icon
      name="music"
      color="white"
      style={[
        styles.navIcons,
        props.pageTitle === 'Library' ? styles.navigationStyle : styles.whiteText,
      ]}
      size={iconSize}
    />
  );

  const goToHome = () => {
    props.navigation.navigate('HomeView');
  };
  const goToTrending = () => {
    props.navigation.navigate('Trending');
  };
  const goToDiscover = () => {
    props.navigation.navigate('Discover');
  };
  const goToLibrary = () => {
    props.navigation.navigate('Library');
  };

  return (
    <View style={styles.navbarContainer}>
      <TouchableOpacity onPress={goToHome}>
        <HomeIcon />
        <Text
          style={[
            styles.navText,
            props.pageTitle === 'Home'
              ? styles.navigationStyle
              : styles.whiteText,
          ]}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToTrending}>
        <TrendingIcon />
        <Text
          style={[
            props.pageTitle === 'Trending'
              ? styles.navigationStyle
              : styles.whiteText,
            styles.navText,
          ]}>
          Trending
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToDiscover}>
        <TradtunesIcon />
        <Text
          style={[
            props.pageTitle === 'Discover'
              ? styles.navigationStyle
              : styles.whiteText,
            styles.navText,
          ]}>
          Discover
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={goToLibrary}>
        <LibraryIcon />
        <Text
          style={[
            props.pageTitle === 'Library'
              ? styles.navigationStyle
              : styles.whiteText,
            styles.navText,
          ]}>
          Library
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navbarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'black',
    paddingHorizontal: 50,
    height: 60,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  navText: {
    fontFamily: 'SegoeUI-Bold',
    fontSize: 11,
    textAlign: 'center',
  },

  whiteText: {
    color: 'white',
  },

  navIcons: {
    alignSelf: 'center',
    // color: '#a41940',
  },

  navImage: {
    width: 25,
    height: 30,
    alignSelf: 'center',
  },

  navigationStyle: {
    color: '#a41940',
  },
});

export default NavBar;
