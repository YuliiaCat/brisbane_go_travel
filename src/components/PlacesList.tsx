import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import { SharedCard, SharedText } from './shared';
import { PlaceCategories } from '../types/placeCategories';
import placeData from '../assets/data/placeData';

const PlacesList = () => {
  const category: PlaceCategories[] = ['Cultural River Walk', 'Nature and Wildlife Escape', 'Heritage and Adventure Trail'];

  const groupedPlaces = category.map((cat) => ({
    title: cat,
    data: placeData.filter(place => place.category === cat),
  }));

  return (
    <ScrollView contentContainerStyle={styles.list}>
      {groupedPlaces.map(group => (
        group.data.length > 0 && (
          <View key={group.title} style={styles.categorySection}>
            <SharedText text={group.title} settings />
            <FlatList
              horizontal
              scrollEnabled
              showsHorizontalScrollIndicator={false}
              data={group.data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <SharedCard item={item} isWays />
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
    gap: 24,
    paddingBottom: 96,
  },
  categorySection: {
    gap: 12,
  },
  itemsList: {
    gap: 12,
  },
});

export default PlacesList;
