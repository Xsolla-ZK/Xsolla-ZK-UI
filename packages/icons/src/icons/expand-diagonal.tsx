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
        d="M19.314 6.1 21 12h1V2H12v1l5.9 1.686L4.686 17.9 3 12H2v10h10v-1l-5.9-1.686z"
      />
    </SvgThemed>
  );
};

export const ExpandDiagonal = memo(Icon);
