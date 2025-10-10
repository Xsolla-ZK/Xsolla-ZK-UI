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
        d="m12 2.698 6.64 5.533-1.28 1.538L12 5.303 6.64 9.769 5.36 8.23z"
      />
      <Path
        fill="currentColor"
        d="m12 8.698 6.64 5.533-1.28 1.538L12 11.303l-5.36 4.466-1.28-1.538z"
      />
      <Path
        fill="currentColor"
        d="m12 14.698 6.64 5.533-1.28 1.538L12 17.303l-5.36 4.466-1.28-1.538z"
      />
    </SvgThemed>
  );
};

export const TripleArrowUp = memo(Icon);
