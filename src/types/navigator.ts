import {ParamListBase} from '@react-navigation/native';

export interface BottomTabNavigationProps extends ParamListBase {
  축제: undefined;
  홈: undefined;
  명소: undefined;
}

export interface StackNavigationProps extends ParamListBase {
  BottomNavigator: undefined;
  WebSite: {uri: string};
}
