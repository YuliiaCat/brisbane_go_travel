import { Dimensions, StyleSheet, View } from 'react-native';
import { SharedButton, SharedCard, SharedLayout } from '../shared';
import MapView, { Marker } from 'react-native-maps';
import placeData from '../../assets/data/placeData';
import { ListIcon, PlacesIcon } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PlaceDetailsStackType } from '../../navigation/types';
import { useState } from 'react';
import IPlace from '../../types/place';

const MapScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<PlaceDetailsStackType>>();
  const [selectedPlace, setSelectedPlace] = useState<IPlace | null>(null);

  return (
    <SharedLayout
      title="Brisbane map"
    >
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -27.4705,
            longitude: 153.0260,
            latitudeDelta: 0.09,
            longitudeDelta: 0.04,
          }}
        >
          {placeData.map((place) => (
              <Marker
                key={place.id}
                coordinate={{
                  latitude: place.latitude!,
                  longitude: place.longitude!,
                }}
                onPress={() => setSelectedPlace(place)}
                calloutAnchor={{ x: 0.5, y: 0 }}
              >
                {selectedPlace?.id === place.id ? (
                  <PlacesIcon width={50} height={63} />
                ) : (
                  <PlacesIcon />
                )}
              </Marker>
          ))}
        </MapView>

        {selectedPlace && (
          <View style={styles.floatingCard}>
            <SharedCard item={selectedPlace} isWays />
          </View>
        )}

        <SharedButton
          onPress={() => navigation.navigate('PLACES_SCREEN')}
          style={styles.listIcon}
        >
          <ListIcon />
        </SharedButton>
      </View>
    </SharedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  listIcon: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    backgroundColor: colors.gold,
    width: 52,
    height: 52,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingCard: {
    position: 'absolute',
    top: 18,
    alignSelf: 'center',
    zIndex: 2,
    backgroundColor: colors.white,
    padding: 16,
    borderRadius: 16,
  },
});

export default MapScreen;
