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
        d="m13 16.586 6.293-6.293 1.414 1.414L12 20.414l-8.707-8.707 1.414-1.414L11 16.586V4h2z"
      />
    </SvgThemed>
  );
};

export const ArrowDown = memo(Icon);
