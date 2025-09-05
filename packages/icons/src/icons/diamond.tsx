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
        d="M12 3 8 9h8zM11.5 21 3 10h8.5zM12.5 21 21 10h-8.5zM17 9l-4-6h4l4 6zM11 3 7 9H3l4-6z"
      />
    </SvgThemed>
  );
};

export const Diamond = memo(Icon);
