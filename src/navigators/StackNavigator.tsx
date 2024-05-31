import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './BottomNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator initialRouteName="BottomNavigator">
      <Stack.Screen
        name="BottomNavigator"
        component={BottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
