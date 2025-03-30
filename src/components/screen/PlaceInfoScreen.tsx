import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { SharedButton, SharedText, SharedTitle, TitleBlock } from '../shared';
import { colors } from '../../constants/colors';
import { PlaceInfoRouteProp } from '../../navigation/types';
import React from 'react';
import { HeartIcon } from '../../assets/icons';
import { useFavoritesStore } from '../../store/favoritesStore';

interface IPlaceInfoScreen {
  route: PlaceInfoRouteProp;
}

const PlaceInfoScreen: React.FC<IPlaceInfoScreen> = ({ route }) => {
  const { id, title, image, description } = route.params;
  const { addPlace, removePlace, favoritePlaces } = useFavoritesStore();
  const isFavorite = favoritePlaces.some((place) => place.id === id);

    const handleFavoriteToggle = () => {
      if (isFavorite) {
        removePlace(id);
      } else {
        addPlace({ id, title, image, description });
      }
    };

  return (
    <ScrollView style={styles.container}>
      <TitleBlock title="Place" />
      <Image
        source={image}
        style={styles.img}
      />
      <View style={styles.content}>
        <View style={styles.nameBlock}>
          <SharedTitle title={title} style={styles.title} />
          <SharedButton onPress={handleFavoriteToggle}>
            <HeartIcon fill={isFavorite ? colors.gold : colors.white} />
          </SharedButton>
        </View>
        <SharedText
          fs16
          text={description}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  img: {
    width: '100%',
    height: 364,
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
    gap: 20,
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'left',
    flexShrink: 1,
  },
});

export default PlaceInfoScreen;
