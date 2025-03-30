import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import SharedText from './SharedText';
import React from 'react';
import { colors } from '../../constants/colors';

interface IGameTextBox {
  score?: string;
  text: string;
  styleBox?: StyleProp<ViewStyle>;
  styleText?: StyleProp<TextStyle>;
  isScoreTable?: boolean;
}

const GameTextBox: React.FC<IGameTextBox> = ({ score, text, styleBox, styleText, isScoreTable }) => {

  return (
    <View style={[styles.box, styleBox]}>
      {isScoreTable && <SharedText settings text={score} style={styles.number} /> }
      <SharedText fs20 text={text} style={styleText} />
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    padding: 24,
    backgroundColor: colors.boxColor,
    alignItems: 'center',
    gap: 12,
  },
  number: {
    fontSize: 32,
    color: colors.white,
  },
});

export default GameTextBox;
