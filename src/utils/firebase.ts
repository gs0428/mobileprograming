import firestore from '@react-native-firebase/firestore';
import {CardProps} from '@/types/card';

export const getFestaItems = async (): Promise<CardProps[]> => {
  const festaItems = await firestore().collection('festa').doc('list').get();

  return festaItems.data()?.item;
};

export const getPlaceItems = async (): Promise<CardProps[]> => {
  const placeItems = await firestore().collection('place').doc('list').get();

  return placeItems.data()?.item;
};

export const getActivityItems = async (): Promise<CardProps[]> => {
  const activityItems = await firestore()
    .collection('activity')
    .doc('list')
    .get();

  return activityItems.data()?.item;
};
