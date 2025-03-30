import { ImageBackground, ScrollView, StyleSheet, View } from 'react-native';
import { SharedButton, SharedText, TitleBlock } from '../shared';
import { colors } from '../../constants/colors';
import { buttonStyle } from '../../utils/styles';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { EventsStackType } from '../../navigation/types';
import { useNavigation } from '@react-navigation/native';
import { useEventsStore } from '../../store/eventStore';
import UserEventCard from '../UserEventCard';

const MyEventsScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<EventsStackType>>();
  const events = useEventsStore(state => state.events);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <TitleBlock
        title="My events"
      />
      <View style={styles.container}>
        {events.length ? (
          <View>
            {events.map(event => (
              <UserEventCard item={event} key={event.id} />
            ))}
          </View>
        ) : (
          <View style={styles.content}>
            <ImageBackground
              source={require('../../assets/images/my_events/no_events.png')}
              style={styles.bgcImage}
            />
            <SharedText text="No events yet, create something" fs18 />
          </View>
          )}
        <SharedButton
          onPress={() => navigation.navigate('ADD_EVENT_SCREEN')}
          style={buttonStyle}>
          <SharedText text="Add an event" subTitle style={styles.btnText} />
        </SharedButton>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingBottom: 54,
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  btnText: {
    color: colors.white,
    letterSpacing: 0,
    textAlign: 'center',
  },
  content: {
    gap: 50,
    alignItems: 'center',
    marginTop: '60%',
  },
  bgcImage: {
    width: 93.5,
    height: 93.75,
  },
});

export default MyEventsScreen;
