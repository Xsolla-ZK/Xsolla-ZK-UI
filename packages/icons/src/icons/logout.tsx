import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="m12 18-7 1V5l7 1V3H3v18h9z" />
      <Path fill="currentColor" d="m21 12-4.5-5-1.5.833L16.71 11H9v2h7.71L15 16.167l1.5.833z" />
    </SvgThemed>
  );
};

export const Logout = memo(Icon);
