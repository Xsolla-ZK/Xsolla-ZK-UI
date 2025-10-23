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
        d="M17.12 13.657h-2.858v-2.873h2.857zM9.887 13.653H7.013V10.78h2.874z"
      />
      <Path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.057 1.5a4.71 4.71 0 0 1 4.526 3.41l.047.161c.483 1.62.914 1.974 2.655 2.304a4.709 4.709 0 0 1-.047 9.26c-1.753.337-2.154.711-2.652 2.444a4.71 4.71 0 0 1-4.527 3.421h-.002a4.71 4.71 0 0 1-4.527-3.421c-.498-1.733-.9-2.107-2.653-2.444a4.71 4.71 0 0 1-.046-9.26c1.74-.33 2.172-.684 2.655-2.304l.047-.16A4.71 4.71 0 0 1 12.057 1.5M8.451 9.026a3.19 3.19 0 0 0-3.194 3.19 3.194 3.194 0 0 0 6.296.762h1.054a3.18 3.18 0 0 0 3.084 2.435 3.184 3.184 0 0 0 3.175-3.193 3.184 3.184 0 0 0-3.175-3.193 3.18 3.18 0 0 0-3.083 2.431h-1.055a3.194 3.194 0 0 0-3.102-2.432"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const LogoBabka = memo(Icon);
