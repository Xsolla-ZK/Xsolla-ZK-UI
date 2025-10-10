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
        d="M18.707 14.707 12 21.414l-6.707-6.707 1.414-1.414L12 18.586l5.293-5.293zM12 2.586l6.707 6.707-1.414 1.414L12 5.414l-5.293 5.293-1.414-1.414z"
      />
    </SvgThemed>
  );
};

export const ExpandVertical = memo(Icon);
