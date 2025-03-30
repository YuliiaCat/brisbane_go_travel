import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GameStackType } from '../types';
import { ScreenNames } from '../../constants/screenNames';
import GameScoreScreen from '../../components/screen/GameScoreScreen';
import GameScreen from '../../components/screen/GameScreen';
import GamePlayScreen from '../../components/screen/GamePlayScreen';

const Stack = createNativeStackNavigator<GameStackType>();

const GameStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.GAME_SCREEN}
    >
      <Stack.Screen name={ScreenNames.GAME_SCREEN} component={GameScreen} />
      <Stack.Screen name={ScreenNames.GAME_SCORE_SCREEN} component={GameScoreScreen} />
      <Stack.Screen name={ScreenNames.GAME_PLAY_SCREEN} component={GamePlayScreen} />
    </Stack.Navigator>
  );
};

export default GameStack;
