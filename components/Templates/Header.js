/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = props => {
  const iconSize = 38;

  const SearchIcon = () => (
    <Icon
      name="ios-search"
      color="white"
      style={styles.searchIcons}
      size={iconSize}
    />
  );

  const TradtunesIcon = () => (
    <Image
      source={require('./../../assets/images/logos/tradtunes_logo_rs.png')}
      style={styles.navImage}
    />
  );

  return (
    <View>
      <StatusBar backgroundColor="#0b121c" barStyle="light-content" />

      <View style={styles.headerContainer}>
        {props.pagetitle !== '' ? (
          <View>
            <Text style={[styles.whiteText, styles.headerText]}>
              {props.pagetitle}
            </Text>
          </View>
        ) : (
          <TradtunesIcon />
        )}

        <View style={styles.rightHeaderStyle}>
          <View>
            <SearchIcon />
          </View>

          <View>
            <ImageBackground
              source={require('./../../assets/images/cover1.jpg')}
              style={styles.headerProfilePicture}
              imageStyle={{borderRadius: 30}}>
              <View>
                <Text style={styles.notificationText}>04</Text>
              </View>
            </ImageBackground>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationText: {
    marginTop: -5,
    marginRight: -5,
    color: 'white',
    paddingHorizontal: 2,
    paddingVertical: 2,
    alignSelf: 'flex-end',
    borderRadius: 5,
    backgroundColor: '#a41940',
  },
  
  navImage: {
    width: 30,
    height: 35,
  },

  headerContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
  },

  headerProfilePicture: {
    width: 40,
    height: 40,
  },

  headerText: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 35,
  },

  searchIcons: {
    marginHorizontal: 32,
  },

  rightHeaderStyle: {
    flexDirection: 'row',
  },

  whiteText: {
    color: 'white',
  },
});

export default Header;
