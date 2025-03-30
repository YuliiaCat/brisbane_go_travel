import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const TimeIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    >
      <Path
        d="M9 3V1h6v2H9zm2 11h2V8h-2v6zm1 8a8.654 8.654 0 01-3.488-.712A9.165 9.165 0 015.65 19.35a9.223 9.223 0 01-1.937-2.863A8.637 8.637 0 013 13c0-1.233.238-2.396.713-3.488A9.195 9.195 0 015.65 6.65a9.192 9.192 0 012.863-1.937A8.646 8.646 0 0112 4a8.92 8.92 0 012.975.5c.95.333 1.842.817 2.675 1.45l1.4-1.4 1.4 1.4-1.4 1.4a9.723 9.723 0 011.45 2.675c.333.95.5 1.942.5 2.975a8.645 8.645 0 01-.713 3.488 9.194 9.194 0 01-1.937 2.862 9.205 9.205 0 01-2.863 1.938A8.613 8.613 0 0112 22z"
        fill="#C5A54C"
      />
    </Svg>
  );
};


export default TimeIcon;
