import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';

const Dot = () => <View style={styles.dot} />;

const styles = StyleSheet.create({
  dot: {
    width: 2.67,
    height: 2.67,
    borderRadius: '50%',
    backgroundColor: colors.grey,
  },
});

export default Dot;
