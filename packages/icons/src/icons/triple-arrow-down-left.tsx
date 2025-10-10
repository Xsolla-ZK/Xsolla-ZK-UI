import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M5 11v8h8v2H3V11z" />
      <Path fill="currentColor" d="M9 7v8h8v2H7V7z" />
      <Path fill="currentColor" d="M13 3v8h8v2H11V3z" />
    </SvgThemed>
  );
};

export const TripleArrowDownLeft = memo(Icon);
