import {colors} from '@colors';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export type Season = '봄' | '여름' | '가을' | '겨울';

const seasons: Season[] = ['봄', '여름', '가을', '겨울'];

interface SeasonTabProps {
  selectedSeason: Season;
  onSelectSeason: (season: Season) => void;
}

export default function SeasonTab({
  selectedSeason,
  onSelectSeason,
}: SeasonTabProps) {
  return (
    <View style={styles().container}>
      {seasons.map((season: Season) => (
        <TouchableOpacity
          onPress={() => onSelectSeason(season)}
          key={season}
          style={styles(selectedSeason, season).button}>
          <Text style={styles(selectedSeason, season).text} key={season}>
            {season}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = (selectedSeason?: Season, season?: Season) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 16,
      paddingHorizontal: 28,
      paddingTop: 20,
    },
    button: {
      flex: 1,
      paddingVertical: 8,
      borderWidth: 1,
      borderColor: season === selectedSeason ? colors.black : colors.grey300,
      borderRadius: 16,
      backgroundColor: season === selectedSeason ? colors.black : colors.white,
    },
    text: {
      textAlign: 'center',
      color: season === selectedSeason ? colors.white : colors.grey300,
    },
  });
