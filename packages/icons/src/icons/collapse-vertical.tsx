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
        d="m12 13.586 6.707 6.707-1.414 1.414L12 16.414l-5.293 5.293-1.414-1.414zM18.707 3.707 12 10.414 5.293 3.707l1.414-1.414L12 7.586l5.293-5.293z"
      />
    </SvgThemed>
  );
};

export const CollapseVertical = memo(Icon);
