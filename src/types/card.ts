import {Season} from '@components/SeasonTab';
import {ImageProps} from 'react-native';

export interface CardProps {
  name: string;
  image: ImageProps;
  location: {
    lat: number;
    lng: number;
  };
  // 축제 화면에 쓰이는 props
  festaScreen?: boolean;
  season?: Season;
  siteUrl?: string;
}
