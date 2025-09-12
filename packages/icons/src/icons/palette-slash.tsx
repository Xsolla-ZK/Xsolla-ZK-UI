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
        d="M10.161 2.193a10.27 10.27 0 0 1 5.859.568 10.1 10.1 0 0 1 4.55 3.683c1.113 1.645 2.818 6.223-.561 9.556H18.12l-8-8h.883l-1-3H8.003v.882l-1.91-1.91c1.2-.88 2.59-1.49 4.068-1.78M17.007 13h2v-3h-3zm-3.001-5h2V5h-3.001zM13.293 16l5.414 5.414L20.12 20 3.414 3.293 2 4.707l1.72 1.72a9.9 9.9 0 0 0-1.525 3.622 9.88 9.88 0 0 0 .576 5.778 10.03 10.03 0 0 0 3.735 4.488C8.173 21.413 10 22 12.005 22v-6zm-6.291-3H5v-3h3.002z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const PaletteSlash = memo(Icon);
