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
        d="M11 2H5v6h2v1H5v6h2v1H5v6h6v-6H9v-1h2v-2h2v2h6V9h-6v2h-2V9H9V8h2z"
      />
    </SvgThemed>
  );
};

export const Graph = memo(Icon);
