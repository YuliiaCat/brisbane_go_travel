import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames } from '../../constants/screenNames';
import { colors } from '../../constants/colors';
import { MainTabsStackType } from '../types';
import { EventsIcon, GameIcon, PinIcon, SettingsIcon } from '../../assets/icons';
import { fonts } from '../../constants/fonts';
import PlaceDetailsStack from '../PlaceDetailsStack';
import { getFocusedRouteNameFromRoute, RouteProp } from '@react-navigation/native';
import { defaultTabBarStyle } from '../../utils/styles';
import EventsStack from '../EventsStack';
import SettingsStack from '../SettingsStack';
import GameStack from '../GameStack';

const Tab = createBottomTabNavigator<MainTabsStackType>();

const getTabBarIcon = (routeName: string) => {
  return ({ color }: { color: string }) => {
    switch(routeName) {
      case ScreenNames.PLACE_DETAILS_STACK:
        return <PinIcon fill={color} />;
      case ScreenNames.EVENTS_STACK:
        return <EventsIcon fill={color} />;
      case ScreenNames.GAME_STACK:
        return <GameIcon fill={color} stroke={color} />;
      case ScreenNames.SETTINGS_STACK:
        return <SettingsIcon fill={color} />;
      default:
      return null;
    }
  };
};

const getTabBarVisibilityOptions = (
  route: RouteProp<Record<string, object | undefined>, string>,
  hiddenScreens: string[],
  title: string
): BottomTabNavigationOptions => {
  const routeName = getFocusedRouteNameFromRoute(route);
  const shouldHideTabBar = hiddenScreens.includes(routeName ?? '');

  return {
    tabBarStyle: shouldHideTabBar
      ? { ...defaultTabBarStyle, display: 'none' }
      : defaultTabBarStyle,
    title,
  };
};

const TabBarStack = () => {
  return (
    <Tab.Navigator
      initialRouteName={ScreenNames.PLACE_DETAILS_STACK}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: defaultTabBarStyle,
        tabBarLabelStyle: {
          fontFamily: fonts.SfProMedium,
          fontSize: 10,
          lineHeight: 20,
        },
        tabBarActiveTintColor: colors.gold,
        tabBarInactiveTintColor: colors.grey,
        tabBarIcon: getTabBarIcon(route.name),
      })}
    >
      <Tab.Screen
        name={ScreenNames.PLACE_DETAILS_STACK}
        component={PlaceDetailsStack}
        options={({ route }) =>
          getTabBarVisibilityOptions(route, [ScreenNames.PLACE_INFO_SCREEN], 'Places')
        }
      />
      <Tab.Screen
        name={ScreenNames.EVENTS_STACK}
        component={EventsStack}
        options={({ route }) =>
          getTabBarVisibilityOptions(route, [ScreenNames.ADD_EVENT_SCREEN, ScreenNames.EVENT_INFO_SCREEN, ScreenNames.MY_EVENTS_SCREEN, ScreenNames.EDIT_EVENT_SCREEN], 'Events')
        }
      />
      <Tab.Screen
        name={ScreenNames.GAME_STACK}
        component={GameStack}
        options={({ route }) =>
          getTabBarVisibilityOptions(route, [ScreenNames.GAME_SCORE_SCREEN, ScreenNames.GAME_PLAY_SCREEN], 'Game')
        }
      />
      <Tab.Screen
        name={ScreenNames.SETTINGS_STACK}
        component={SettingsStack}
        options={({ route }) =>
          getTabBarVisibilityOptions(route, [ScreenNames.SETTINGS_STACK, ScreenNames.FAVORITES_SCREEN, ScreenNames.STATS_SCREEN], 'Settings')
        }
      />
    </Tab.Navigator>
  );
};

export default TabBarStack;
