import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import { ReactNode } from 'react';
import Header from './Header';

interface ISharedLayout {
  children: ReactNode;
  title: string;
  isBtn?: boolean;
  btnText?: string;
  onPress?: () => void;
}

const SharedLayout: React.FC<ISharedLayout> = ({
  children,
  title,
  isBtn,
  btnText,
  onPress,
 }) => {
  return (
    <View style={styles.container}>
      <Header title={title} isBtn={isBtn} btnText={btnText} onPress={onPress} />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: colors.lightF,
  },
});

export default SharedLayout;
