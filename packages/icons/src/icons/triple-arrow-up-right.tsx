import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M22 2v10h-2l-1-7-7-1V2z" />
      <Path fill="currentColor" d="M17 7v10h-2l-1-7-7-1V7z" />
      <Path fill="currentColor" d="M12 22V12H2v2l7 1 1 7z" />
    </SvgThemed>
  );
};

export const TripleArrowUpRight = memo(Icon);
