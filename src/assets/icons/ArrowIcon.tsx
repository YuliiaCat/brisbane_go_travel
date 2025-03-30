import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const ArrowIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
    >
      <Path
        d="M19.5 12.5h-15m0 0l5.625 6m-5.625-6l5.625-6"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export default ArrowIcon;
