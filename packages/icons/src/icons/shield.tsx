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
        d="M20.696 11.519 21 3H3l.304 8.519a10 10 0 0 0 4.924 8.262L12 22l3.772-2.219a10 10 0 0 0 4.924-8.262"
      />
    </SvgThemed>
  );
};

export const Shield = memo(Icon);
