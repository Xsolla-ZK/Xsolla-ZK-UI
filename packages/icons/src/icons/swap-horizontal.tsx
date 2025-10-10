import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M7 14h6v2H7v4l-5-5 5-5zM22 9l-5 5v-4h-6V8h6V4z" />
    </SvgThemed>
  );
};

export const SwapHorizontal = memo(Icon);
