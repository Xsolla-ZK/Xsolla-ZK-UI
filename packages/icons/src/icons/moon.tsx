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
        d="M9.538 7.2a9 9 0 0 0 7.07 7.07 9 9 0 0 0 5.199-.512 9.95 9.95 0 0 1-2.735 5.119c-3.906 3.905-10.237 3.906-14.143 0-3.905-3.905-3.905-10.237 0-14.142A9.94 9.94 0 0 1 10.049 2a9 9 0 0 0-.511 5.2"
      />
    </SvgThemed>
  );
};

export const Moon = memo(Icon);
