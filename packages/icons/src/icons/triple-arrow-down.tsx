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
        d="m12 21.302-6.64-5.533 1.28-1.538L12 18.697l5.36-4.466 1.28 1.538z"
      />
      <Path
        fill="currentColor"
        d="M12 15.302 5.36 9.769 6.64 8.23 12 12.697l5.36-4.466 1.28 1.538z"
      />
      <Path
        fill="currentColor"
        d="M12 9.302 5.36 3.769 6.64 2.23 12 6.697l5.36-4.466 1.28 1.538z"
      />
    </SvgThemed>
  );
};

export const TripleArrowDown = memo(Icon);
