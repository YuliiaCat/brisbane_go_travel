import { StyleSheet, View} from 'react-native';
import { SharedLayout } from '../shared';
import SharedGameLayout from '../shared/SharedGameLayout';
import useGameStore from '../../store/gameStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../../navigation/types';
import GameTextBox from '../shared/GameTextBox';

const GameScreen = () => {
  const { totalScore, bestAttempt} = useGameStore();
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();

  const handlePlayPress = () => navigation.navigate('GAME_PLAY_SCREEN');

  return (
    <SharedLayout title="Cities game">
      <SharedGameLayout
        btnText="Play"
        isInitialScreen
        onPress={handlePlayPress}
      >
        <View style={styles.scoreList}>
          <GameTextBox
            score={totalScore.toString()}
            text="Total Score"
            isScoreTable
          />
          <GameTextBox
            score={bestAttempt.toString()}
            text="Best attempt"
            isScoreTable
          />
        </View>
      </SharedGameLayout>
    </SharedLayout>
  );
};

const styles = StyleSheet.create({
  scoreList: {
    gap: 37,
  },
});

export default GameScreen;
