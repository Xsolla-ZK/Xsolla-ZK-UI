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
        d="m6.85 5.435 2.9 2.9V7.5h7.5v-3H13.5V3h-3v1.5H8.25q-.637 0-1.069.431-.225.225-.331.504M11.914 10.5l5.336 5.336V12q0-.637-.431-1.069a1.45 1.45 0 0 0-1.069-.431zM10.086 13.5l3 3H6.75v3h3.75V21h3v-1.5h2.25q.16 0 .308-.027l3.235 3.234 1.414-1.414-18-18-1.414 1.414 5.457 5.457V12q0 .637.431 1.069.432.43 1.07.431z"
      />
    </SvgThemed>
  );
};

export const DollarSlash = memo(Icon);
