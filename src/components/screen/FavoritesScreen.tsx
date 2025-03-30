import { FlatList, StyleSheet, View } from 'react-native';
import { SharedCard, TitleBlock } from '../shared';
import SharedInset from '../shared/SharedInset';
import { useEffect, useState } from 'react';
import EventCard from '../EventCard';
import { InsetCategories } from '../../types/inset';
import { useFavoritesStore } from '../../store/favoritesStore';
import IPlace from '../../types/place';
import IEvent from '../../types/event';

const FavoritesScreen = () => {
  const [ isSelected, setIsSelected ] = useState<InsetCategories>('Places');
  const { favoritePlaces, favoriteEvents } = useFavoritesStore();
  const [data, setData] = useState<IPlace[] | IEvent[]>([]);

  useEffect(() => {
    setData(isSelected === 'Places' ? favoritePlaces : favoriteEvents);
  }, [isSelected, favoritePlaces, favoriteEvents]);

  return (
    <View style={styles.container}>
      <TitleBlock title="Favorites" />
      <SharedInset
        option1="Places"
        option2="Events"
        isSelected={isSelected}
        setIsSelected={setIsSelected}
       />

      <View style={styles.content}>
        <FlatList
          data={data}
          scrollEnabled
          keyExtractor={(item) => item.id ? item.id?.toString() : Math.random().toString()}
          renderItem={({ item }) =>
            isSelected === 'Places' ? (
              <SharedCard item={item as IPlace} />
            ) : (
              <EventCard item={item as IEvent} isFavorites />
            )
          }
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 20,
  },
  list: {
    gap: 24,
  },
});

export default FavoritesScreen;
