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
        d="M17.5 13 22 8l-4.5-5-1.5.833L17.71 7H11v2h6.71L16 12.167zM6.5 11 2 16l4.5 5 1.5-.833L6.29 17H13v-2H6.29L8 11.833z"
      />
    </SvgThemed>
  );
};

export const SwapHorizontal = memo(Icon);
