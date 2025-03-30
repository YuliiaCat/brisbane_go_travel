import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SharedText } from './shared';
import eventData from '../assets/data/eventData';
import { EventCategories } from '../types/eventCategories';
import EventCard from './EventCard';

const EventsList = () => {
  const category: EventCategories[] = ['Festivals', 'Exhibitions', 'Concerts', 'Sport'];

  const groupedEvents = category.map((cat) => ({
    title: cat,
    data: eventData.filter(event => event.category === cat),
  }));

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {groupedEvents.map(group => (
        group.data.length > 0 && (
          <View key={group.title} style={styles.categorySection}>
            <SharedText text={group.title} style={styles.categoryTitle} settings />
            <FlatList
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              data={group.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <EventCard item={item} />
              )}
              contentContainerStyle={styles.itemsList}
            />
          </View>
        )
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  list: {
    gap: 32,
    paddingBottom: 50,
    paddingTop: 20,
  },
  categorySection: {
    gap: 12,
  },
  categoryTitle: {
    paddingLeft: 20,
  },
  itemsList: {
    gap: 12,
  },
});

export default EventsList;
