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
        d="m22 6.02-1.976 1.974a8.9 8.9 0 0 1 .943 4.003c0 1.44-.342 2.8-.944 4.005l1.971 1.972-4.02 4.02L16 20.021a8.9 8.9 0 0 1-4.003.945 8.9 8.9 0 0 1-4-.944l-1.972 1.972-4.02-4.02 1.969-1.97a8.9 8.9 0 0 1-.946-4.007c0-1.44.341-2.8.944-4.005L2 6.02 6.02 2l1.972 1.972a8.9 8.9 0 0 1 4.006-.944c1.44 0 2.802.341 4.008.945L17.98 2zM7.758 11.992 12 16.235l4.242-4.243L12 7.75z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Currency = memo(Icon);
