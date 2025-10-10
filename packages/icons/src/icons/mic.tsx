import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M7 12a5 5 0 0 0 10 0h2a7 7 0 1 1-14 0z" />
      <Path fill="currentColor" d="M13 18v4h-2v-4z" />
      <Path fill="currentColor" d="M15 23H9v-2h6zM8 5a4 4 0 1 1 8 0v7a4 4 0 0 1-8 0z" />
    </SvgThemed>
  );
};

export const Mic = memo(Icon);
