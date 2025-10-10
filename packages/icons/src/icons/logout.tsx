import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M14 6.667h-2V5H4v14h8v-1.667h2V21H2V3h12z" />
      <Path
        fill="currentColor"
        d="m22.302 12-5.533 6.64-1.538-1.28L18.864 13H11v-2h7.864l-3.633-4.36 1.538-1.28z"
      />
    </SvgThemed>
  );
};

export const Logout = memo(Icon);
