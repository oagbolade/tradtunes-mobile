import React, {useReducer, useMemo, useCallback, createContext} from 'react';
import axios from 'axios';
import {BASE_URL} from './Constants';
import jwt_decode from 'jwt-decode';
import setAuthToken from './../utils/setAuthToken';
import {storeData, getData} from './../utils/localStorage';
import {reducer, TYPES, initialState} from './../reducers/authReducer';

export const UserLoginContext = createContext();
export const UserSignUpContext = createContext();

export function LoginContextController({children}) {
  const [response, dispatch] = useReducer(reducer, initialState);

  const handleLogin = useCallback(userData => {
    const URL = `${BASE_URL}user/login`;
    console.log(userData);
    axios
      .post(URL, userData)
      .then(function(res) {
        const {token} = res.data;
        // Save token to local storage
        storeData('token', token);
        // AsyncStorage.setItem('token', token);
        // Set token on axios
        setAuthToken(token);
        // Decode token
        const decoded = jwt_decode(token);
        // getData('token');
        dispatch({
          type: TYPES.login,
          payload: decoded,
        });
        // console.log(res);
      })
      .catch(function(err) {
        dispatch({
          type: TYPES.errors,
          payload: err.response.data,
        });
        // console.log(err.response);
      });
  }, []);

  const value = useMemo(() => {
    return {response, handleLogin};
  }, [handleLogin, response]);

  return (
    <UserLoginContext.Provider value={value}>
      {children}
    </UserLoginContext.Provider>
  );
}

export function SignUpContextController({children}) {
  const [response, dispatch] = useReducer(reducer, initialState);

  const handleSignup = useCallback(userData => {
    const URL = `${BASE_URL}user/register`;
    console.log(userData);
    axios
      .post(URL, userData)
      .then(function(res) {
        dispatch({
          type: TYPES.signup,
          payload: res.data,
        });
        console.log(res.data);
      })
      .catch(function(err) {
        dispatch({
          type: TYPES.errors,
          payload: err.response.data,
        });
        console.log(err.response);
      });
  }, []);

  const value = useMemo(() => {
    return {response, handleSignup};
  }, [handleSignup, response]);

  return (
    <UserSignUpContext.Provider value={value}>
      {children}
    </UserSignUpContext.Provider>
  );
}
