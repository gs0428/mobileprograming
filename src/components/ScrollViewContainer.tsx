import {ScrollView, StyleSheet} from 'react-native';

interface ScrollViewContainerProps {
  children: React.ReactNode;
}

export default function ScrollViewContainer({
  children,
}: ScrollViewContainerProps) {
  return <ScrollView style={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
