/* eslint-disable prettier/prettier */
/* eslint-disable no-trailing-spaces */
import React, {useState, useContext, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import {ScrollView} from 'react-native-gesture-handler';
import {globalStyles} from './../../customstyles/styles';
import {UserSignUpContext} from '../../ContextAPI/AuthContext';
import ErrorMessage from './../Templates/ErrorMessages';
import Spinner from 'react-native-loading-spinner-overlay';
import isEmptyObject from './../../utils/isEmptyObject';
import Tradtunes from './../Templates/Tradtunes';
import BackButton from './../Templates/BackButton';
import {FacebookButton, SignupButton} from './../Templates/Auth/AuthButtons';
import {
  EmailIcon,
  PasswordIcon,
  PhoneIcon,
  UserIcon,
} from './../Templates/Auth/AuthIcons';
import { storeData } from './../../utils/localStorage';

const rules = yup.object({
  name: yup.string().required(),
  phone: yup.number().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .required()
    .min(8),
});

const SignUp = ({navigation}) => {
  // Hooks
  const {response, handleSignup} = useContext(UserSignUpContext);
  const [error, setError] = useState({});
  const [dialogBox, setDialogBox] = useState(false);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    // if (facebookAuthLoading) {
    //   console.log(getResponse);
    //   console.log('looding...');
    //   setSpinner(true);
    // } else {
    //   console.log(getResponse);
    //   console.log('looding... done');

    //   setSpinner(false);
    // }

    if (response.isAuthenticated === true) {
      storeData('user', response);
      setSpinner(false);
      navigation.navigate('HomeView');
    } else if (
      response.isAuthenticated === false &&
      !isEmptyObject(response.message)
    ) {
      if (response.message.name && response.message.name.trim() === '') {
        setTimeout(() => {
          setSpinner(false);
          setDialogBox(true);
        }, 100);
        return setError({error: response.message.name});
      }
      if (response.message.email && response.message.email.trim() === '') {
        setTimeout(() => {
          setSpinner(false);
          setDialogBox(true);
        }, 100);
        return setError({error: response.message.email});
      }
      if (response.message.phone && response.message.phone.trim() === '') {
        setTimeout(() => {
          setSpinner(false);
          setDialogBox(true);
        }, 100);
        return setError({error: response.message.phone});
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
      console.log('Spinner status', spinner);
      setTimeout(() => {
        setSpinner(false);
        setDialogBox(true);
      }, 100);
      return setError(response.message);
    }
  }, [
    navigation,
    response,
    response.isAuthenticated,
    response.message,
    spinner,
  ]);

  const goToLogin = () => {
    navigation.navigate('Login');
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView>
      <Spinner visible={spinner} />
      <ErrorMessage
        visible={dialogBox}
        setDialogBox={setDialogBox}
        errorMessage={error.error}
      />
      <View>
        <ImageBackground
          source={require('../../assets/images/backgrounds/login_signup_bg.jpg')}
          style={[styles.backgroundImage, styles.container]}>
          <TouchableOpacity onPress={goBack}>
            <BackButton />
          </TouchableOpacity>
          <View style={styles.logoTextContainer}>
            <Tradtunes />
          </View>
          <Formik
            validationSchema={rules}
            initialValues={{name: '', email: '', phone: '', password: ''}}
            onSubmit={values => {
              setSpinner(true);
              const userData = {
                name: values.name,
                email: values.email,
                phone: values.phone,
                password: values.password,
              };
              handleSignup(userData);
            }}>
            {props => {
              return (
                <View style={styles.inputContainer}>
                  <View style={styles.inputGroup}>
                    <UserIcon />
                    <TextInput
                      placeholderTextColor="white"
                      style={styles.inputText}
                      selectionColor={'white'}
                      placeholder="Name"
                      value={props.values.name}
                      onChangeText={props.handleChange('name')}
                    />
                  </View>
                  <View>
                    <Text style={globalStyles.formError}>
                      {props.touched.name && props.errors.name}
                    </Text>
                  </View>
                  <View style={styles.inputGroup}>
                    <PhoneIcon />
                    <TextInput
                      keyboardType="numeric"
                      placeholderTextColor="white"
                      style={styles.inputText}
                      selectionColor={'white'}
                      placeholder="Phone Number"
                      value={props.values.phone}
                      onChangeText={props.handleChange('phone')}
                    />
                  </View>
                  <View>
                    <Text style={globalStyles.formError}>
                      {props.touched.phone && props.errors.phone}
                    </Text>
                  </View>
                  <View style={styles.inputGroup}>
                    <EmailIcon />
                    <TextInput
                      keyboardType="email-address"
                      placeholderTextColor="white"
                      selectionColor={'white'}
                      style={styles.inputText}
                      placeholder="Email Address"
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
                    <View style={[styles.inputGroup, styles.buttonSpacing]}>
                      <SignupButton handleSubmit={props.handleSubmit} />
                    </View>

                    <View style={styles.inputGroup}>
                      <FacebookButton />
                    </View>

                    <View>
                      <Text style={[styles.whiteText, styles.bottomText]}>
                        Already have an account?{' '}
                        <Text onPress={goToLogin} style={styles.boldText}>
                          Login
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              );
            }}
          </Formik>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  facebookButton: {
    height: 500,
    color: 'white',
  },

  container: {
    paddingBottom: 30,
  },

  logoTextContainer: {
    marginTop: -100,
  },

  detailsText: {
    alignSelf: 'flex-end',
    paddingHorizontal: 50,
    paddingVertical: 12,
  },

  boldText: {
    fontWeight: 'bold',
  },

  detailsContainer: {
    alignItems: 'center',
    marginTop: 8,
  },

  whiteText: {
    color: 'white',
  },

  bottomText: {
    fontSize: 15,
    color: 'white',
    fontFamily: 'Gilroy-Light',
  },

  inputContainer: {
    marginTop: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputGroup: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonSpacing: {
    marginTop: -2,
    marginBottom: -15,
  },

  inputText: {
    fontFamily: 'Gilroy-Light',
    borderBottomColor: 'white',
    width: 350,
    fontSize: 13,
    textAlign: 'center',
    borderBottomWidth: 1,
    color: 'white',
  },

  inputIcons: {
    marginRight: -10,
  },

  ButtonInputIcons: {
    zIndex: 999,
    marginRight: -25,
    marginTop: -10,
  },

  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
  },

  Button: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
    width: 350,
    marginTop: 10,
    paddingVertical: 13,
    borderRadius: 18,
  },

  SignUpButton: {
    borderWidth: 3,
    borderColor: '#a41940',
  },

  FacebookButton: {
    backgroundColor: '#3b5998',
  },

  ButtonTextStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default SignUp;
