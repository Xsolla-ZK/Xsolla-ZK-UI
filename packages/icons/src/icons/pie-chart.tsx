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
        d="M2 12c0-5.185 3.947-9.449 9-9.95v19.9C5.947 21.45 2 17.186 2 12M21.95 13A10 10 0 0 1 13 21.95V13zM21.95 11A10 10 0 0 0 13 2.05V11z"
      />
    </SvgThemed>
  );
};

export const PieChart = memo(Icon);
