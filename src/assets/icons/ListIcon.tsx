import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const ListIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
    >
      <Path
        d="M26 4H6a2 2 0 00-2 2v20a2 2 0 002 2h20a2 2 0 002-2V6a2 2 0 00-2-2zm-2 19H8a1 1 0 010-2h16a1 1 0 010 2zm0-6H8a1 1 0 010-2h16a1 1 0 010 2zm0-6H8a1 1 0 010-2h16a1 1 0 110 2z"
        fill="#fff"
      />
    </Svg>
  );
};


export default ListIcon;
