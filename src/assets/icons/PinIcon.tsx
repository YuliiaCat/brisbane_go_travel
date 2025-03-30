import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const PinIcon: React.FC<IIcon> = ({ fill }) => {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
    >
      <Path
        d="M14.75 2.333c-4.9 0-9.333 3.757-9.333 9.567 0 3.71 2.858 8.073 8.563 13.102a1.187 1.187 0 001.552 0c5.693-5.029 8.551-9.392 8.551-13.102 0-5.81-4.433-9.567-9.333-9.567zm0 11.667a2.34 2.34 0 01-2.333-2.333 2.34 2.34 0 012.333-2.334 2.34 2.34 0 012.333 2.334A2.34 2.34 0 0114.75 14z"
        fill={fill}
      />
    </Svg>
  );
};


export default PinIcon;
