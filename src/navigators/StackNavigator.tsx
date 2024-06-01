import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';
import WebSite from '@screens/WebSite';
import {StackNavigationProps} from '@/types/navigator';

const Stack = createNativeStackNavigator<StackNavigationProps>();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="WebSite"
        component={WebSite}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
