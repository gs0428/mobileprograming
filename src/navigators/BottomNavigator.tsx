import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@screens/Home.tsx';
import Festa from '@screens/Festa.tsx';
import Place from '@screens/Place.tsx';
import Activity from '@screens/Activity';
import SvgIcon from '@assets/SvgIcon.tsx';
import {colors} from '@colors';
import Favorite from '@screens/Favorite';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator
      initialRouteName="홈"
      screenOptions={{tabBarStyle: {borderTopColor: colors.grey200}}}>
      <BottomTab.Screen
        name="액티비티"
        component={Activity}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.ActivityFilled /> : <SvgIcon.Activity />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey300,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="축제"
        component={Festa}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.FestaFilled /> : <SvgIcon.Festa />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey300,
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
          tabBarInactiveTintColor: colors.grey300,
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
          tabBarInactiveTintColor: colors.grey300,
          headerShown: false,
        }}
      />
      <BottomTab.Screen
        name="즐겨찾기"
        component={Favorite}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? <SvgIcon.FavoriteFilled /> : <SvgIcon.Favorite />,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.grey300,
          headerShown: false,
        }}
      />
    </BottomTab.Navigator>
  );
}
