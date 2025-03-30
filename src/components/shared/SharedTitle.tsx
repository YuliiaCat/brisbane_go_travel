import React from 'react';
import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import { fonts } from '../../constants/fonts';

interface ITitle {
  title: string;
  style?: StyleProp<TextStyle>;
}

const SharedTitle: React.FC<ITitle> = ({ title, style }) => {
  return (
    <Text style={[styles.title, style]}>{title}</Text>
  );
};

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontFamily: fonts.SfProBold,
    fontSize: 24,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
});

export default SharedTitle;
