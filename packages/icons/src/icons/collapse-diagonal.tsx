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
        d="m12 22-4.293-4.293-4 4-1.414-1.414 4-4L2 12h10zM16.293 6.293l4-4 1.414 1.414-4 4L22 12H12V2z"
      />
    </SvgThemed>
  );
};

export const CollapseDiagonal = memo(Icon);
