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
        d="M3 20q-.824 0-1.412-.587A1.93 1.93 0 0 1 1 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 3 4h18q.824 0 1.413.588Q23 5.175 23 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 21 20zm3-2h12V6H6z"
      />
    </SvgThemed>
  );
};

export const Tablet = memo(Icon);
