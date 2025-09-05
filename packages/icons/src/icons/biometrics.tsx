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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0m-10-2a1 1 0 1 1-2 0 1 1 0 0 1 2 0m5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 2 3 3 3-3z"
        clipRule="evenodd"
      />
      <Path
        fill="currentColor"
        d="M2 2h4v2H4v2H2zM6 22v-2H4v-2H2v4zM18 2h4v4h-2V4h-2zM18 22v-2h2v-2h2v4z"
      />
    </SvgThemed>
  );
};

export const Biometrics = memo(Icon);
