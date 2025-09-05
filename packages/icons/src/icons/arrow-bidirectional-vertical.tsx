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
        d="M18 6.5 12 2 6 6.5 7 8l4-1.8v11.6L7 16l-1 1.5 6 4.5 6-4.5-1-1.5-4 1.8V6.2L17 8z"
      />
    </SvgThemed>
  );
};

export const ArrowBidirectionalVertical = memo(Icon);
