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
        d="M11 7v2H7a3 3 0 0 0 0 6h4v2H7A5 5 0 0 1 7 7zM17 7l.257.007A5 5 0 0 1 17 17h-4v-2h4a3 3 0 1 0 0-6h-4V7z"
      />
      <Path fill="currentColor" d="M15 13H9v-2h6z" />
    </SvgThemed>
  );
};

export const Link = memo(Icon);
