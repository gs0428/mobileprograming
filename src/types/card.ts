import {Season} from '@components/SeasonTab';
import {ImageProps} from 'react-native';
import {MapProps} from './map';

export interface CardProps {
  name: string;
  image: ImageProps;
  location: MapProps;
  // 축제 화면에 쓰이는 props
  festaScreen?: boolean;
  season?: Season;
  siteUrl?: string;
}
