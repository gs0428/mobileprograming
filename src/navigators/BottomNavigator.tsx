import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Festa from '../screens/Festa';
import Place from '../screens/Place';

const BottomTab = createBottomTabNavigator();

export default function BottomNavigator() {
  return (
    <BottomTab.Navigator initialRouteName="Home">
      <BottomTab.Screen name="Festa" component={Festa} />
      <BottomTab.Screen name="Home" component={Home} />
      <BottomTab.Screen name="Place" component={Place} />
    </BottomTab.Navigator>
  );
}
