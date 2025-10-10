import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.049 2.193a10 10 0 0 1 10.265 4.251A10 10 0 0 1 22 12H12v10a10 10 0 0 1-1.951-19.807M7.999 14A2 2 0 1 0 8 18a2 2 0 0 0 0-4m0-8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m8 0A2 2 0 1 0 16 10a2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Palette = memo(Icon);
