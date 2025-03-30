import { StyleSheet, View } from 'react-native';
import { colors } from '../../constants/colors';
import { CardsList, SharedButton, SharedLayout } from '../shared';
import { MapIcon } from '../../assets/icons';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../constants/screenNames';
import { PlaceDetailsStackType } from '../../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SharedInset from '../shared/SharedInset';
import { useState } from 'react';
import { InsetCategories } from '../../types/inset';
import PlacesList from '../PlacesList';

const PlacesScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<PlaceDetailsStackType>>();
  const [ isSelected, setIsSelected ] = useState<InsetCategories>('Sights');

  return (
    <SharedLayout
      title="Brisbane places"
    >
      <SharedInset
        option1="Sights"
        option2="Ways"
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />

      <View style={isSelected === 'Sights' ? styles.content : styles.contentWays}>
        {isSelected === 'Sights' ? (
          <CardsList isPlacesList />
        ) : (
          <PlacesList />
        )}
      </View>

      <SharedButton
        onPress={() => navigation.navigate(ScreenNames.MAP_SCREEN)}
        style={styles.mapBtn}
      >
        <MapIcon />
      </SharedButton>
    </SharedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lightF,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 20,
  },
  contentWays: {
    paddingVertical: 24,
    paddingHorizontal: 12,
  },
  mapBtn: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    backgroundColor: colors.gold,
    width: 52,
    height: 52,
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default PlacesScreen;
