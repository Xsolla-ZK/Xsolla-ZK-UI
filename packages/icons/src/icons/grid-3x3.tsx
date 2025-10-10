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
        d="M8 20H4v-4h4zM14 20h-4v-4h4zM20 20h-4v-4h4zM8 14H4v-4h4zM14 14h-4v-4h4zM20 14h-4v-4h4zM8 8H4V4h4zM14 8h-4V4h4zM20 8h-4V4h4z"
      />
    </SvgThemed>
  );
};

export const Grid3x3 = memo(Icon);
