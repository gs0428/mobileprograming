import {Season} from '@components/SeasonTab';
import {MapProps} from './map';

export interface CardProps {
  name: string;
  image: string;
  location: MapProps;
  // 축제 화면에 쓰이는 props
  festaScreen?: boolean;
  season?: Season;
  siteUrl?: string;
}
