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
        d="m8.349 2.826.205-.103a7.7 7.7 0 0 1 6.891 0l.206.103a7.15 7.15 0 0 1 2.585 10.6L12 22l-6.236-8.574a7.15 7.15 0 0 1 2.585-10.6m.5 6.324L12 6l3.15 3.15L12 12.3z"
        clipRule="evenodd"
      />
    </SvgThemed>
  );
};

export const Pin = memo(Icon);
