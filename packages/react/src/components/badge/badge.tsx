import { useProps, withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { useIconsPosition } from '../../hooks';

import { BadgeContext, BadgeFrame, BadgeIcon, BadgeText } from './badge.styled';
import type { BadgeProps } from './badge.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const BadgeComponent = BadgeFrame.styleable<BadgeProps>(
  forwardRef(({ children, ...propsIn }, ref: ForwardedRef<TamaguiElement>) => {
    const { tone = 'brand', ...props } = useProps(propsIn);
    const iconsPosition = useIconsPosition(children, BadgeIcon);

    return (
      <BadgeFrame
        theme={tone as unknown as ThemeName}
        tone={tone}
        {...iconsPosition}
        {...props}
        ref={ref}
      >
        {children}
      </BadgeFrame>
    );
  }),
  {
    disableTheme: true,
  },
);

export const Badge = withStaticProperties(BadgeComponent, {
  Props: BadgeContext.Provider,
  Text: BadgeText,
  Icon: BadgeIcon,
});
