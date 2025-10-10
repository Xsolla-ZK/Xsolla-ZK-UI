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
        d="M13 17a5 5 0 0 1 5 5H6a5 5 0 0 1 5-5zM12 10a3 3 0 1 1 0 6 3 3 0 0 1 0-6M6 9v5H1a5 5 0 0 1 5-5M18 9a5 5 0 0 1 5 5h-5zM6 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6M18 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6"
      />
    </SvgThemed>
  );
};

export const People = memo(Icon);
