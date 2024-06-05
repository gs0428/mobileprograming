import {
  NaverMapMarkerOverlay,
  NaverMapView,
} from '@mj-studio/react-native-naver-map';
import {requestPermissions} from '@/utils/requestPermissions';
import {useEffect, useState} from 'react';
import {RouteProp} from '@react-navigation/native';
import {BottomTabNavigationProps} from '@/types/navigator';
import {CameraProps} from '@/types/map';

interface HomeProps {
  route: RouteProp<BottomTabNavigationProps, '홈'>;
}

const initialLocation = {
  latitude: 37.340191,
  longitude: 126.733529,
  zoom: 15,
};

export default function Home({route: {params}}: HomeProps) {
  const [location, setLocation] = useState<CameraProps>(initialLocation);

  useEffect(requestPermissions, []);
  useEffect(() => {
    params && setLocation({...params?.location, zoom: 15});
  }, [params]);
  return (
    <NaverMapView isExtentBoundedInKorea camera={location} style={{flex: 1}}>
      <NaverMapMarkerOverlay
        latitude={initialLocation.latitude}
        longitude={initialLocation.longitude}
        anchor={{x: 0.5, y: 0.5}}
        image={require('../assets/images/marker.png')}
        width={21}
        height={21}
      />
      {params && (
        <NaverMapMarkerOverlay
          latitude={params?.location.latitude}
          longitude={params?.location.longitude}
          anchor={{x: 0.5, y: 1}}
          caption={{text: params?.name}}
          image={{symbol: 'green'}}
          width={20}
          height={32}
        />
      )}
    </NaverMapView>
  );
}
