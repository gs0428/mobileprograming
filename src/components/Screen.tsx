import {StyleSheet, Text, View} from 'react-native';
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
  festaScreen?: boolean;
}

export default function Screen({
  title,
  items,
  festaScreen = false,
}: ScreenProps) {
  const [selectedSeason, setSelectedSeason] = useState<Season>('봄');

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
            {festaScreen && itemsByFestaScreen.length === 0 && (
              <Text style={styles.text}>아직 예정된 축제가 없어요</Text>
            )}
            {itemsByFestaScreen.length > 0 &&
              itemsByFestaScreen.map(item => (
                <Card {...item} festaScreen={festaScreen} key={item.name} />
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
  text: {
    textAlign: 'center',
    width: '100%',
  },
});
