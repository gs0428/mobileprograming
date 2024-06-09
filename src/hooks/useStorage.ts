import {CardProps} from '@/types/card';
import {getStorageData, setStorageData} from '@utils/storage';

interface Props extends CardProps {
  setFavoriteData: React.Dispatch<CardProps[]>;
}

export const useStorage = ({name, image, location, setFavoriteData}: Props) => {
  const addFavorite = async () => {
    const data = await getStorageData('favorite');
    const newData = [
      ...(JSON.parse(data!) ?? []),
      {
        name,
        image,
        location: {
          _latitude: location._latitude,
          _longitude: location._longitude,
        },
      },
    ];
    await setStorageData('favorite', newData);
    setFavoriteData(newData);
  };

  const removeFavorite = async () => {
    const data = await getStorageData('favorite');
    const filteredData = (JSON.parse(data!) ?? []).filter(
      (data: CardProps) => data.name !== name,
    );
    await setStorageData('favorite', filteredData);
    setFavoriteData(filteredData);
  };
  return {addFavorite, removeFavorite};
};
