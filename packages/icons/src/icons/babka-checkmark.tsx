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
        d="M12.057 1.5a4.71 4.71 0 0 1 4.526 3.41l.047.161c.483 1.62.914 1.974 2.654 2.304a4.71 4.71 0 0 1-.047 9.26c-1.752.338-2.153.712-2.651 2.444a4.71 4.71 0 0 1-4.527 3.421h-.002a4.71 4.71 0 0 1-4.527-3.42c-.498-1.734-.9-2.108-2.652-2.445a4.71 4.71 0 0 1-.047-9.26c1.74-.33 2.172-.684 2.655-2.304l.047-.16A4.71 4.71 0 0 1 12.057 1.5M11 12.586l-1.793-1.793-1.414 1.414L11 15.414l5.707-5.707-1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const BabkaCheckmark = memo(Icon);
