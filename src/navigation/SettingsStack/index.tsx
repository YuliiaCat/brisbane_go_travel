import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import SettingsScreen from '../../components/screen/SettingsScreen';
import FavoritesScreen from '../../components/screen/FavoritesScreen';
import StatsScreen from '../../components/screen/StatsScreen';
import EventInfoScreen from '../../components/screen/EventInfoScreen';
import PlaceInfoScreen from '../../components/screen/PlaceInfoScreen';

const Stack = createNativeStackNavigator<SettingsStackType>();

const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.SETTINGS_SCREEN}
    >
      <Stack.Screen name={ScreenNames.SETTINGS_SCREEN} component={SettingsScreen} />
      <Stack.Screen name={ScreenNames.FAVORITES_SCREEN} component={FavoritesScreen} />
      <Stack.Screen name={ScreenNames.STATS_SCREEN} component={StatsScreen} />
      <Stack.Screen name={ScreenNames.EVENT_INFO_SCREEN} component={EventInfoScreen} />
      <Stack.Screen name={ScreenNames.PLACE_INFO_SCREEN} component={PlaceInfoScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
