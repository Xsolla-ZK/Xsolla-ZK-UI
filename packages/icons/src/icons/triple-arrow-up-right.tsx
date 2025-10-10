import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M19 13V5h-8V3h10v10z" />
      <Path fill="currentColor" d="M15 17V9H7V7h10v10z" />
      <Path fill="currentColor" d="M11 21v-8H3v-2h10v10z" />
    </SvgThemed>
  );
};

export const TripleArrowUpRight = memo(Icon);
