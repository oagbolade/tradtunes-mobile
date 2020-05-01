/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IonicIcon from 'react-native-vector-icons/Ionicons';

const Home = props => {
  const iconSize = 25;

  const DownEscapeIcon = () => (
    <Icon
      name="chevron-thin-down"
      color="white"
      //   style={styles.headerIcons}
      size={iconSize}
    />
  );

  const OptionsIcon = () => (
    <IonicIcon
      name="ios-options"
      color="white"
      style={styles.headerIcons}
      size={iconSize}
    />
  );

  return (
    <ImageBackground
      source={require('./../../assets/images/DemoImages/MusicPlayer/demo_pryse.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={styles.leftHeaderStyle}>
            <DownEscapeIcon />
          </View>

          <View style={styles.rightHeaderStyle}>
            <View>
              <OptionsIcon />
            </View>

            <View>
              <Image
                source={require('./../../assets/images/cover1.jpg')}
                style={styles.headerProfilePicture}
              />
            </View>
          </View>
        </View>

        <View style={styles.musicPlayerContainer}>
          <ScrollView horizontal={true}>
            <ImageBackground
              source={require('./../../assets/images/DemoImages/MusicPlayer/demo_pryse.jpg')}
              style={styles.secondaryBackgroundImage}
            />
            <ImageBackground
              source={require('./../../assets/images/DemoImages/MusicPlayer/demo_egungun.png')}
              style={styles.secondaryBackgroundImage}
            />
            <ImageBackground
              source={require('./../../assets/images/DemoImages/MusicPlayer/demo_world.jpg')}
              style={styles.secondaryBackgroundImage}
            />
          </ScrollView>
          <View style={styles.backgroundImageTextContainer}>
            <Text style={[styles.whiteText, styles.backgroundImageText]}>
              Love You Better
            </Text>
          </View>
        </View>

        <View style={styles.musicMediaContainer}>
          <View>
            <Text style={styles.whiteText}>Pryse</Text>
          </View>
          <View>
            <Text style={styles.whiteText}>Player time</Text>
          </View>
          <View>
            <Text style={styles.whiteText}>Player functionalities</Text>
          </View>
        </View>

        <View>
          <Text>NavBar</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    marginTop: -8,
    marginBottom: -8,
    paddingTop: 0,
    flex: 1,
    width: null,
    height: null,
  },

  container: {
    backgroundColor: 'rgba(0,0,0, 0.3)',
  },

  musicPlayerContainer: {
    marginTop: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  secondaryBackgroundImage: {
    width: 240,
    height: 240,
    marginHorizontal: 30,
    borderWidth: 1,
    borderColor: 'white',
  },

  musicMediaContainer: {
    backgroundColor: '#0b121c',
    paddingHorizontal: 25,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },

  backgroundImageTextContainer: {
    marginTop: 80,
  },

  backgroundImageText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  ///////////////////////HEADER//////////////////////////
  headerIcons: {
    marginHorizontal: 45,
  },

  headerContainer: {
    flexDirection: 'row',
    padding: 25,
    justifyContent: 'space-between',
  },

  headerProfilePicture: {
    width: 40,
    height: 40,
    borderRadius: 150 / 2,
  },

  headerText: {
    fontSize: 35,
    fontWeight: 'bold',
  },

  searchIcons: {
    marginHorizontal: 32,
  },

  rightHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftHeaderStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  whiteText: {
    color: 'white',
  },
  /////////////////////////////////////////////////
});

export default Home;
