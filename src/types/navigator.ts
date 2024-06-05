import {ParamListBase} from '@react-navigation/native';
import {MapProps} from './map';

export interface BottomTabNavigationProps extends ParamListBase {
  축제: undefined;
  홈: {location: MapProps; name: string};
  명소: undefined;
}

export interface StackNavigationProps extends ParamListBase {
  BottomNavigator: undefined;
  WebSite: {uri: string};
}
