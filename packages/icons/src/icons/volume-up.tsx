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
        d="m12 23-5-6H2V7h5l5-6zM13 3a9 9 0 1 1 0 18v-2a7.001 7.001 0 1 0 0-14z"
      />
      <Path fill="currentColor" d="M13 7a5 5 0 0 1 0 10v-2a3 3 0 0 0 0-6z" />
    </SvgThemed>
  );
};

export const VolumeUp = memo(Icon);
