import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScreenNames } from '../constants/screenNames';
import { RootStackNavigation } from './types';
import TabBarStack from './TabBarStack';

const Stack = createNativeStackNavigator<RootStackNavigation>();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ScreenNames.MAIN_TABS}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={ScreenNames.MAIN_TABS} component={TabBarStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
