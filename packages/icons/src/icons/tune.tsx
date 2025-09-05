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
        d="M9 5v6H3V5zM12 13h6v6h-6zM10 7h11v2H10zM11 15H3v2h8zM19 15h2v2h-2z"
      />
    </SvgThemed>
  );
};

export const Tune = memo(Icon);
