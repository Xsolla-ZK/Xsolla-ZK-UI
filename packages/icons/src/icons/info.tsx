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
        d="M23 23H1V1h22zm-12.269-5h2.544v-2.528h-2.544zm-.064-6.4.56 2.528h1.552l.56-2.528V6.8h-2.672z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Info = memo(Icon);
