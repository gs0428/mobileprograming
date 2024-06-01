import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home.tsx';
import Festa from '@screens/Festa.tsx';
import Place from '@screens/Place.tsx';
import SvgIcon from '@assets/SvgIcon.tsx';
import {colors} from '@colors';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      screenOptions={{tabBarStyle: {borderTopColor: colors.grey100}}}>
      <BottomTab.Screen
        name="축제"
        component={Festa}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.FestaFilled /> : <SvgIcon.Festa />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey200,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="홈"
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.HomeFilled /> : <SvgIcon.Home />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey200,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="명소"
        component={Place}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.PlaceFilled /> : <SvgIcon.Place />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey200,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
