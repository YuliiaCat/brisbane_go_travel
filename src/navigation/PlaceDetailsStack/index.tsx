import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PlaceDetailsStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import PlacesScreen from '../../components/screen/PlacesScreen';
import PlaceInfoScreen from '../../components/screen/PlaceInfoScreen';
import MapScreen from '../../components/screen/MapScreen';

const Stack = createNativeStackNavigator<PlaceDetailsStackType>();

const PlaceDetailsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.PLACES_SCREEN}
    >
      <Stack.Screen name={ScreenNames.PLACES_SCREEN} component={PlacesScreen} />
      <Stack.Screen name={ScreenNames.MAP_SCREEN} component={MapScreen} />
      <Stack.Screen name={ScreenNames.PLACE_INFO_SCREEN} component={PlaceInfoScreen} />
    </Stack.Navigator>
  );
};

export default PlaceDetailsStack;
