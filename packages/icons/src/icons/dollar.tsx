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
        d="M12.937 2.095v2.436c2.688.189 4.473 1.281 4.788 3.465h-3.339c-.336-.84-1.05-1.218-2.394-1.218-1.617 0-2.415.546-2.415 1.638v.105c0 1.197.567 1.512 2.478 1.596l1.806.105c3.108.168 4.18 1.575 4.18 3.864v.23c0 2.857-1.891 4.264-5.02 4.453v2.436h-1.89V18.77c-2.793-.19-4.347-1.218-4.872-3.465h3.318c.273.903 1.428 1.218 2.583 1.218 1.764 0 2.646-.546 2.646-1.827v-.168c0-1.197-.546-1.512-2.478-1.596l-1.785-.105q-2.362-.126-3.276-1.134c-.609-.672-.902-1.575-.903-2.73v-.105c0-2.604 1.554-4.095 4.683-4.326V2.095z"
      />
    </SvgThemed>
  );
};

export const Dollar = memo(Icon);
