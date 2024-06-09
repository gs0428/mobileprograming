import Screen from '@components/Screen';
import {CardProps} from '@/types/card';
import {useEffect, useState} from 'react';
import {getStorageData} from '@utils/storage';
import {useIsFocused} from '@react-navigation/native';

export default function Favorite() {
  const [items, setItems] = useState<CardProps[]>([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    (async () => {
      const data = await getStorageData('favorite');
      setItems(JSON.parse(data!) ?? []);
    })();
  }, [isFocused]);

  return <Screen title="즐겨찾기" items={items ?? []} />;
}
