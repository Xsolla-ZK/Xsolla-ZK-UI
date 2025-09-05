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
        d="M7.52 11.918 4 4H2V2h3l1 2h16l-4 9H9.202l-1.333 2H19v2H4.131zM10 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0M19 20a2 2 0 1 1-4 0 2 2 0 0 1 4 0"
      />
    </SvgThemed>
  );
};

export const ShoppingCart = memo(Icon);
