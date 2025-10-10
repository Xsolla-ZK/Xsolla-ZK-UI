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
        d="M23 21H1V3h22zm-9-7a3 3 0 0 0-3 3h10a3 3 0 0 0-3-3zM3 11v2h4v-2zm13-4a3 3 0 1 0 0 6 3 3 0 0 0 0-6M3 8v2h7V8z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const IdCard = memo(Icon);
