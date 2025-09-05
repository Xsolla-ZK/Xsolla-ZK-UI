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
        d="M7 11a5 5 0 1 0 10 0h2a7 7 0 0 1-6 6.928V21h-2v-3.072A7 7 0 0 1 5 11z"
      />
      <Path fill="currentColor" d="M9 2h6v4h-1v1h1v2h-1v1h1v3H9v-3h3V9H9V7h3V6H9z" />
    </SvgThemed>
  );
};

export const Mic = memo(Icon);
