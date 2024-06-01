import {StyleSheet, Text, View} from 'react-native';
import {colors} from '@colors';

interface HeaderProps {
  title: string;
}

export default function Header({title}: HeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: colors.grey200,
    paddingHorizontal: 32,
    paddingVertical: 20,
  },
  title: {
    fontSize: 16,
    fontWeight: 'semibold',
    color: colors.black,
  },
});
