import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="M22 2v20H2V2zM4 20h16V4H4z" />
      <Path fill="currentColor" d="M5 1h2v3H5zM17 1h2v3h-2zM3 8h18v2H3zM3 14h18v2H3z" />
      <Path fill="currentColor" d="M16 3v19h-2V3zM10 3v19H8V3z" />
      <Path fill="currentColor" d="M15 3h6v6h-6zM3 15h6v6H3z" />
    </SvgThemed>
  );
};

export const Calendar = memo(Icon);
