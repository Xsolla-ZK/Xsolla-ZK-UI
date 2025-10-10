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
        d="m2.698 12 5.533 6.64 1.538-1.28L5.303 12l4.466-5.36L8.23 5.36z"
      />
      <Path
        fill="currentColor"
        d="m8.698 12 5.533 6.64 1.538-1.28L11.303 12l4.466-5.36-1.538-1.28z"
      />
      <Path
        fill="currentColor"
        d="m14.698 12 5.533 6.64 1.538-1.28L17.303 12l4.466-5.36-1.538-1.28z"
      />
    </SvgThemed>
  );
};

export const TripleArrowLeft = memo(Icon);
