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
        d="M22 3v7h-.003C21.877 18.995 12 22 12 22s-9.877-3.005-9.997-12H2V3zm-11 9.586-1.793-1.793-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const ShieldCheckmark = memo(Icon);
