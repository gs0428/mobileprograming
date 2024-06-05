import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageProps,
} from 'react-native';

import useNavigator from '@hooks/useNavigator';
import {CardProps} from '@/types/card';
import SvgIcon from '@assets/SvgIcon';
import {colors} from '@colors';

export default function Card({
  name,
  festaScreen = false,
  image,
  siteUrl,
  location,
}: CardProps) {
  const {stackNavigation, tabNavigation} = useNavigator();

  const goToWebView = () =>
    stackNavigation.navigate('WebSite', {uri: siteUrl!});

  const goToHome = () => tabNavigation.navigate('홈', {location, name});

  return (
    <View style={styles.container}>
      <Image source={image as ImageProps} style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <View style={styles.buttonWrap}>
        {festaScreen && (
          <TouchableOpacity style={styles.button} onPress={goToWebView}>
            <SvgIcon.Web />
            <Text>사이트 보기</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity style={styles.button} onPress={goToHome}>
          <SvgIcon.Map />
          <Text>위치 보기</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxWidth: 130,
  },
  image: {borderRadius: 4, width: 130, height: 130},
  name: {
    color: colors.black,
    textAlign: 'center',
    marginVertical: 8,
  },
  buttonWrap: {gap: 4},
  button: {
    borderWidth: 1,
    paddingHorizontal: 8,
    borderColor: colors.grey100,
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
