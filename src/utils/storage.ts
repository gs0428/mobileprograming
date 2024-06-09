import AsyncStorage from '@react-native-async-storage/async-storage';
import {CardProps} from '@/types/card';

export const setStorageData = async (key: string, value: CardProps[]) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (err) {
    console.error(err);
  }
};

export const getStorageData = async (key: string) => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (err) {
    console.error(err);
  }
};
