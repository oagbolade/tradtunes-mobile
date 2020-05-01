import {AsyncStorage} from 'react-native';

export const storeData = async (key, data) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.log(error.message);
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      return Promise.resolve(value);
    }
  } catch (error) {
    console.log(error.message);
    return Promise.reject(error.message);
  }
};

export const deleteData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(error.message);
  }
};
