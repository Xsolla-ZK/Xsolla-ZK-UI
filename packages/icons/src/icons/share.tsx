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
        d="M18 8a3 3 0 1 0-2.947-2.438L7.939 9.71a3 3 0 1 0 0 4.578l7.114 4.15Q15 18.71 15 19a3 3 0 1 0 1.06-2.289l-7.112-4.15a3 3 0 0 0 0-1.123L16.06 7.29C16.584 7.732 17.26 8 18 8"
      />
    </SvgThemed>
  );
};

export const Share = memo(Icon);
