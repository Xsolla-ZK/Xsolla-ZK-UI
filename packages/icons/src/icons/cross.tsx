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
        d="M21.707 3.707 13.414 12l8.293 8.293-1.414 1.414L12 13.414l-8.293 8.293-1.414-1.414L10.586 12 2.293 3.707l1.414-1.414L12 10.586l8.293-8.293z"
      />
    </SvgThemed>
  );
};

export const Cross = memo(Icon);
