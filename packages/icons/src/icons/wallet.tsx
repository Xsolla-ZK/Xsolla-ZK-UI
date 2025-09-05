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
        d="M3 3 2 21h20V7h-3l1-4zm14 4 .5-2h-13v2zm-1 8 1-2h2l-1 2z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Wallet = memo(Icon);
