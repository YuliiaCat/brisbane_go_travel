import { ImageBackground, StyleSheet, View } from 'react-native';
import { LinearGradientComponent, SharedButton, SharedText } from '../shared';
import { buttonDisabledGame, buttonStyle, buttonWhite } from '../../utils/styles';
import { colors } from '../../constants/colors';
import React, { ReactNode } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { GameStackType } from '../../navigation/types';
import { fonts } from '../../constants/fonts';
import useGameStore from '../../store/gameStore';

interface ISharedGameLayout {
  children: ReactNode;
  btnText: string;
  onPress: () => void;
  isInitialScreen?: boolean;
  isDisabled?: boolean;
  score?: number;
  bestAttempt?: number;
}

const SharedGameLayout: React.FC<ISharedGameLayout> = ({
  children,
  btnText,
  onPress,
  isInitialScreen,
  isDisabled,
  score,
  bestAttempt,
}) => {
  const navigation = useNavigation<NativeStackNavigationProp<GameStackType>>();
  const { resetGame } = useGameStore();

  const handlePressDontRemember = () => {
    if (score !== undefined && bestAttempt !== undefined) {
      resetGame(score);
      navigation.navigate('GAME_SCORE_SCREEN', {
        isGameOver: score <= bestAttempt,
        score,
      });
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/game/background.png')}
        style={styles.img}
      />
      <LinearGradientComponent style={styles.gradient} />

      {children}
      {!isInitialScreen ? (
        <View style={styles.btnBox}>
          <SharedButton
            style={[styles.btn, !isDisabled ? buttonStyle : buttonDisabledGame]}
            onPress={onPress}
          >
            <SharedText text={btnText} subTitle style={!isDisabled ? styles.btnText : styles.disabledText} />
          </SharedButton>
          <SharedButton
            style={[styles.btn, buttonWhite]}
            onPress={handlePressDontRemember}
          >
            <SharedText text="I don't remember" subTitle />
          </SharedButton>
        </View>
      ) : (
        <SharedButton
          style={[styles.btn, buttonStyle]}
          onPress={onPress}
        >
          <SharedText text={btnText} subTitle style={styles.btnText} />
        </SharedButton>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 72,
    paddingBottom: 34,
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  gradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  btnBox: {
    gap: 20,
  },
  btn: {
    alignItems: 'center',
  },
  btnText: {
    color: colors.white,
  },
  disabledText: {
    color: colors.grey,
    fontFamily: fonts.SfProRegular,
  },
});
export default SharedGameLayout;
