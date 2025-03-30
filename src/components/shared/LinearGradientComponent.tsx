import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ILinearGradient{
  style?: StyleProp<ViewStyle>;
}

const LinearGradientComponent: React.FC<ILinearGradient> = ({ style }) => {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0.3)', 'rgba(0, 0, 0, 0.3)']}
      locations={[0, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      style={style}
    />
  );
};

export default LinearGradientComponent;
