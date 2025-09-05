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
        d="M6.5 6 2 12l4.5 6L8 17l-1.8-4h11.6L16 17l1.5 1 4.5-6-4.5-6L16 7l1.8 4H6.2L8 7z"
      />
    </SvgThemed>
  );
};

export const ArrowBidirectionalHorizontal = memo(Icon);
