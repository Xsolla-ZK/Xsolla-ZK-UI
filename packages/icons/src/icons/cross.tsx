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
        d="m18.364 16.95-1.414 1.414-4.95-3.85-4.95 3.85-1.414-1.414L9.486 12l-3.85-4.95L7.05 5.636 12 9.486l4.95-3.85 1.414 1.414-3.85 4.95z"
      />
    </SvgThemed>
  );
};

export const Cross = memo(Icon);
