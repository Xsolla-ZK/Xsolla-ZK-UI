import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M11 22H2v-9h9zM22 22h-9v-9h9zM11 11H2V2h9zM22 11h-9V2h9z" />
    </SvgThemed>
  );
};

export const Grid2x2 = memo(Icon);
