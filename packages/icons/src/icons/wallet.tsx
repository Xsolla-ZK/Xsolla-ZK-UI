import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M19.5 4H4v1h18v4h-9v9h9v4H2V2h17.5z" />
      <Path fill="currentColor" d="M22 16h-7v-5h7z" />
    </SvgThemed>
  );
};

export const Wallet = memo(Icon);
