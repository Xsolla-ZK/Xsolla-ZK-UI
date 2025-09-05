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
        d="m6 9 1-7h10l1 7h2v12H4V9zm8 6a2 2 0 1 1-4 0 2 2 0 0 1 4 0M9 9h6V4H9z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Lock = memo(Icon);
