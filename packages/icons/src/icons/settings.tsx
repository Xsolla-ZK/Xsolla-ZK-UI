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
        d="m22 12-5 8.66H7L2 12l5-8.66h10zM12 8.536a3.464 3.464 0 1 0 0 6.928 3.464 3.464 0 0 0 0-6.928"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Settings = memo(Icon);
