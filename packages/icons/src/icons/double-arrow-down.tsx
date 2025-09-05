import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="m18 7-6 6-6-6 1-1 5 3 5-3z" />
      <Path fill="currentColor" d="m18 13-6 6-6-6 1-1 5 3 5-3z" />
    </SvgThemed>
  );
};

export const DoubleArrowDown = memo(Icon);
