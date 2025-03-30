import React from 'react';
import IIcon from '../../types/icon';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';

const TermsIcon: React.FC<IIcon> = () => {
  return (
    <Svg
      width={28}
      height={28}
      viewBox="0 0 28 28"
      fill="none"
    >
      <G clipPath="url(#clip0_1_617)">
        <Path
          d="M21.778 1.556H6.222A1.556 1.556 0 004.667 3.11V24.89a1.555 1.555 0 001.555 1.556h15.556a1.555 1.555 0 001.555-1.556V3.111a1.556 1.556 0 00-1.555-1.555zM10.11 20.222H8.556v-1.555h1.555v1.555zm0-3.11H8.556v-1.556h1.555v1.555zm0-3.112H8.556v-1.555h1.555V14zm0-3.111H8.556V9.333h1.555v1.556zm0-3.111H8.556V6.222h1.555v1.556zm9.334 12.444h-7.778v-1.555h7.778v1.555zm0-3.11h-7.778v-1.556h7.778v1.555zm0-3.112h-7.778v-1.555h7.778V14zm0-3.111h-7.778V9.333h7.778v1.556zm0-3.111h-7.778V6.222h7.778v1.556z"
          fill="#C5A54C"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_617">
          <Path fill="#fff" d="M0 0H28V28H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};


export default TermsIcon;
