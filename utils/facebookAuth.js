import React from 'react';
import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import {storeData, getData, deleteData} from './localStorage';
import {BASE_URL} from './../ContextAPI/Constants';
import axios from 'axios';
import isEmptyObject from './isEmptyObject';
import {useNavigation} from '@react-navigation/native';

const logoutWithFacebook = () => {
  LoginManager.logOut();
  // this.setState({userInfo: {}});
};

export const loginWithFacebook = () => {
  LoginManager.logInWithPermissions(['email', 'public_profile']).then(
    login => {
      if (login.isCancelled) {
        console.log('Login cancelled');
      } else {
        AccessToken.getCurrentAccessToken().then(data => {
          const accessToken = data.accessToken.toString();
          getInfoFromToken(accessToken);
        });
      }
    },
    error => {
      console.log('Login fail with error: ' + error);
    },
  );
};

const getInfoFromToken = token => {
  const PROFILE_REQUEST_PARAMS = {
    fields: {
      string: 'id, name, first_name, last_name, email',
    },
  };
  const profileRequest = new GraphRequest(
    '/me',
    {token, parameters: PROFILE_REQUEST_PARAMS},
    (fberror, result) => {
      if (fberror) {
        console.log('login info has error: ', fberror);
      } else {
        const userData = {
          name: result.name,
          email: result.email,
        };
        facebookAuthHandler(userData);
      }
    },
  );
  new GraphRequestManager().addRequest(profileRequest).start();
};

const facebookAuthHandler = userData => {
  const URL = `${BASE_URL}auth/facebookauth/register`;
  axios
    .post(URL, userData)
    .then(function(res) {
      const preparedResponse = {
        isAuthenticated: !isEmptyObject(res.data),
        user: res.data,
        message: 'success',
      };
      console.log(preparedResponse);
      storeData('user', preparedResponse);
      //   getData('user').then(response => {
      //     console.log(response);
      //   });
    })
    .catch(function(err) {
      console.log(err);
    });
};
