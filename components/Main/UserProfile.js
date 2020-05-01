/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, View, ImageBackground, Text} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  SettingsIcon,
  BackButton,
  EditIcon,
  DebitCardIcon,
  HeadphoneIcon,
  ShareIcon,
} from '../Templates/Icons';
import {EmailIcon, PhoneIcon} from '../Templates/Auth/AuthIcons';

const UserProfile = () => {
  return (
    <ScrollView>
      <ImageBackground
        style={styles.profileBackground}
        blurRadius={9}
        source={require('./../../assets/images/avatar/female.jpg')}>
        <View style={styles.header}>
          <View style={styles.backButton}>
            <BackButton />
          </View>
          <View style={styles.settings}>
            <SettingsIcon />
          </View>
        </View>

        <View style={styles.profileImageContainer}>
          <ImageBackground
            style={styles.profileImage}
            source={require('./../../assets/images/avatar/female.jpg')}>
            <View style={styles.editIcon}>
              <EditIcon />
            </View>
          </ImageBackground>
          <View style={styles.profileName}>
            <Text style={styles.primaryText}>Agatha Rose</Text>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.container}>
        <View style={styles.userDetailsContainer}>
          <View>
            <Text style={styles.primaryText}>My Profile</Text>
          </View>

          <View style={styles.secondaryTextContainer}>
            <View style={styles.iconStyle}>
              <EmailIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}>agatharose26@gmail.com</Text>
            </View>
            <View>
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>

          <View style={styles.secondaryTextContainer}>
            <View style={styles.iconStyle}>
              <PhoneIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}>090xxxxxxxx</Text>
            </View>
            <View>
              <Text style={styles.verifiedText}>Verified</Text>
            </View>
          </View>
        </View>

        <View style={styles.userDetailsContainer}>
          <View>
            <Text style={styles.primaryText}>Card(s)</Text>
          </View>

          <View style={styles.secondaryTextContainer}>
            <View style={styles.pureIconStyles}>
              <DebitCardIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}>123456789012345</Text>
            </View>
          </View>
        </View>

        <View>
          <View>
            <Text style={styles.primaryText}>General</Text>
          </View>

          <View style={styles.secondaryTextContainer}>
            <View style={styles.pureIconStyles}>
              <HeadphoneIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}>Support</Text>
            </View>
          </View>

          <View style={styles.secondaryTextContainer}>
            <View style={styles.pureIconStyles}>
              <ShareIcon />
            </View>
            <View>
              <Text style={styles.secondaryText}>Share Tradtunes App</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0b121c',
    paddingBottom: 30,
    paddingHorizontal: 30,
  },

  userDetailsContainer: {
    borderBottomColor: '#3D4146',
    borderBottomWidth: 2,
    paddingBottom: 20,
  },

  options: {
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
  },

  profileBackground: {
    height: 400,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
  },

  profileName: {
    alignContent: 'center',
    justifyContent: 'center',
  },

  profileImageContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },

  profileImage: {
    height: 150,
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 150,
    overflow: 'hidden',
    borderColor: 'red',
  },

  primaryText: {
    color: 'white',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: 20,
    paddingVertical: 20,
  },

  secondaryText: {
    color: 'white',
    fontFamily: 'SegoeUI-Bold',
    fontSize: 17,
    marginVertical: 18,
  },

  secondaryTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  editIcon: {
    backgroundColor: '#a41940',
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
    marginLeft: 80,
  },

  iconStyle: {
    marginRight: 40,
    marginTop: 10,
  },

  pureIconStyles: {
    marginRight: 20,
  },

  verifiedText: {
    fontFamily: 'Gilroy-Light',
    color: 'white',
    fontSize: 12,
    textAlign: 'right',
  },
});

export default UserProfile;
