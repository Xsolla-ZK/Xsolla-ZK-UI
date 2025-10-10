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
        d="M13.753 20h-3.498v-3.476h3.498zM13.84 11.2l-.769 3.476h-2.135l-.77-3.476V4.6h3.675z"
      />
    </SvgThemed>
  );
};

export const Warning = memo(Icon);
