import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M22 21H10v-3.667h2V19h8V5h-8v1.667h-2V3h12z" />
      <Path
        fill="currentColor"
        d="m13.302 12-5.533 6.64-1.538-1.28L9.864 13H2v-2h7.864L6.231 6.64 7.77 5.36z"
      />
    </SvgThemed>
  );
};

export const Login = memo(Icon);
