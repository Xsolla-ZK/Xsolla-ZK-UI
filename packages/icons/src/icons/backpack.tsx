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
        d="M14 1a3 3 0 0 1 3 3 4 4 0 0 1 4 4v15H3V8a4 4 0 0 1 4-4 3 3 0 0 1 3-3zM7 19h10v-6H7zm3-16a1 1 0 0 0-1 1h6a1 1 0 0 0-1-1z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Backpack = memo(Icon);
