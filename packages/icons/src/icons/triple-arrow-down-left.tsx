import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M12 2v10h10v-2l-7-1-1-7z" />
      <Path fill="currentColor" d="M7 17V7h2l1 7 7 1v2z" />
      <Path fill="currentColor" d="M2 22V12h2l1 7 7 1v2z" />
    </SvgThemed>
  );
};

export const TripleArrowDownLeft = memo(Icon);
