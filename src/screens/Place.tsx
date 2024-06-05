import Screen from '@components/Screen';
import {CardProps} from '@/types/card';
import {getPlaceItems} from '@utils/firebase';
import {useState, useEffect} from 'react';

export default function Place() {
  const [items, setItems] = useState<CardProps[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getPlaceItems());
    })();
  }, []);
  return <Screen title="명소" items={items} />;
}
