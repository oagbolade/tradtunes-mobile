import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  LoginContextController,
  SignUpContextController,
} from './ContextAPI/AuthContext';

const Drawer = createDrawerNavigator();

import Home from './components/Main/Home';
import Landing from './components/Main/LandingScreen';
import Login from './components/Auth/Login';
import Logout from './components/Auth/Logout';
import SignUp from './components/Auth/SignUp';
import SplashScreen from './components/Main/SplashScreen';
import ArtisteAlbum from './components/Main/ArtisteAlbum';
import Discover from './components/Main/Discover';
import Genre from './components/Main/Genre';
import Trending from './components/Main/Trending';
import MusicPlayer from './components/Main/MusicPlayer';
import Library from './components/Main/Library';
import Playlist from './components/Main/Playlist';
import UserProfile from './components/Main/UserProfile';

const App: () => React$Node = () => {
  const [splashScreen, setSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setSplashScreen(false);
    }, 3000);
  });

  if (splashScreen) {
    return <SplashScreen />;
  } else {
    return (
      <LoginContextController>
        <SignUpContextController>
          <NavigationContainer>
            <Drawer.Navigator initialRouteName="Landing Screen">
              <Drawer.Screen name="Landing Screen" component={Landing} />
              <Drawer.Screen name="Login" component={Login} />
              <Drawer.Screen name="SignUp" component={SignUp} />
              <Drawer.Screen name="Logout" component={Logout} />
              <Drawer.Screen name="HomeView" component={Home} />
              <Drawer.Screen name="Genre" component={Genre} />
              <Drawer.Screen name="ArtisteAlbum" component={ArtisteAlbum} />
              <Drawer.Screen name="Discover" component={Discover} />
              <Drawer.Screen name="Playlist" component={Playlist} />
              <Drawer.Screen name="Trending" component={Trending} />
              <Drawer.Screen name="MusicPlayer" component={MusicPlayer} />
              <Drawer.Screen name="Library" component={Library} />
              <Drawer.Screen name="UserProfile" component={UserProfile} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SignUpContextController>
      </LoginContextController>
    );
  }
};

export default App;
