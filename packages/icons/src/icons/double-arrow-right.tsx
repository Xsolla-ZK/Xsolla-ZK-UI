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
        d="m19.414 12-6.707-6.707-1.414 1.414L16.586 12l-5.293 5.293 1.414 1.414z"
      />
      <Path
        fill="currentColor"
        d="M12.414 12 5.707 5.293 4.293 6.707 9.586 12l-5.293 5.293 1.414 1.414z"
      />
    </SvgThemed>
  );
};

export const DoubleArrowRight = memo(Icon);
