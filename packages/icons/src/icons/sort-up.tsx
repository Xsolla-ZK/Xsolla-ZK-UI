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
        d="m12 8.5 2-.5V6l-2-.5-2 .5v2zM12 10.5l6 .5v2l-6 .5-6-.5v-2zM21 18l-9 .5-9-.5v-2l9-.5 9 .5z"
      />
    </SvgThemed>
  );
};

export const SortUp = memo(Icon);
