import { withStaticProperties } from '@tamagui/core';
import { useIconsPosition } from '@xsolla-zk/react/hooks/use-icons-position';
import { forwardRef } from 'react';

import { BadgeContext, BadgeFrame, BadgeIcon, BadgeText } from './badge.styled';
import type { BadgeProps } from './badge.types';
import type { TamaguiElement, ThemeName } from '@tamagui/core';
import type { ForwardedRef } from 'react';

export const BadgeComponent = BadgeFrame.styleable<BadgeProps>(
  forwardRef(({ children, tone = 'brand', ...props }, ref: ForwardedRef<TamaguiElement>) => {
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
