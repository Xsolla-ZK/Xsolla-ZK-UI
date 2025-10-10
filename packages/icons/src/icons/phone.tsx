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
        d="M2 4V2h6l1 5-3 3c.804 3 6 7.464 8 8l2.06-3L22 16v6h-2C10 22 2 10 2 4"
      />
    </SvgThemed>
  );
};

export const Phone = memo(Icon);
