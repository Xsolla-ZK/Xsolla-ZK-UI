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
        d="m7 4 1 8-1 8H5l-1-8 1-8zM13 4l1 8-1 8h-2l-1-8 1-8zM20 12l-1-8h-2l-1 8 1 8h2z"
      />
    </SvgThemed>
  );
};

export const ListHorizontal = memo(Icon);
