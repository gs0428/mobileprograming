import {RouteProp} from '@react-navigation/native';
import {StackNavigationProps} from '@/types/navigator';
import WebView from 'react-native-webview';

interface WebSiteProps {
  route: RouteProp<StackNavigationProps, 'WebSite'>;
}

export default function WebSite({route: {params}}: WebSiteProps) {
  return <WebView style={{flex: 1}} source={{uri: params.uri}} />;
}
