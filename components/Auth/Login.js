/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import BackButton from './../Templates/BackButton';
import {globalStyles} from './../../customstyles/styles';
import {UserLoginContext} from '../../ContextAPI/AuthContext';
import ErrorMessage from './../Templates/ErrorMessages';
import isEmptyObject from './../../utils/isEmptyObject';
import Spinner from 'react-native-loading-spinner-overlay';
import Tradtunes from './../Templates/Tradtunes';
import {SigninButton} from './../Templates/Auth/AuthButtons';
import {EmailIcon, PasswordIcon} from './../Templates/Auth/AuthIcons';
import {storeData} from './../../utils/localStorage';

const rules = yup.object({
  email: yup.string().required(),
  password: yup
    .string()
    .required()
    .min(8),
});

const Login = ({navigation}) => {
  const {response, handleLogin} = useContext(UserLoginContext);
  const [error, setError] = useState({});
  const [dialogBox, setDialogBox] = useState(false);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    if (response.isAuthenticated) {
      storeData('user', response);
      setSpinner(false);
      navigation.navigate('HomeView');
    } else if (
      response.isAuthenticated === false &&
      !isEmptyObject(response.message)
    ) {
      if (
        response.message.emailOrPhoneNumber &&
        response.message.emailOrPhoneNumber.trim() === ''
      ) {
        setTimeout(() => {
          setSpinner(false);
          setDialogBox(true);
        }, 100);
        return setError({error: response.message.emailOrPhoneNumber});
      }
      if (
        response.message.password &&
        response.message.password.trim() === ''
      ) {
        setTimeout(() => {
          setSpinner(false);
          setDialogBox(true);
        }, 100);
        return setError({error: response.message.password});
      }
      setTimeout(() => {
        setSpinner(false);
        setDialogBox(true);
      }, 100);
      return setError(response.message);
    }
  }, [navigation, response, response.isAuthenticated, response.message]);

  const goToSignUp = () => {
    navigation.navigate('SignUp');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground
      source={require('../../assets/images/backgrounds/login_signup_bg.jpg')}
      style={styles.backgroundImage}>
      <Spinner
        visible={spinner}
        textContent={'Loading...'}
        textStyle={styles.whiteText}
      />
      <TouchableOpacity onPress={goBack}>
        <BackButton />
      </TouchableOpacity>
      <ErrorMessage
        visible={dialogBox}
        setDialogBox={setDialogBox}
        errorMessage={error.error}
      />
      <ScrollView>
        <View style={styles.logoTextContainer}>
          <Tradtunes />
        </View>
        <View style={styles.inputContainer}>
          <Formik
            validationSchema={rules}
            initialValues={{email: '', password: ''}}
            onSubmit={values => {
              setSpinner(true);
              const userData = {
                emailOrPhoneNumber: values.email,
                password: values.password,
              };
              handleLogin(userData);
            }}>
            {props => {
              return (
                <View style={styles.inputContainer}>
                  <View style={styles.inputGroup}>
                    <EmailIcon />
                    <TextInput
                      placeholderTextColor="white"
                      style={styles.inputText}
                      selectionColor={'white'}
                      placeholder="Email Address"
                      autoCapitalize="none"
                      value={props.values.email}
                      onChangeText={props.handleChange('email')}
                    />
                  </View>
                  <View>
                    <Text style={globalStyles.formError}>
                      {props.touched.email && props.errors.email}
                    </Text>
                  </View>
                  <View style={styles.inputGroup}>
                    <PasswordIcon />
                    <TextInput
                      placeholderTextColor="white"
                      selectionColor={'white'}
                      style={styles.inputText}
                      placeholder="Password"
                      secureTextEntry={true}
                      value={props.values.password}
                      onChangeText={props.handleChange('password')}
                    />
                  </View>
                  <View>
                    <Text style={globalStyles.formError}>
                      {props.touched.password && props.errors.password}
                    </Text>
                  </View>
                  <View style={styles.detailsContainer}>
                    <View style={styles.detailsText}>
                      <Text style={[styles.whiteText, styles.bottomText]}>
                        Forgot Password?
                      </Text>
                    </View>

                    <View style={styles.inputGroup}>
                      <SigninButton handleSubmit={props.handleSubmit} />
                    </View>

                    <View>
                      <Text style={[styles.whiteText, styles.bottomText]}>
                        Dont have an account?{' '}
                        <Text onPress={goToSignUp} style={styles.boldText}>
                          Sign Up Here
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          </Formik>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backButtonIcon: {
    marginLeft: 30,
    marginTop: 30,
    width: 100,
    height: 100,
  },

  logoTextContainer: {
    marginTop: -50,
    marginBottom: -20,
  },

  textContainer: {
    marginTop: 10,
    color: 'white',
  },

  detailsText: {
    alignSelf: 'flex-end',
    marginHorizontal: -20,
    marginTop: -5,
    marginBottom: 20,
  },

  boldText: {
    fontWeight: 'bold',
  },

  detailsContainer: {
    alignItems: 'center',
  },

  whiteText: {
    color: 'white',
    fontFamily: 'Gilroy-Light',
  },

  bottomText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Gilroy-Light',
  },

  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputGroup: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputText: {
    fontFamily: 'Gilroy-Light',
    borderBottomColor: 'white',
    width: 350,
    textAlign: 'center',
    borderBottomWidth: 1,
    color: 'white',
  },

  inputIcons: {
    marginRight: -10,
  },

  SigninputIcons: {
    marginRight: -25,
    marginTop: -10,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  logo: {
    width: 70,
    height: 80,
  },

  textTitle: {
    color: 'white',
    fontSize: 20,
  },

  ButtonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default Login;
