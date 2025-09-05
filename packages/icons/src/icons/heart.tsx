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
        d="M2.022 9A5.5 5.5 0 0 1 12 5.337 5.5 5.5 0 0 1 21.978 9H22c0 1.6-.636 3.136-1.768 4.268L12 21.5l-8.232-8.232A6.04 6.04 0 0 1 2 9z"
      />
    </SvgThemed>
  );
};

export const Heart = memo(Icon);
