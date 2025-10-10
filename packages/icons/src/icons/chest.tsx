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
        d="M9.27 11c.345.597.99 1 1.73 1h2c.74 0 1.384-.403 1.73-1H22v9H2v-9zM20 4a2 2 0 0 1 2 2v3h-7.27c-.346-.597-.99-1-1.73-1h-2c-.74 0-1.385.403-1.73 1H2V6a2 2 0 0 1 2-2z"
      />
    </SvgThemed>
  );
};

export const Chest = memo(Icon);
