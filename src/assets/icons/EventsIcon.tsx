import React from 'react';
import IIcon from '../../types/icon';
import Svg, { Path } from 'react-native-svg';

const EventsIcon: React.FC<IIcon> = ({ fill }) => {
  return (
    <Svg
      width={29}
      height={28}
      viewBox="0 0 29 28"
      fill="none"
    >
      <Path
        d="M8.417 16.333V14h11.666v2.333H8.417zm0 4.667v-2.333h8.166V21H8.417zm-2.334 4.667c-.641 0-1.19-.229-1.647-.685a2.251 2.251 0 01-.686-1.649V7c0-.642.229-1.19.686-1.647a2.252 2.252 0 011.647-.686H7.25V2.333h2.333v2.334h9.334V2.333h2.333v2.334h1.167c.641 0 1.19.228 1.648.686.457.457.686 1.006.685 1.647v16.333a2.25 2.25 0 01-.685 1.649 2.241 2.241 0 01-1.648.685H6.083zm0-2.334h16.334V11.667H6.083v11.666z"
        fill={fill}
      />
    </Svg>
  );
};


export default EventsIcon;
