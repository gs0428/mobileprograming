import {NaverMapView} from '@mj-studio/react-native-naver-map';
import {useEffect} from 'react';
import {Platform, Text} from 'react-native';
import {
  request,
  PERMISSIONS,
  requestLocationAccuracy,
  requestMultiple,
} from 'react-native-permissions';

export default function Home() {
  // useEffect는 단순히 컴포넌트가 mount될 때 호출해주기 위해서 사용되었습니다.
  useEffect(() => {
    if (Platform.OS === 'ios') {
      request(PERMISSIONS.IOS.LOCATION_ALWAYS).then(status => {
        console.log(`Location request status: ${status}`);
        if (status === 'granted') {
          requestLocationAccuracy({
            purposeKey: 'common-purpose', // replace your purposeKey of Info.plist
          })
            .then(accuracy => {
              console.log(`Location accuracy is: ${accuracy}`);
            })
            .catch(e => {
              console.error(`Location accuracy request has been failed: ${e}`);
            });
        }
      });
    }
    if (Platform.OS === 'android') {
      requestMultiple([
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        PERMISSIONS.ANDROID.ACCESS_BACKGROUND_LOCATION,
      ])
        .then(status => {
          console.log(`Location request status: ${status}`);
        })
        .catch(e => {
          console.error(`Location request has been failed: ${e}`);
        });
    }
  }, []);
  return <NaverMapView style={{flex: 1}} />;
}
