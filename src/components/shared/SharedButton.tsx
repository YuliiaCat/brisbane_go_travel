import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

interface IButton {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  onPress?: () => void;
  disabled?: boolean;
}

const SharedButton: React.FC<IButton> = ({ style, children, onPress, disabled }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={style}
      disabled={disabled}
      >
      {children}
    </TouchableOpacity>
  );
};

export default SharedButton;
