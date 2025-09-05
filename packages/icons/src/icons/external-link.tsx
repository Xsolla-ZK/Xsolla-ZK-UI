import { SvgThemed } from '@xsolla-zk/ui-primitives';
import { memo } from 'react';
import { Path } from 'react-native-svg';

import type { IconProps } from '@xsolla-zk/ui-primitives';

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props;
  return (
    <SvgThemed fill="none" viewBox="0 0 24 24" size={size} color={color} {...otherProps}>
      <Path fill="currentColor" d="m19 19 1-6h1v8H3V3h8v1L5 5v14z" />
      <Path
        fill="currentColor"
        d="m18.41 7.005-7.703 7.702-1.414-1.414 7.697-7.697L13 4V3h8v7.91h-1z"
      />
    </SvgThemed>
  );
};

export const ExternalLink = memo(Icon);
