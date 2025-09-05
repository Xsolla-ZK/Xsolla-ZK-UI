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
        d="M13 6.5 8 2 3 6.5 3.833 8 7 6.29V13h2V6.29L12.167 8zM11 17.5l5 4.5 5-4.5-.833-1.5L17 17.71V11h-2v6.71L11.833 16z"
      />
    </SvgThemed>
  );
};

export const SwapVertical = memo(Icon);
