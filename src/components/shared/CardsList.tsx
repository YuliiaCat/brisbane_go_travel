import { FlatList, StyleSheet } from 'react-native';
import placeData from '../../assets/data/placeData';
import { SharedCard } from '.';
import React, { useRef } from 'react';
import settingsData from '../../assets/data/settingData';
import SettingsCard from '../SettingsCard';

interface ICardsList {
  isPlacesList?: boolean;
}

const CardsList: React.FC<ICardsList> = ({ isPlacesList }) => {
  const flatListRef = useRef<FlatList>(null);

  return (
    <FlatList
      ref={flatListRef}
      data={isPlacesList ? placeData : settingsData}
      scrollEnabled
      keyExtractor={(item) => item.id ? item.id?.toString() : Math.random().toString()}
      renderItem={({ item }) =>
        isPlacesList ? (
          <SharedCard item={item} />
        ) : (
          <SettingsCard item={item} />
        )
      }
      contentContainerStyle={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 12,
    paddingBottom: 90,
  },
});

export default CardsList;
