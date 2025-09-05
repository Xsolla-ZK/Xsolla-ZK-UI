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
        d="m12 8 9-1V5l-9-1-9 1v2zM12 14l9-1v-2l-9-1-9 1v2zM12 16l9 1v2l-9 1-9-1v-2z"
      />
    </SvgThemed>
  );
};

export const Menu = memo(Icon);
