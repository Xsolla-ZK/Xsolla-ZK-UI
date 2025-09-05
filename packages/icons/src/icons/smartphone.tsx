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
        d="M18 2H6v20h12zm-6 16 1.414 1.414L12 20.828l-1.414-1.414zm4-14H8v13h8z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Smartphone = memo(Icon);
