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
        d="M16 16v2h6v2h-6v2h-2v-6zM12 20H2v-2h10zM10 9v6H8v-2H2v-2h6V9zM22 13H12v-2h10zM16 2v2h6v2h-6v2h-2V2zM12 6H2V4h10z"
      />
    </SvgThemed>
  );
};

export const Tune = memo(Icon);
