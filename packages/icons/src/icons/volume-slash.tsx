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
        d="m12 15.414 7.293 7.293 1.414-1.414-18-18-1.414 1.414 5.155 5.155L3 9v6l4-1 5 6zM9.007 7.592 12 10.586V4zM20 12l-.94 5.645-1.343-1.342L17 12l1-6h1zM13.083 11.669 14 8h1l1 4-.517 2.069z"
      />
    </SvgThemed>
  );
};

export const VolumeSlash = memo(Icon);
