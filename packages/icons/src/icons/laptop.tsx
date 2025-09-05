import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { G, Path, Defs } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <G clipPath="url(#a)">
        <Path fill="currentColor" d="M0 20v-2h2V3h20v15h2v2zm10-2h4v-1h-4z" />
      </G>
      <Defs>
        <clipPath>
          <Path fill="currentColor" d="M0 0h24v24H0z" />
        </clipPath>
      </Defs>
    </SvgThemed>
  );
};

export const Laptop = memo(Icon);
