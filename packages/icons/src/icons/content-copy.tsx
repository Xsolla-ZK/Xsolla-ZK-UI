import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M2 16 3 2h14v2H5v12z" />
      <Path fill="currentColor" d="m20 5-1 17H6V5z" />
    </SvgThemed>
  );
};

export const ContentCopy = memo(Icon);
