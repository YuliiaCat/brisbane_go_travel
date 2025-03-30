import { Image, StyleSheet, View } from 'react-native';
import IEvent from '../types/event';
import React from 'react';
import { Dot, SharedButton, SharedText } from './shared';
import { ChevronIcon } from '../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { EventsStackType } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ScreenNames } from '../constants/screenNames';

interface IEventCard {
  item: IEvent;
  isFavorites?: boolean;
}

const EventCard: React.FC<IEventCard> = ({ item, isFavorites }) => {
  const { id, image, title, date, time, description } = item;
  const navigation = useNavigation<NativeStackNavigationProp<EventsStackType>>();

  const onPress = () => {
      navigation.navigate(ScreenNames.EVENT_INFO_SCREEN, {
        id,
        title,
        image,
        date,
        time,
        description,
      });
    };

  return (
    <View style={isFavorites ? styles.favoritesContainer : styles.container}>
      <Image
        source={typeof image === 'string' ? { uri: image } : image}
        style={styles.img}
      />

      <View style={styles.block}>
        <View style={styles.infoContainer}>
          <SharedText eventName text={title ?? ''} />
            <View style={styles.dateBox}>
              <SharedText date text={date} />
              <Dot />
              <SharedText date text={time} />
            </View>
        </View>
        <SharedButton
          onPress={onPress}
        >
            <ChevronIcon />
          </SharedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 350,
    gap: 7,
  },
  favoritesContainer: {
    width: '100%',
    gap: 7,
  },
  img: {
    width: '100%',
    height: 179,
    borderRadius: 8,
  },
  block: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  infoContainer: {
    gap: 4,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default EventCard;
