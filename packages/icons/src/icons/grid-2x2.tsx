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
        d="M3 3h8v8H3zm3 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0M21 3h-8v8h8zm-4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M3 13v8h8v-8zm4 3a1 1 0 1 0 0 2 1 1 0 0 0 0-2M13 21v-8h8v8zm3-4a1 1 0 1 1 2 0 1 1 0 0 1-2 0"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Grid2x2 = memo(Icon);
