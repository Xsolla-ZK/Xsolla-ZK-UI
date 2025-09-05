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
        d="M3.304 11.519 3 3h18l-.304 8.519a10 10 0 0 1-4.924 8.262L12 22l-3.772-2.219a10 10 0 0 1-4.924-8.262M11 15l-3-3 1-1 2 1 4-3 1 1z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const ShieldCheckmark = memo(Icon);
