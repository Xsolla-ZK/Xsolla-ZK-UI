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
        fillRule="evenodd"
        d="M12 3a5 5 0 0 0-5 5H3L2 21h20L21 8h-4a5 5 0 0 0-5-5m0 2a3 3 0 0 0-3 3h6a3 3 0 0 0-3-3"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Bag = memo(Icon);
