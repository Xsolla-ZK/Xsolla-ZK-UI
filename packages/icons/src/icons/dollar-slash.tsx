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
        d="m3.414 4 18 18h-2.828l-3.574-3.574a8.5 8.5 0 0 1-1.992.343v2.436h-1.89V18.77c-2.792-.19-4.346-1.218-4.871-3.465h3.318c.273.903 1.428 1.217 2.583 1.217q.489-.002.887-.06L9.256 12.67q-1.35-.272-1.99-.978c-.444-.49-.72-1.104-.836-1.848L.586 4zM11.494 10.08q.26.023.56.037l1.806.105c3.108.168 4.18 1.575 4.18 3.864v.231c0 .742-.13 1.385-.374 1.935zM12.937 4.531c2.688.19 4.473 1.281 4.788 3.465h-3.34c-.335-.84-1.05-1.218-2.393-1.218-1.495 0-2.289.467-2.4 1.4L7.375 5.96c.776-.822 1.998-1.306 3.672-1.43V2.095h1.89z"
      />
    </SvgThemed>
  );
};

export const DollarSlash = memo(Icon);
