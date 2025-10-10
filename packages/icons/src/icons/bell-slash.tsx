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
        d="M21.707 22.293h-2.828L14.586 18H2v-2h3v-5c0-.778.127-1.526.361-2.225L.293 3.707h2.828z"
      />
      <Path
        fill="currentColor"
        d="M14 22h-4v-3h4zM13 2v2.072A7 7 0 0 1 19 11v5h3v2h-2.586L7.262 5.848A6.98 6.98 0 0 1 11 4.07V2z"
      />
    </SvgThemed>
  );
};

export const BellSlash = memo(Icon);
