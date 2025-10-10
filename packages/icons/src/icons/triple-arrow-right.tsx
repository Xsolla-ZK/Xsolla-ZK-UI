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
        d="m21.302 12-5.533 6.64-1.538-1.28L18.697 12l-4.466-5.36 1.538-1.28z"
      />
      <Path
        fill="currentColor"
        d="m15.302 12-5.533 6.64-1.538-1.28L12.697 12 8.231 6.64 9.77 5.36z"
      />
      <Path
        fill="currentColor"
        d="m9.302 12-5.533 6.64-1.538-1.28L6.697 12 2.231 6.64 3.77 5.36z"
      />
    </SvgThemed>
  );
};

export const TripleArrowRight = memo(Icon);
