import React, { useEffect, useRef, useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import SharedGameLayout from '../shared/SharedGameLayout';
import { SharedButton, SharedText } from '../shared';
import { ArrowIcon } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../../navigation/types';
import GameTextBox from '../shared/GameTextBox';
import { fonts } from '../../constants/fonts';
import SharedInput from '../shared/SharedInput';
import { formatTime, validateCity } from '../../utils/helper';
import useGameStore from '../../store/gameStore';

const GamePlayScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();
  const [value, setValue] = useState('');
  const [currentLetter, setCurrentLetter] = useState('A');
  const totalTime = 600;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const { score, bestAttempt, updateScore, addMistake, resetGame } = useGameStore();
  const isDisabled = value.length === 0;
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasResetRef = useRef(false);

  useEffect(() => {
    if (timeLeft === 0 && !hasResetRef.current) {
    hasResetRef.current = true;

    navigation.navigate('GAME_SCORE_SCREEN', {
      isGameOver: score <= bestAttempt,
      score,
    });

    setTimeout(() => {
      resetGame(score, totalTime);
    }, 100);
  }

    timerRef.current = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timerRef.current!);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timerRef.current!);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const handleInputChange = (text: string) => {
    setValue(text);
  };

  const handleNext = () => {
    if (value.length > 0) {
      const isValid = validateCity(value);
      if (!isValid) {
        Alert.alert('Invalid City', "This city doesn't exist. Try again.");
        addMistake();
        return;
      }

      updateScore();

      const lastLetter = value[value.length - 1].toUpperCase();
      setCurrentLetter(lastLetter);
      setValue('');
    }
  };

  const handleGoBack = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    navigation.goBack();
  };

  return (
    <SharedGameLayout
      btnText="Next"
      onPress={handleNext}
      isDisabled={isDisabled}
      score={score}
      bestAttempt={bestAttempt}
    >
      <View style={styles.header}>
        <SharedButton onPress={handleGoBack}>
          <ArrowIcon />
        </SharedButton>
        <SharedText text={formatTime(timeLeft)} fs20 style={styles.timer}/>
        <SharedText text={score.toString()} fs20 style={styles.timer} />
      </View>
      <View style={styles.gameBox}>
        <GameTextBox
          text={currentLetter}
          styleBox={styles.letter}
          styleText={styles.letterText}
        />
        <View style={styles.questionBlock}>
          <SharedText fs20 text="Name of city starts with" style={styles.question} />
          <SharedText text={currentLetter} style={styles.currentLetter} />
        </View>
        <SharedInput
          placeholder="Put name here"
          value={value}
          style={styles.input}
          onChange={handleInputChange}
          isGame
        />
      </View>
    </SharedGameLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  timer: {
    color: colors.black,
  },
  gameBox: {
    gap: 37,
  },
  letter: {
    alignSelf: 'center',
    marginTop: 77,
  },
  letterText: {
    fontFamily: fonts.SfProBold,
    fontSize: 52,
  },
  input: {
    backgroundColor: colors.boxColor,
    color: colors.white,
  },
  questionBlock: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 24,
    backgroundColor: colors.boxColor,
    alignItems: 'center',
    gap: 6,
  },
  question: {
    fontSize: 18,
  },
  currentLetter: {
    fontFamily: fonts.SfProBold,
    fontSize: 18,
    textDecorationLine: 'underline',
    textDecorationColor: colors.white,
    color: colors.white,
  },
});

export default GamePlayScreen;
