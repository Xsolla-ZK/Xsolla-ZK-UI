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
        d="M7.9 14.686 2 13v-1h10v10h-1l-1.686-5.9-5.607 5.607-1.414-1.414zM12 12V2h1l1.686 5.9 5.607-5.607 1.414 1.414L16.1 9.314 22 11v1z"
      />
    </SvgThemed>
  );
};

export const CollapseDiagonal = memo(Icon);
