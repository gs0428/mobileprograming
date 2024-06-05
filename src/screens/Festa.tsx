import Screen from '@components/Screen';
import {CardProps} from '@/types/card';
import {useEffect, useState} from 'react';
import {getFestaItems} from '@utils/firebase';

export default function Festa() {
  const [items, setItems] = useState<CardProps[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getFestaItems());
    })();
  }, []);

  return <Screen title="축제" items={items || []} festaScreen />;
}
