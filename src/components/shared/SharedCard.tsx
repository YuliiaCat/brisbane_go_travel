import { Image, StyleSheet, View } from 'react-native';
import IPlace from '../../types/place';
import React from 'react';
import SharedText from './SharedText';
import { ChevronIcon } from '../../assets/icons';
import SharedButton from './SharedButton';
import { useNavigation } from '@react-navigation/native';
import { PlaceDetailsStackType } from '../../navigation/types';
import { ScreenNames } from '../../constants/screenNames';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

interface ISharedCard {
  item: IPlace;
  isWays?: boolean;
}

const SharedCard: React.FC<ISharedCard> = ({ item, isWays }) => {
  const { id, title, image, description } = item;
  const navigation = useNavigation<NativeStackNavigationProp<PlaceDetailsStackType>>();

  const onPress = () => {
    navigation.navigate(ScreenNames.PLACE_INFO_SCREEN, {
      id,
      title: title ?? '',
      image,
      description: description ?? '',
    });
  };

  return (
    <View style={!isWays ? styles.container : styles.containerWays}
      >
      <Image
        source={image}
        style={styles.img}
      />
      <View style={styles.box}>
        <SharedText
          subTitle text={title ?? ''}
          style={styles.subtitle}
          numberOfLines={1}
          ellipsizeMode="tail"
        />
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
    gap: 7,
  },
  containerWays: {
    width: 350,
    gap: 7,
  },
  mapContainer: {
    width: 350,
    gap: 7,
    alignSelf: 'center',
  },
  img: {
    width: '100%',
    height: 179,
    borderRadius: 8,
  },
  box: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subtitle: {
    flexShrink: 1,
  },
});

export default SharedCard;
