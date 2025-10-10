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
        d="M3 16v5h5v2H1v-7zM23 23h-7v-2h5v-5h2zM9 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2M15 12a1 1 0 1 1 0 2 1 1 0 0 1 0-2"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16m0 4.425A5.84 5.84 0 0 1 7.155 11h-1.07a6 6 0 1 0 11.83 0h-1.07A5.84 5.84 0 0 1 12 8.425"
        clipRule="evenodd"
      />
      <Path fill="currentColor" d="M8 3H3v5H1V1h7zM23 1v7h-2V3h-5V1z" />
    </SvgThemed>
  );
};

export const Biometrics = memo(Icon);
