import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import React from 'react';
import SharedButton from './SharedButton';
import SharedText from './SharedText';
import { InsetCategories } from '../../types/inset';

interface ISharedInset {
  option1: InsetCategories;
  option2: InsetCategories;
  isSelected: string;
  setIsSelected: (value: InsetCategories) => void;
}

const SharedInset: React.FC<ISharedInset> = ({ option1, option2, isSelected, setIsSelected }) => {

  return (
    <View style={styles.btnContainer}>
        <View style={styles.btnBox}>
          <SharedButton
            onPress={() => setIsSelected(option1)}
            style={[styles.btn, isSelected === option1 && styles.selected]}
          >
            <SharedText
              fs13
              text={option1}
              style={isSelected === option1 ? styles.textSelected : undefined}
            />
          </SharedButton>
          <SharedButton
            onPress={() => setIsSelected(option2)}
            style={[styles.btn, isSelected === option2 && styles.selected]}
          >
            <SharedText
              fs13
              text={option2}
              style={isSelected === option2 ? styles.textSelected : undefined}
            />
          </SharedButton>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: colors.white,
    paddingHorizontal: 18,
    paddingBottom: 18,
  },
  btnBox: {
    flexDirection: 'row',
    backgroundColor: colors.btnBackground,
    padding: 2,
    borderRadius: 9,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  selected: {
    backgroundColor: colors.white,
    borderWidth: 0.5,
    borderColor: colors.btnBorderColor,
    borderRadius: 7,
    boxShadow: '0px 3px 1px 0px #0000000A, 0px 3px 8px 0px #0000001F',
  },
  textSelected: {
    fontWeight: 600,
  },
});

export default SharedInset;
