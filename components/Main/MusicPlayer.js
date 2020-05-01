/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
} from 'react-native';
import Slider from 'react-native-slider';
import Video from 'react-native-video';
import SoundPlayer from 'react-native-sound-player';

import {
  DiskIcon,
  PlusIcon,
  LikeIcon,
  FastForwardIcon,
  RewindIcon,
  PlayIcon,
  PauseIcon,
  RepeatIcon,
  ShuffleIcon,
  DownEscapeIcon,
  OptionsIcon,
} from './../Templates/Icons';

import {TouchableOpacity} from 'react-native-gesture-handler';

function pad(n, width, z = 0) {
  n = n + '';
  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
}

const minutesAndSeconds = position => [
  pad(Math.floor(position / 60), 2),
  pad(Math.floor(position % 60), 2),
];

const MusicPlayer = () => {
  const [isPaused, setPaused] = useState(true);
  const [isSliding, setSliding] = useState(false);
  const [isRepeating, setRepeat] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  // const [currentRef, setCurrentRef] = useState(null);

  const track1 = require('./../../assets/music/chike_beautiful_people.mp3');
  const track2 = require('./../../assets/music/fireboy_jealous.mp4');
  const track3 = require('./../../assets/music/nosa_nosa.mp3');
  const track4 = require('./../../assets/music/piercing_lights.mp4');

  const [getTracks, setTrack] = useState([track1, track2, track3, track4]);
  const [getCurrentIndex, setCurrentIndex] = useState(0);
  let songPercentage;

  let player = useRef(null);

  const playMusic = () => {
    if (isPaused === false) {
      return setPaused(true);
    }
    return setPaused(false);
  };

  const onLoad = params => {
    setDuration(217);
    // I would fetch duration from a database and access via params
    // setDuration(params.duration);
  };

  const onSlidingStart = () => {
    setSliding(true);
  };

  const onSlidingChange = value => {
    let updateTime = value * duration;
    setCurrentTime(updateTime);
  };

  const onSlidingComplete = percentage => {
    // () => player.seek(50);
    player.current.seek(currentTime);
    setSliding(false);
  };

  const setTime = params => {
    if (!isSliding) {
      setCurrentTime(params.currentTime);
    }
  };

  const fastForward = () => {
    if (getCurrentIndex === getTracks.length - 1) {
      setCurrentTime(0);
      return player.seek(0);
    }

    if (shuffle) {
      return shuffleHandler();
    }

    setCurrentIndex(getCurrentIndex + 1);
    setCurrentTime(0);
    player.seek(0);
  };

  const rewind = () => {
    if (getCurrentIndex !== 0) {
      setCurrentIndex(getCurrentIndex - 1);
      return setCurrentTime(0);
    }
    player.seek(0);
    return setCurrentTime(0);
  };

  const shuffleHandler = () => {
    const maxIndex = getTracks.length - 1;
    const randomIndex = Math.floor(Math.random() * (maxIndex - 0 + 1)) + 0;
    return setCurrentIndex(randomIndex);
  };

  const toggleShuffle = () => {
    setShuffle(!shuffle);
  };

  const toggleRepeat = () => {
    setRepeat(!isRepeating);
  };

  const externalInputBehaviour = () => {
    setPaused(true);
  };

  const onEnd = () => {
    if (isRepeating) {
      return fastForward();
    }
    setPaused(true);
  };

  const videoError = error => {
    console.log(error);
  };

  if (duration !== 0) {
    songPercentage = currentTime / duration;
    let data = {
      currentTime,
      duration,
      songPercentage,
    };
    //console.log(data);
  } else {
    songPercentage = 0;
  }

  const ElapsedTime = ({time}) => {
    const elapsed = minutesAndSeconds(time);
    return (
      <View>
        <Text style={styles.text}>
          {elapsed[0]}:{elapsed[1]}
        </Text>
      </View>
    );
  };

  const RemainingTime = ({time}) => {
    const remaining = minutesAndSeconds(duration - time);
    return (
      <View>
        <Text style={styles.text}>
          {remaining[0]}:{remaining[1]}
        </Text>
      </View>
    );
  };

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
        <Video
          // source={getTracks[getCurrentIndex]}
          source={require('./../../assets/music/fireboy_jealous.mp4')}
          ref={player}
          paused={isPaused}
          onLoad={onLoad}
          onProgress={setTime}
          onEnd={onEnd}
          resizeMode="cover"
          playInBackground={true}
          // audioOnly={true}
          playWhenInactive={true}
          repeat={isRepeating}
          onAudioBecomingNoisy={externalInputBehaviour} // This is a callback, pause audio when this happens
          onError={videoError}
        />
        <View style={styles.musicMediaContainer}>
          <View>
            <Text style={[styles.whiteText, styles.artisteName]}>Pryse</Text>
          </View>
          <View style={styles.seekBarContainer}>
            <View>
              <ElapsedTime time={currentTime} />
            </View>
            <Slider
              onSlidingStart={onSlidingStart}
              onSlidingComplete={onSlidingComplete}
              value={songPercentage}
              onValueChange={onSlidingChange}
              style={styles.slider}
              minimumTrackTintColor="pink"
              thumbStyle={styles.thumb}
              trackStyle={styles.track}
            />
            <View>
              <RemainingTime time={currentTime} />
            </View>
          </View>

          <View style={styles.controllerContainer}>
            <TouchableOpacity onPress={toggleShuffle}>
              <ShuffleIcon shuffle={shuffle} />
            </TouchableOpacity>
            <TouchableOpacity onPress={rewind}>
              <RewindIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={playMusic}>
              {isPaused ? <PlayIcon /> : <PauseIcon />}
            </TouchableOpacity>
            <TouchableOpacity onPress={fastForward}>
              <FastForwardIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={toggleRepeat}>
              <RepeatIcon repeat={isRepeating} />
            </TouchableOpacity>
          </View>

          <View style={styles.navBarContainer}>
            <DiskIcon />
            <PlusIcon />
            <LikeIcon />
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  /////////////SLIDER////////////////////////////////
  slider: {
    marginTop: -12,
    height: 2,
    width: 300,
  },

  track: {
    height: 2,
    borderRadius: 1,
    backgroundColor: 'pink',
  },

  thumb: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#d53e68',
  },

  text: {
    color: '#d53e68',
    fontSize: 12,
    marginHorizontal: 10,
    marginTop: -19,
  },
  /////////////////////////////////////////////////
  seekBarContainer: {
    width: '100%',
    marginTop: 40,
    flexDirection: 'row',
  },

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

  controllerContainer: {
    flexDirection: 'row',
  },

  navBarContainer: {
    flexDirection: 'row',
    marginVertical: 30,
  },

  artisteName: {
    fontSize: 18,
    padding: 10,
  },

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
    marginTop: 50,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImageTextContainer: {
    marginTop: 80,
  },

  backgroundImageText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  ///////////////////////HEADER//////////////////////////
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

export default MusicPlayer;
