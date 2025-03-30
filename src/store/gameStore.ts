import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import IGame from '../types/game';

interface GameState extends IGame {
  updateScore: () => void;
  addMistake: () => void;
  resetGame: (finalScore?: number, timePlayed?: number) => void;
}

const useGameStore = create<GameState>()(
  persist(
    (set) => ({
      score: 0,
      totalScore: 0,
      bestAttempt: 0,
      totalPlayTime: 0,
      mistakes: 0,
      correctAnswers: 0,

      updateScore: () =>
        set((state) => ({
          score: state.score + 50,
          correctAnswers: state.correctAnswers + 1,
        })),

      addMistake: () =>
        set((state) => ({
          mistakes: state.mistakes + 1,
        })),

      resetGame: (finalScore = 0, timePlayed = 0) =>
        set((state) => ({
          totalScore: state.totalScore + finalScore,
          bestAttempt: Math.max(state.bestAttempt, finalScore),
          score: 0,
          totalPlayTime: state.totalPlayTime + timePlayed,
        })),
    }),
    {
      name: 'game-storage',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({
        totalScore: state.totalScore,
        bestAttempt: state.bestAttempt,
        totalPlayTime: state.totalPlayTime,
        mistakes: state.mistakes,
        correctAnswers: state.correctAnswers,
      }),
    }
  )
);

export default useGameStore;
