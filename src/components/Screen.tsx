import {StyleSheet, View} from 'react-native';
import Header from '@components/Header';
import ViewContainer from '@components/ViewContainer';
import ScrollViewContainer from '@components/ScrollViewContainer';
import Card from '@components/Card';
import {CardProps} from '@/types/card';
import {useState} from 'react';
import SeasonTab, {Season} from './SeasonTab';

interface ScreenProps {
  title: string;
  items: CardProps[];
}

export default function Screen({title, items}: ScreenProps) {
  const [selectedSeason, setSelectedSeason] = useState<Season>('봄');

  const festaScreen = items.findIndex(item => item.festaScreen === true) !== -1;
  const itemsByFestaScreen = festaScreen
    ? items.filter(item => item.season === selectedSeason)
    : items;

  const onSelectSeason = (season: Season) => setSelectedSeason(season);

  return (
    <>
      <Header title={title} />
      {festaScreen && (
        <SeasonTab
          selectedSeason={selectedSeason}
          onSelectSeason={onSelectSeason}
        />
      )}
      <ViewContainer>
        <ScrollViewContainer>
          <View style={styles.container}>
            {itemsByFestaScreen.map(item => (
              <Card {...item} key={item.name} />
            ))}
          </View>
        </ScrollViewContainer>
      </ViewContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 24,
    justifyContent: 'space-between',
  },
});
