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
        d="M15.527 7.146 12 2 8.473 7.146 2.49 8.91l3.804 4.944-.171 6.236L12 18l5.878 2.09-.172-6.236L21.51 8.91z"
      />
    </SvgThemed>
  );
};

export const Star = memo(Icon);
