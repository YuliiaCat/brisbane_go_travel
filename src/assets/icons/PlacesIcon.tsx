import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const PlacesIcon: React.FC<IIcon> = ({ width = 24, height = 31 }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 31"
      fill="none"
    >
      <Path
        transform="translate(4.5 4.65)"
        fill="#fff"
        d="M0 0H13.5V13.95H0z"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.343 29.937c.593 0 11.185-11.694 11.185-18.077C22.528 5.477 17.52.302 11.343.302 5.166.302.16 5.477.16 11.86S10.75 29.937 11.343 29.937zm0-12.296c3.132 0 5.671-2.624 5.671-5.86s-2.539-5.86-5.67-5.86c-3.132 0-5.671 2.624-5.671 5.86s2.539 5.86 5.67 5.86z"
        fill="#C5A54C"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.159 11.86c0 6.383 10.592 18.077 11.184 18.077V17.641c-3.131 0-5.67-2.624-5.67-5.86s2.539-5.86 5.67-5.86V.302C5.166.302.16 5.477.16 11.86z"
        fill="#C5A54C"
      />
    </Svg>
  );
};


export default PlacesIcon;
