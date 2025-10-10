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
        d="M13 15v3h3.06L12 22.06 7.94 18H11v-3zM6.03 11H9v2H6.03v3.09l-4.06-4.06 4.06-4.06zM22.03 12.03l-4.06 4.06V13H15v-2h2.97V7.97zM16.06 6.06H13V9h-2V6.06H7.94L12 2z"
      />
    </SvgThemed>
  );
};

export const OpenWith = memo(Icon);
