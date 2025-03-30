import { Image, StyleSheet, View } from 'react-native';
import IUserEvent from '../types/userEvent';
import { Dot, SharedButton, SharedText } from './shared';
import PenIcon from '../assets/icons/PenIcon';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventsStackType } from '../navigation/types';

interface IUserEventCard {
  item: IUserEvent;
}

const UserEventCard: React.FC<IUserEventCard> = ({ item }) => {
  const { id, name, date, time } = item;
  const navigation = useNavigation<NativeStackNavigationProp<EventsStackType>>();

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/my_events/mockup.jpg')}
        style={styles.img}
      />
      <View style={styles.content}>
        <View style={styles.block}>
          <SharedText text={name} subTitle />
          <View style={styles.dateBox}>
            <SharedText date text={date} />
            <Dot />
            <SharedText date text={time} />
          </View>
        </View>
        <SharedButton
          onPress={() => navigation.navigate('EDIT_EVENT_SCREEN', { id })}
        >
          <PenIcon />
        </SharedButton>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
    gap: 7,
  },
  img: {
    width: '100%',
    height: 179,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  block: {
    gap: 4,
  },
  dateBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});

export default UserEventCard;
