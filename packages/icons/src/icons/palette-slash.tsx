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
        d="M21.414 22h-2.828L12 15.414V22A10.001 10.001 0 0 1 3.432 6.846L.586 4h2.828zM8 14a2 2 0 1 0 0 4 2 2 0 0 0 0-4M10.049 2.192a10 10 0 0 1 10.266 4.252A10 10 0 0 1 22 12h-8.586L9.93 8.516A2 2 0 0 0 10 8a2 2 0 0 0-2.517-1.93L5.672 4.257a10 10 0 0 1 4.377-2.066M16 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const PaletteSlash = memo(Icon);
