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
        d="M7.955 9.062A5 5 0 0 0 12 17v-3l5 4-5 4v-3A7 7 0 0 1 6.337 7.886zM12 2v3a7 7 0 0 1 5.663 11.114l-1.618-1.176A5 5 0 0 0 12 7v3L7 6z"
      />
    </SvgThemed>
  );
};

export const Sync = memo(Icon);
