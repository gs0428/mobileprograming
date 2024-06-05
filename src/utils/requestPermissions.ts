import {PERMISSIONS, requestMultiple} from 'react-native-permissions';

export const requestPermissions = () => {
  requestMultiple([
    PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
  ])
    .then(status => {
      console.log(status);
    })
    .catch(err => {
      console.error(err);
    });
};
