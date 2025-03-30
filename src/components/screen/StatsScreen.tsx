import { StyleSheet, View } from 'react-native';
import { TitleBlock } from '../shared';
import { colors } from '../../constants/colors';
import useGameStore from '../../store/gameStore';
import { useState } from 'react';
import SharedStatsCard from '../shared/SharedStatsCard';
import { formatPlayTime } from '../../utils/helper';

const StatsScreen = () => {
  const { totalScore, bestAttempt, totalPlayTime, mistakes, correctAnswers } = useGameStore();
  const [selectedCard, setSelectedCard] = useState('Total score');

  const handlePress = (text: string) => {
    setSelectedCard(text);
  };

  return (
    <View style={styles.container}>
      <TitleBlock title="Stats" />
      <View style={styles.content}>
        <SharedStatsCard
          number={totalScore}
          text="Total score"
          isSelected={selectedCard === 'Total score'}
          onPress={() => handlePress('Total score')}
          />
        <SharedStatsCard
          number={bestAttempt}
          text="Best attempt"
          isSelected={selectedCard === 'Best attempt'}
          onPress={() => handlePress('Best attempt')}
          />
        <SharedStatsCard
          number={formatPlayTime(totalPlayTime)}
          text="Total play time"
          isSelected={selectedCard === 'Total play time'}
          onPress={() => handlePress('Total play time')}
          />
        <SharedStatsCard
          number={mistakes}
          text="Mistakes"
          isSelected={selectedCard === 'Mistakes'}
          onPress={() => handlePress('Mistakes')}
          />
        <SharedStatsCard
          number={correctAnswers}
          text="Right answers"
          isSelected={selectedCard === 'Right answers'}
          onPress={() => handlePress('Right answers')}
          />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    gap: 24,
    paddingHorizontal: 35,
    paddingVertical: 20,
  },
});

export default StatsScreen;
