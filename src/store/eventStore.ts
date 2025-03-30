import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persist, createJSONStorage } from 'zustand/middleware';
import IUserEvent from '../types/userEvent';

type EventsStore = {
  events: IUserEvent[];
  addEvent: (event: IUserEvent) => void;
  updateEvent: (updated: IUserEvent) => void;
  setEvents: (list: IUserEvent[]) => void;
  getEventById: (id: string) => IUserEvent | undefined;
};

export const useEventsStore = create<EventsStore>()(
  persist(
    (set, get) => ({
      events: [],
      addEvent: (event) =>
        set((state) => ({
          events: [...state.events, event],
        })),
      updateEvent: (updated) =>
        set((state) => ({
          events: state.events.map((e) =>
            e.id === updated.id ? updated : e
          ),
        })),
      setEvents: (list) => set({ events: list }),
      getEventById: (id) => get().events.find((e) => e.id === id),
    }),
    {
      name: 'events-storage',
      storage:createJSONStorage(() => AsyncStorage),
    }
  )
);



