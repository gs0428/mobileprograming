import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import {requestPermissions} from '@/utils/requestPermissions';
import {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProps} from '@/types/navigator';
import {CameraProps} from '@/types/map';
import {getPlaceItems} from '@utils/firebase';
import {CardProps} from '@/types/card';

interface HomeProps {
  route?: RouteProp<BottomTabNavigationProps, '홈'>;
}

const initialLocation = {
  _latitude: 37.340191,
  _longitude: 126.733529,
  zoom: 15,
};

export default function Home({route}: HomeProps) {
  const [location, setLocation] = useState<CameraProps>(initialLocation);
  const [items, setItems] = useState<CardProps[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getPlaceItems());
    })();
  }, []);
  const camera = {
    latitude: location._latitude,
    longitude: location._longitude,
    zoom: 15,
  };

  useEffect(requestPermissions, []);
  useEffect(() => {
    route?.params && setLocation({...route?.params.location, zoom: 15});
  }, [route?.params]);

  return (
    <NaverMapView isExtentBoundedInKorea camera={camera} style={{flex: 1}}>
      <NaverMapMarkerOverlay
        latitude={initialLocation._latitude}
        longitude={initialLocation._longitude}
        anchor={{x: 0.5, y: 0.5}}
        image={require('../assets/images/marker.png')}
        width={21}
        height={21}
      />
      {items.map(item => (
        <NaverMapMarkerOverlay
          latitude={item.location._latitude}
          longitude={item.location._longitude}
          anchor={{x: 0.5, y: 1}}
          caption={{text: item.name}}
          image={{symbol: 'green'}}
          width={20}
          height={32}
          key={item.name}
        />
      ))}
    </NaverMapView>
  );
}
