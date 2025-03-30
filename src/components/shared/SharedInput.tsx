/* eslint-disable react-native/no-inline-styles */
import {StyleProp, StyleSheet, TextInput, View, ViewStyle } from 'react-native';
import SharedText from './SharedText';
import { colors } from '../../constants/colors';
import { useState } from 'react';
import SharedButton from './SharedButton';
import { CloseIcon, DateIcon, TimeIcon } from '../../assets/icons';

interface ISharedInput {
  label?: string;
  placeholder: string;
  value: string;
  style?: StyleProp<ViewStyle>;
  onChange?: (text: string) => void;
  editable?: boolean;
  isDate?: boolean;
  isTime?: boolean;
  onPress?: () => void;
  isGame?: boolean;
}

const SharedInput: React.FC<ISharedInput> = ({
  label,
  placeholder,
  value,
  style,
  onChange,
  editable,
  isDate,
  isTime,
  onPress,
  isGame,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.trim().length > 0;

  return (
    <View style={styles.container}>
      {label && <SharedText text={label} label />}
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.grey}
        value={value}
        onChangeText={onChange}
        onFocus={() => setIsFocused(true)}
        style={[
          styles.input,
          style,
          value && styles.hasValue,
          isFocused && styles.focused,
          (isDate || isTime) && { paddingLeft: 44 },
        ]}
        editable={editable}
        onPress={onPress}
      />
      {isDate && <View style={styles.dateIcon}><DateIcon /></View>}
      {isTime && <View style={styles.timeIcon}><TimeIcon /></View>}
      {hasValue && !isGame && (
        <SharedButton
          style={styles.clearBtn}
          onPress={() => onChange?.('')}
        >
          <CloseIcon />
        </SharedButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    position: 'relative',
    paddingVertical: 16.5,
    paddingHorizontal: 20,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  hasValue: {
    borderColor: colors.black,
  },
  focused: {
    borderColor: colors.gold,
  },
  clearBtn: {
    position: 'absolute',
    top: 47,
    right: 12,
  },
  dateIcon: {
    position: 'absolute',
    bottom: 14,
    left: 12,
  },
  timeIcon: {
    position: 'absolute',
    bottom: 14,
    left: 12,
  },
});

export default SharedInput;
