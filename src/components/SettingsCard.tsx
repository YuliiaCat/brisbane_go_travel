import { StyleSheet, TouchableOpacity } from 'react-native';
import ISettings from '../types/settings';
import React from 'react';
import { SettingsStackType } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../constants/colors';
import { SharedText } from './shared';

interface ISettingsCard {
  item: ISettings;
}

const SettingsCard: React.FC<ISettingsCard> = ({ item }) => {
  const { title, link, icon } = item;
  const navigation = useNavigation<NativeStackNavigationProp<SettingsStackType>>();

  return (
    <TouchableOpacity
      onPress={() => {
        if (link) {
          navigation.navigate(link as keyof SettingsStackType);
        }
      }}
      style={styles.container}
    >
      {icon && (() => {
          const IconComponent = icon;
          return <IconComponent />;
        })()}
      <SharedText settings text={title} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 18,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default SettingsCard;
