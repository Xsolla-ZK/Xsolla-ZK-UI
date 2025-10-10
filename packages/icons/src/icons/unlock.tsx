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
        d="M12 2a4 4 0 0 1 4 4v3h4v13H4V9h10V6a2 2 0 1 0-4 0v1H8V6a4 4 0 0 1 4-4m-1 15h2v-4h-2z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Unlock = memo(Icon);
