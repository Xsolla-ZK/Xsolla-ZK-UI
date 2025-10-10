import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M6 5v16h12v2H4V5z" />
      <Path fill="currentColor" d="M14.2 2v7.2h7.2V20H7V2z" />
      <Path fill="currentColor" d="m16.001 2.001 5.4 5.4H16z" />
    </SvgThemed>
  );
};

export const Documents = memo(Icon);
