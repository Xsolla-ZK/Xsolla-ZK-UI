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
        d="M8 21v-1l2-2H4q-.824 0-1.412-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.412A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587Q22 4.176 22 5v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18h-6l2 2v1z"
      />
    </SvgThemed>
  );
};

export const Desktop = memo(Icon);
