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
        d="M4 4h4v4H4zM4 10h4v4H4zM8 16H4v4h4zM10 4h4v4h-4zM14 10h-4v4h4zM10 16h4v4h-4zM20 4h-4v4h4zM16 10h4v4h-4zM20 16h-4v4h4z"
      />
    </SvgThemed>
  );
};

export const Grid3x3 = memo(Icon);
