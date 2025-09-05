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
        d="m15.779 19.193 3.514 3.514 1.414-1.414-18-18-1.414 1.414 3.12 3.12C2.722 9.883 2 12 2 12s2.727 8 10 8c1.431 0 2.686-.31 3.779-.807m-2.389-2.389-1.837-1.837a3 3 0 0 1-2.52-2.52L7.196 10.61a5 5 0 0 0 6.194 6.194"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        d="M18.63 17.215C21.01 14.906 22 12 22 12s-2.727-8-10-8a9.03 9.03 0 0 0-5.065 1.52l2.308 2.308a5 5 0 0 1 6.929 6.929z"
      />
      <Path fill="currentColor" d="M14.708 13.293a3 3 0 0 0-4.001-4.001z" />
    </SvgThemed>
  );
};

export const EyeSlash = memo(Icon);
