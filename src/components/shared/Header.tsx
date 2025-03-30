import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import SharedTitle from './SharedTitle';
import SharedButton from './SharedButton';
import SharedText from './SharedText';

interface IHeader {
  title: string;
  isBtn?: boolean;
  btnText?: string;
  onPress?: () => void;
}

const Header: React.FC<IHeader> = ({ title, isBtn, btnText, onPress }) => {
  return (
    <View style={styles.container}>
      {isBtn ? (
        <View style={styles.titleBox}>
          <SharedTitle title={title} />
          <SharedButton
            onPress={onPress}
          >
            <SharedText text={btnText ?? ''} btnName />
          </SharedButton>
        </View>
      ) : (
        <SharedTitle title={title} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 16,
  },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
});

export default Header;
