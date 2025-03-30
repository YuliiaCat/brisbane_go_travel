import { StyleSheet, View } from 'react-native';
import { SharedLayout } from '../shared';
import EventsList from '../EventsList';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventsStackType } from '../../navigation/types';


const EventsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<EventsStackType>>();

  return (
    <SharedLayout
      title="Brisbane events"
      isBtn
      btnText="My events"
      onPress={() => navigation.navigate('MY_EVENTS_SCREEN')}
    >
      <View style={styles.container}>
        <EventsList />
      </View>
    </SharedLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EventsScreen;
