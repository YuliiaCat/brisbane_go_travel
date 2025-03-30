import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { colors } from '../../constants/colors';
import React from 'react';
import { fonts } from '../../constants/fonts';

interface IText {
  text?: string;
  fs13?: boolean;
  fs16?: boolean;
  fs20?: boolean;
  subTitle?: boolean;
  btnName?: boolean;
  fs18?: boolean;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
  ellipsizeMode?: 'tail' | 'head' | 'middle' | 'clip';
  eventName?: boolean;
  date?: boolean;
  label?: boolean;
  settings?: boolean;
  fs32?: boolean;
}

const SharedText: React.FC<IText> = ({
  text,
  fs13,
  fs16,
  fs20,
  subTitle,
  btnName,
  fs18,
  style,
  numberOfLines,
  ellipsizeMode,
  eventName,
  date,
  label,
  settings,
  fs32,
}) => {
  return (
    <Text
      style={[
        fs13 && styles.fs13,
        fs16 && styles.fs16,
        fs20 && styles.fs20,
        subTitle && styles.subTitle,
        btnName && styles.btnName,
        fs18 && styles.fs18,
        eventName && styles.eventName,
        date && styles.date,
        label && styles.label,
        settings && styles.settings,
        fs32 && styles.fs32,
        style,
      ]}
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
    >
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  fs13: {
    fontFamily: fonts.SfProRegular,
    fontSize: 13,
    lineHeight: 18,
    letterSpacing: -0.08,
    color: colors.black,
  },
  fs16: {
    fontFamily: fonts.SfProRegular,
    fontSize: 16,
    letterSpacing: 0.4,
  },
  btnName: {
    fontFamily: fonts.SfProRegular,
    fontSize: 16,
    color: colors.gold,
  },
  fs18: {
    fontFamily: fonts.SfProRegular,
    fontSize: 18,
  },
  subTitle: {
    fontFamily: fonts.SfProSemiBold,
    fontSize: 16,
    letterSpacing: -0.41,
  },
  eventName: {
    fontFamily: fonts.SfProMedium,
    fontSize: 16,
    letterSpacing: -0.41,
  },
  date: {
    color: colors.grey,
    fontFamily: fonts.SfProRegular,
    fontSize: 12,
    letterSpacing: -0.41,
  },
  label: {
    fontFamily: fonts.SfProRegular,
    fontSize: 16,
    lineHeight: 26,
    color: colors.black,
    letterSpacing: -0.5,
  },
  settings: {
    fontFamily: fonts.SfProBold,
    color: colors.black,
    fontSize: 16,
  },
  fs20: {
    fontFamily: fonts.SfProRegular,
    fontSize: 20,
    color: colors.white,
  },
  fs32: {
    fontFamily: fonts.SfProBold,
    fontSize: 32,
    color: colors.gold,
  },
});

export default SharedText;
