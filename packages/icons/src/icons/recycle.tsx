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
        d="M7.517 10.765 4.205 16.5a1 1 0 0 0 .867 1.5h4.33v2h-4.33c-2.31 0-3.753-2.5-2.598-4.5l3.31-5.735zm14.01 4.735c1.154 2-.29 4.5-2.599 4.5H12v-2h6.928a1 1 0 0 0 .866-1.5l-1.515-2.625 1.732-1zM9.402 3.5c1.154-2 4.041-2 5.196 0l3.464 6-1.732 1-3.463-6a1 1 0 0 0-1.733 0l-2.28 3.948-1.732-1z"
      />
      <Path
        fill="currentColor"
        d="M18.464 12.464 13 11l6.928-4zM11 19l4-4v8zM7.464 9l1.464 5.464-6.928-4z"
      />
    </SvgThemed>
  );
};

export const Recycle = memo(Icon);
