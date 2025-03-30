import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const PenIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
    >
      <Path
        d="M3 21.5v-4.25L16.2 4.075c.2-.183.421-.325.663-.425.242-.1.496-.15.762-.15s.524.05.775.15c.25.1.467.25.65.45l1.375 1.4c.2.183.346.4.438.65a2.141 2.141 0 010 1.513 1.85 1.85 0 01-.438.662L7.25 21.5H3zM17.6 8.3L19 6.9l-1.4-1.4-1.4 1.4 1.4 1.4z"
        fill="#C5A54C"
      />
    </Svg>
  );
};


export default PenIcon;
