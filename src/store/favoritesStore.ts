import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IPlace from '../types/place';
import IEvent from '../types/event';

type FavoritesStore = {
  favoritePlaces: IPlace[];
  favoriteEvents: IEvent[];

  addPlace: (place: IPlace) => void;
  removePlace: (id: number) => void;

  addEvent: (event: IEvent) => void;
  removeEvent: (id: number) => void;
};

export const useFavoritesStore = create<FavoritesStore>()(
  persist(
    (set) => ({
      favoritePlaces: [],
      favoriteEvents: [],

      addPlace: (place) =>
        set((state) => ({
          favoritePlaces: state.favoritePlaces.some((fav) => fav.id === place.id)
            ? state.favoritePlaces
            : [...state.favoritePlaces, place],
        })),

      removePlace: (id) =>
        set((state) => ({
          favoritePlaces: state.favoritePlaces.filter((fav) => fav.id !== id),
        })),

      addEvent: (event) =>
        set((state) => ({
          favoriteEvents: state.favoriteEvents.some((fav) => fav.id === event.id)
            ? state.favoriteEvents
            : [...state.favoriteEvents, event],
        })),

      removeEvent: (id) =>
        set((state) => ({
          favoriteEvents: state.favoriteEvents.filter((fav) => fav.id !== id),
        })),
    }),
    {
      name: 'favorites-store',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
