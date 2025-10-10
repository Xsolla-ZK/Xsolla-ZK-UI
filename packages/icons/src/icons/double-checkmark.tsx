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
        d="M22.777 6.629 12.4 19.472l-2.261-2.153-1.739 2.153-7.088-6.747 1.378-1.45 5.517 5.252.478-.592-3.373-3.21 1.378-1.45 3.256 3.1 7.278-9.004 1.554 1.258-7.379 9.13.808.768 9.017-11.156z"
      />
    </SvgThemed>
  );
};

export const DoubleCheckmark = memo(Icon);
