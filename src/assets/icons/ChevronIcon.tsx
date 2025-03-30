import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const ChevronIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={12}
      height={25}
      viewBox="0 0 12 25"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.157 13.211L4.5 18.868l-1.414-1.414 4.95-4.95-4.95-4.95L4.5 6.14l5.657 5.657a1 1 0 010 1.414z"
        fill="#C5A54C"
      />
    </Svg>
  );
};


export default ChevronIcon;
