import {NavigationProp, useNavigation} from '@react-navigation/native';
import {
  BottomTabNavigationProps,
  StackNavigationProps,
} from '@/types/navigator';

export default function useNavigator() {
  const stackNavigation = useNavigation<NavigationProp<StackNavigationProps>>();
  const tabNavigation =
    useNavigation<NavigationProp<BottomTabNavigationProps>>();

  return {stackNavigation, tabNavigation};
}
