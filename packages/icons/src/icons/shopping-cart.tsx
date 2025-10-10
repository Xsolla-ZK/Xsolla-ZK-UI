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
        d="M8 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M17 18a2 2 0 1 1 0 4 2 2 0 0 1 0-4M5 2v2h17l-4 9H9.201l-1.333 2H19v2H7.868c-1.597 0-2.55-1.78-1.664-3.11l1.315-1.972L4 4H2V2z"
      />
    </SvgThemed>
  );
};

export const ShoppingCart = memo(Icon);
