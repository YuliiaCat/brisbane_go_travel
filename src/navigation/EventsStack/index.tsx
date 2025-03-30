import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { EventsStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import EventsScreen from '../../components/screen/EventsScreen';
import EventInfoScreen from '../../components/screen/EventInfoScreen';
import MyEventsScreen from '../../components/screen/MyEventsScreen';
import AddEventScreen from '../../components/screen/AddEventScreen';
import EditEventScreen from '../../components/screen/EditEventScreen';

const Stack = createNativeStackNavigator<EventsStackType>();

const EventsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.EVENTS_SCREEN}
    >
      <Stack.Screen name={ScreenNames.EVENTS_SCREEN} component={EventsScreen} />
      <Stack.Screen name={ScreenNames.EVENT_INFO_SCREEN} component={EventInfoScreen} />
      <Stack.Screen name={ScreenNames.MY_EVENTS_SCREEN} component={MyEventsScreen} />
      <Stack.Screen name={ScreenNames.ADD_EVENT_SCREEN} component={AddEventScreen} />
      <Stack.Screen name={ScreenNames.EDIT_EVENT_SCREEN} component={EditEventScreen} />
    </Stack.Navigator>
  );
};

export default EventsStack;
