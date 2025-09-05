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
        d="m7 14-4 1V9l4 1 5-6v16zM19 6h-1l-1 6 1 6h1l1-6zM13 12l1-4h1l1 4-1 4h-1z"
      />
    </SvgThemed>
  );
};

export const VolumeUp = memo(Icon);
