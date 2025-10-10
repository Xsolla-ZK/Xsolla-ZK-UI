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
        d="M12 16a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4M12 4a2 2 0 1 1 0 4 2 2 0 0 1 0-4"
      />
    </SvgThemed>
  );
};

export const MoreVertical = memo(Icon);
