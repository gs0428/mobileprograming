import {StyleSheet, View} from 'react-native';

interface ViewContainerProps {
  children: React.ReactNode;
}

export default function ViewContainer({children}: ViewContainerProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 28,
  },
});
