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
        d="M22 20H2V4h20zm-10-9.202L4 5.464v2.404l8 5.334 8-5.334V5.464z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Mail = memo(Icon);
