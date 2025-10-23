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
        d="m11.997 1 10.997 11-10.997 11L1 12zM12 7a5 5 0 0 0-4.62 6.915A5 5 0 0 0 12 17.002z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Item = memo(Icon);
