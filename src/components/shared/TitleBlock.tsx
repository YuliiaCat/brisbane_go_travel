import { StyleSheet, View } from 'react-native';
import { SharedButton, SharedTitle } from '../shared';
import React from 'react';
import { ArrowIcon } from '../../assets/icons';
import { colors } from '../../constants/colors';
import { useNavigation } from '@react-navigation/native';

interface ITitleBlock {
  title: string;
  onPress?: () => void;
}

const TitleBlock: React.FC<ITitleBlock> = ({ title, onPress }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <SharedButton
        onPress={onPress ? onPress : () => navigation.goBack()}
      >
        <ArrowIcon />
      </SharedButton>
      <SharedTitle title={title} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: colors.white,
    gap: 16,
    padding: 16,
  },
});

export default TitleBlock;
