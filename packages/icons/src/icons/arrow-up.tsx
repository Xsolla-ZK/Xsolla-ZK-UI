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
        d="m12 3.586 8.707 8.707-1.414 1.414L13 7.414V20h-2V7.414l-6.293 6.293-1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const ArrowUp = memo(Icon);
