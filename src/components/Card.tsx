import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';

import useNavigator from '@hooks/useNavigator';
import {CardProps} from '@/types/card';
import SvgIcon from '@assets/SvgIcon';
import {colors} from '@colors';
import {dateStatus} from '@utils/date';
import {useEffect, useState} from 'react';
import {getStorageData} from '@utils/storage';
import {useStorage} from '@hooks/useStorage';

export default function Card({
  name,
  festaScreen = false,
  placeScreen = false,
  image,
  siteUrl,
  location,
  startDate,
  endDate,
}: CardProps) {
  const {stackNavigation, tabNavigation} = useNavigator();
  const [favoriteData, setFavoriteData] = useState<CardProps[]>([]);

  const {addFavorite, removeFavorite} = useStorage({
    name,
    image,
    location,
    setFavoriteData,
  });

  const isFavorite = favoriteData.find(data => data.name === name);
  const status = dateStatus(startDate?.seconds, endDate?.seconds);

  const favoriteState = {
    onPress: isFavorite ? removeFavorite : addFavorite,
    Icon: isFavorite ? (
      <SvgIcon.FavoriteFilled fill={colors.white} size={12} />
    ) : (
      <SvgIcon.Favorite fill={colors.white} size={12} />
    ),
  };

  const goToWebView = () =>
    stackNavigation.navigate('WebSite', {uri: siteUrl!});

  const goToHome = () => tabNavigation.navigate('홈', {location, name});

  useEffect(() => {
    (async () => {
      const data = await getStorageData('favorite');
      setFavoriteData(JSON.parse(data!) ?? []);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Image source={{uri: image}} style={styles.image} />
        {festaScreen && (
          <Text style={[styles.text, styles[status.style]]}>{status.name}</Text>
        )}
        {placeScreen && (
          <TouchableOpacity onPress={favoriteState.onPress} style={styles.star}>
            {favoriteState.Icon}
          </TouchableOpacity>
        )}
      </View>
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
  text: {
    position: 'absolute',
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: colors.black,
    color: colors.white,
  },
  star: {
    position: 'absolute',
    padding: 6,
    borderRadius: 12,
    margin: 8,
    backgroundColor: colors.black,
  },
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
  continue: {color: colors.white, backgroundColor: colors.black},
  end: {color: colors.black, backgroundColor: colors.grey100},
  pending: {color: colors.pink200, backgroundColor: colors.pink100},
});
