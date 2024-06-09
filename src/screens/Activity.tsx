import Screen from '@components/Screen';
import {CardProps} from '@/types/card';
import {useEffect, useState} from 'react';
import {getActivityItems} from '@utils/firebase';

export default function Activity() {
  const [items, setItems] = useState<CardProps[]>([]);

  useEffect(() => {
    (async () => {
      setItems(await getActivityItems());
    })();
  }, []);

  return <Screen title="액티비티" items={items || []} />;
}
