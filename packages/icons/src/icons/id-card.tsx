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
        d="M22 4H2v16h20zM9 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4m3 1 1 3H5l1-3zm4.5-3L19 9V8h-5v1zM14 12l2.5 1 2.5-1v-1h-5z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const IdCard = memo(Icon);
