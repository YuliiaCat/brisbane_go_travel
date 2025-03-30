import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { EventInfoRouteProp } from '../../navigation/types';
import React from 'react';
import { colors } from '../../constants/colors';
import { Dot, SharedButton, SharedText, SharedTitle, TitleBlock } from '../shared';
import { HeartIcon } from '../../assets/icons';
import { useFavoritesStore } from '../../store/favoritesStore';

interface IEventInfoScreen {
  route: EventInfoRouteProp;
}

const EventInfoScreen: React.FC<IEventInfoScreen> = ({ route }) => {
  const { id, title, image, date, time, description } = route.params;
  const { addEvent, removeEvent, favoriteEvents } = useFavoritesStore();
  const isFavorite = favoriteEvents.some((event) => event.id === id);

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      removeEvent(id);
    } else {
      addEvent({ id, title, image, date, time, description });
    }
  };

  return (
    <ScrollView style={styles.container}>
      <TitleBlock title="Event" />
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
        <View style={styles.date}>
          <SharedText text={date} style={styles.dateText} />
          <Dot />
          <SharedText text={time} style={styles.dateText} />
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
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    gap: 5,
  },
  dateText: {
    color: colors.grey,
  },
  img: {
    width: '100%',
    height: 364,
    marginBottom: 16,
  },
  content: {
    paddingHorizontal: 16,
  },
  nameBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    textAlign: 'left',
    flexShrink: 1,
  },
});

export default EventInfoScreen;
