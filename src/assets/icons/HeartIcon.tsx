import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const HeartIcon: React.FC<IIcon> = ({ fill }) => {
  return (
    <Svg
      width={28}
      height={29}
      viewBox="0 0 28 29"
      fill="none"
    >
      <Path
        d="M4.768 8.057a5.326 5.326 0 017.532 0l1.7 1.7 1.7-1.7a5.326 5.326 0 017.532 7.533l-1.7 1.698.015.015-7.532 7.534-.015-.015-.015.015-7.532-7.534.015-.015-1.7-1.698a5.327 5.327 0 010-7.533z"
        fill={fill}
        stroke="#C5A54C"
        strokeWidth={1.5}
        strokeLinejoin="round"
      />
    </Svg>
  );
};


export default HeartIcon;
