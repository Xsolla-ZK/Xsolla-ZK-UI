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
        fillRule="evenodd"
        d="m14 2 6 6v14H4V2zm-1 2 5 5h-5zM6 15h8v2H6zm8 3H6v2h8z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Document = memo(Icon);
