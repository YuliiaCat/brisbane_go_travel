import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackNavigation={
  MAIN_TABS: undefined,
};

export type MainTabsStackType = {
  PLACE_DETAILS_STACK: undefined,
  EVENTS_STACK: undefined,
  GAME_STACK: undefined,
  SETTINGS_STACK: undefined,
};

export type PlaceDetailsStackType = {
  PLACES_SCREEN: undefined,
  MAP_SCREEN: undefined,
  PLACE_INFO_SCREEN: {
    id: number,
    title: string,
    image: any,
    description: string,
  },
};

export type EventsStackType = {
  EVENTS_SCREEN: undefined,
  MY_EVENTS_SCREEN: undefined,
  EVENT_INFO_SCREEN: {
    id: number,
    title: string,
    image: any,
    date: string,
    time: string,
    description: string,
  },
  ADD_EVENT_SCREEN: undefined,
  EDIT_EVENT_SCREEN: {
    id: string;
  },
}

export type SettingsStackType = {
  SETTINGS_SCREEN: undefined,
  FAVORITES_SCREEN: undefined,
  STATS_SCREEN: undefined,
  EVENT_INFO_SCREEN: {
    id: number,
    title: string,
    image: any,
    date: string,
    time: string,
    description: string,
  },
  PLACE_INFO_SCREEN: {
    id: number,
    title: string,
    image: any,
    description: string,
  },
}

export type GameStackType = {
  GAME_SCREEN: undefined,
  GAME_SCORE_SCREEN: {
    isGameOver?: boolean,
    score: number,
  },
  GAME_PLAY_SCREEN: undefined,
}

export type PlaceInfoRouteProp = RouteProp<PlaceDetailsStackType, 'PLACE_INFO_SCREEN'>;

export type EventInfoRouteProp = RouteProp<EventsStackType, 'EVENT_INFO_SCREEN'>;

export type GameRouteProp = RouteProp<GameStackType, 'GAME_SCORE_SCREEN'>;

export type NavigationProp = NativeStackNavigationProp<RootStackNavigation>;


