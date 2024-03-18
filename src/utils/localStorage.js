import AsyncStorage from '@react-native-async-storage/async-storage';

export default class AsyncStorageServices {
  static setItem(key, value) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static async getItem(key) {
    return AsyncStorage.getItem(key).then((item) => {
      if (item != 'undefined') {
        return JSON.parse(item);
      }
    });
  }

  static removeItem(key) {
    return AsyncStorage.removeItem(key);
  }
}