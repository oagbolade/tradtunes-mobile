/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React from 'react';
import {StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import IonicIcon from 'react-native-vector-icons/Ionicons';
import FeatherIcon from 'react-native-vector-icons/Feather';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import FontistoIcon from 'react-native-vector-icons/Fontisto';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import AntIcon from 'react-native-vector-icons/AntDesign';

const iconSize = 25;
const backButtonSize = 40;

export const TradtunesIcon = () => (
  <Image
    source={require('./../../assets/images/logos/discover/discover_logo.png')}
    style={styles.tradtunesLogo}
  />
);

export const SmallPlayIcon = () => (
  <AntIcon
    name="play"
    size={20}
  />
);

export const BackButton = () => (
  <MaterialIcon name="keyboard-backspace" color="white" size={backButtonSize} />
);

export const SettingsIcon = () => (
  <FeatherIcon name="settings" color="white" size={iconSize} />
);

export const DebitCardIcon = () => (
  <IonicIcon name="ios-card" color="white" size={iconSize} />
);

export const HeadphoneIcon = () => (
  <FontistoIcon name="headphone" color="white" size={iconSize} />
);

export const ShareIcon = () => (
  <FontAwesomeIcon name="share-square-o" color="white" size={iconSize} />
);

export const EditIcon = () => (
  <MaterialIcon name="edit" color="white" size={18} />
);

export const DiskIcon = () => (
  <FontAwesome5Icon
    name="compact-disc"
    style={styles.navBarIcons}
    color="white"
    size={iconSize}
  />
);

export const PlusIcon = () => (
  <AntDesignIcon
    name="plus"
    style={styles.navBarIcons}
    color="white"
    size={iconSize}
  />
);

export const LikeIcon = () => (
  <AntDesignIcon
    name="hearto"
    style={styles.navBarIcons}
    color="white"
    size={iconSize}
  />
);

export const FastForwardIcon = () => (
  <FeatherIcon
    name="fast-forward"
    style={styles.iconStyles}
    color="white"
    size={iconSize}
  />
);

export const RewindIcon = () => (
  <FeatherIcon
    name="rewind"
    style={styles.iconStyles}
    color="white"
    size={iconSize}
  />
);

export const PlayIcon = () => (
  <FeatherIcon name="play" style={styles.iconStyles} color="white" size={50} />
);

export const PauseIcon = () => (
  <FeatherIcon name="pause" style={styles.iconStyles} color="white" size={50} />
);

export const RepeatIcon = props => (
  <FeatherIcon
    name="repeat"
    style={[styles.iconStyles, props.repeat ? styles.toggleStyle : {}]}
    color="white"
    size={iconSize}
  />
);

export const ShuffleIcon = props => (
  <Icon
    name="shuffle"
    color="white"
    style={[styles.iconStyles, props.shuffle ? styles.toggleStyle : {}]}
    size={iconSize}
  />
);

export const DownEscapeIcon = () => (
  <Icon name="chevron-thin-down" color="white" size={iconSize} />
);

export const OptionsIcon = () => (
  <IonicIcon
    name="ios-options"
    color="white"
    style={styles.headerIcons}
    size={iconSize}
  />
);

const styles = StyleSheet.create({
  tradtunesLogo: {
    width: 22,
    height: 25,
  },

  iconStyles: {
    marginHorizontal: 28,
    marginVertical: 22,
    alignSelf: 'center',
  },

  playIconStyles: {
    marginHorizontal: 30,
  },

  headerIcons: {
    marginHorizontal: 45,
  },

  navBarIcons: {
    marginHorizontal: 70,
  },

  toggleStyle: {
    color: '#d53e68',
  },
});
