import { StyleSheet, TouchableOpacity } from 'react-native';
import SharedText from './SharedText';
import React from 'react';
import { colors } from '../../constants/colors';

interface ISharedStatsCard {
  number: number | string;
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const SharedStatsCard: React.FC<ISharedStatsCard> = ({ number, text, isSelected, onPress }) => {

  return (
    <TouchableOpacity onPress={onPress} style={!isSelected ? styles.container : styles.containerSelected}>
      <SharedText text={number.toString()} fs32 style={isSelected ? styles.selectedText : styles.text} />
      <SharedText text={text} fs16 style={isSelected ? styles.selectedText : styles.text} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    backgroundColor: colors.lightF,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  containerSelected: {
    gap: 12,
    backgroundColor: colors.gold,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
  },
  selectedText: {
    color: colors.white,
  },
  text: {
    color: colors.black,
  },
});

export default SharedStatsCard;
