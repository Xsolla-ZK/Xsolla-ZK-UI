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
        d="m3.414 4 18 18h-2.828l-1.827-1.827A9 9 0 0 1 13 21v-2a7 7 0 0 0 2.222-.364l-1.667-1.667A5 5 0 0 1 13 17v-.586l-1-1V23l-5-6H2V7h1.586l-3-3zM13 3a9 9 0 0 1 9 9c0 2.29-.874 4.486-2.435 6.151l-1.414-1.414A6.999 6.999 0 0 0 13 5z"
      />
      <Path
        fill="currentColor"
        d="M13 7a5 5 0 0 1 3.735 8.321l-1.418-1.418A2.998 2.998 0 0 0 13 9zM12 1v9.586L7.643 6.229z"
      />
    </SvgThemed>
  );
};

export const VolumeSlash = memo(Icon);
