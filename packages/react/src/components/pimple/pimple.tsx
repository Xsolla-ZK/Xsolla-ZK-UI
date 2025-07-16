import { useProps, withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { PimpleContext, PimpleFrame, PimpleIcon, PimpleText } from './pimple.styled';
import type { PimpleProps } from './pimple.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const PimpleComponent = PimpleFrame.styleable<PimpleProps>(
  forwardRef(({ children, ...propsIn }, ref: ForwardedRef<TamaguiElement>) => {
    const { size = '$500', ...props } = useProps(propsIn);
    return (
      <PimpleFrame size={size} {...props} ref={ref}>
        {size !== '$200' ? children : null}
      </PimpleFrame>
    );
  }),
  {
    disableTheme: true,
  },
);

export const Pimple = withStaticProperties(PimpleComponent, {
  Props: PimpleContext.Provider,
  Text: PimpleText,
  Icon: PimpleIcon,
});
