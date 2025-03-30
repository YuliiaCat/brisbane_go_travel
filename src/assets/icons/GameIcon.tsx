import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const GameIcon: React.FC<IIcon> = ({ stroke, fill }) => {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
    >
      <Path
        d="M26.417 16.333h-9.334v9.334h9.334v-9.334zm-18.084-14l5.25 9.334h-10.5l5.25-9.334zm13.417 9.334a4.667 4.667 0 100-9.334 4.667 4.667 0 000 9.334z"
        fill={fill}
        stroke={stroke}
        strokeWidth={2}
        strokeLinejoin="round"
      />
      <Path
        d="M3.083 16.333l9.334 9.334m0-9.334l-9.334 9.334"
        stroke={stroke}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export default GameIcon;
