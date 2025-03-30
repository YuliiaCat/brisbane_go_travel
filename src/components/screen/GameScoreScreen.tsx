import { useRoute } from '@react-navigation/native';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { GameRouteProp } from '../../navigation/types';
import { SharedButton, SharedText } from '../shared';
import { ArrowIcon } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../../navigation/types';
import { buttonStyle, buttonWhite } from '../../utils/styles';

const GameScoreScreen = () => {
  const route = useRoute<GameRouteProp>();
  const { isGameOver, score } = route.params;
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();

  const imageSource = isGameOver
  ? require('../../assets/images/game/game_over.png')
  : require('../../assets/images/game/stars.png');

  return (
    <View style={styles.container}>
      <SharedButton
        onPress={() => navigation.navigate('GAME_SCREEN')}
      >
        <ArrowIcon />
       </SharedButton>
       <View style={styles.block}>
        <View style={styles.content}>
            <SharedText text={isGameOver ? 'Game over' : 'You win'} fs32 />
            <View style={styles.scoreBox}>
              <SharedText text={score.toString()} fs32 style={styles.score} />
              <SharedText text="You get" fs16 />
            </View>
            <ImageBackground
              source={imageSource}
              style={styles.img}
            />
        </View>
        <View style={styles.btnBlock}>
          <SharedButton
            onPress={() => navigation.navigate('GAME_PLAY_SCREEN')}
            style={buttonStyle}
          >
            <SharedText text="Try again" subTitle style={styles.btnText} />
          </SharedButton>
          <SharedButton
            onPress={() => navigation.navigate('GAME_SCREEN')}
            style={[styles.btnClose, buttonWhite]}
          >
            <SharedText text="Close" />
          </SharedButton>
        </View>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 16,
    paddingBottom: 54,
  },
  block: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    paddingTop: 32,
    paddingHorizontal: 19,
    alignItems: 'center',
    gap: 44,
  },
  btnBlock: {
    gap: 20,
  },
  scoreBox: {
    width: '100%',
    alignItems: 'center',
    padding: 16,
    gap: 12,
    backgroundColor: colors.lightF,
    borderRadius: 16,
  },
  score: {
    color: colors.black,
    letterSpacing: -1,
  },
  img: {
    width: 122,
    height: 122,
    marginTop: 50,
  },
  btnClose: {
    borderWidth: 1,
    borderColor: colors.black,
    alignItems: 'center',
  },
  btnText: {
    textAlign: 'center',
    color: colors.white,
  },
});

export default GameScoreScreen;
