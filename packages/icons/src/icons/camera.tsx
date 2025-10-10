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
        d="m15 3 2 3h5v14H2V6h5l2-3zm-3 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Camera = memo(Icon);
