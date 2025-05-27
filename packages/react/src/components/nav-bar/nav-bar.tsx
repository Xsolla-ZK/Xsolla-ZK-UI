import { useEvent, withStaticProperties } from '@tamagui/core';
import { isValidElement, useMemo, useState, forwardRef } from 'react';
import { useChildrenArray } from '../../hooks';
import { NavBarContext, NavBarStateContext } from './nav-bar.context';
import {
  NavBarCenter,
  NavBarContent,
  NavBarEndSlot,
  NavBarFrame,
  NavBarStartSlot,
  NavBarSubtitle,
  NavBarTitle,
} from './nav-bar.styled';
import type { NavBarProps } from './nav-bar.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, ReactElement } from 'react';

const NavBarComponent = NavBarFrame.styleable<NavBarProps>(
  forwardRef(
    (
      { children, preset = 'default', size = '$500', ...rest },
      ref: ForwardedRef<TamaguiElement>,
    ) => {
      const childrenArray = useChildrenArray(children);
      const { startSlot, centerSlot, endSlot } = useMemo(() => {
        let start: ReactElement | null = null;
        let end: ReactElement | null = null;
        const center: ReactElement[] = [];

        childrenArray.forEach((child) => {
          if (isValidElement(child)) {
            if (child.type === NavBarStartSlot && !start) {
              start = child;
            } else if (child.type === NavBarEndSlot && !end) {
              end = child;
            } else {
              center?.push(child);
            }
          }
        });

        return {
          startSlot: start,
          centerSlot: center,
          endSlot: end,
        };
      }, [childrenArray]);

      const [slotMaxWidth, setSlotMaxWidth] = useState<number>(0);
      const onChangeSlotMaxWidth = useEvent((width: number) =>
        setSlotMaxWidth((prev) => Math.max(prev, width)),
      );

      const ctxValues = useMemo(
        () => ({
          preset,
          size,
        }),
        [preset, size],
      );

      return (
        <NavBarStateContext.Provider
          slotMaxWidth={slotMaxWidth}
          onChangeSlotMaxWidth={onChangeSlotMaxWidth}
        >
          <NavBarContext.Provider {...ctxValues}>
            <NavBarFrame size={ctxValues.size} {...rest} ref={ref}>
              <NavBarContent size={ctxValues.size}>
                {startSlot}
                {centerSlot}
                {endSlot}
              </NavBarContent>
            </NavBarFrame>
          </NavBarContext.Provider>
        </NavBarStateContext.Provider>
      );
    },
  ),
);

export const NavBar = withStaticProperties(NavBarComponent, {
  StartSlot: NavBarStartSlot,
  EndSlot: NavBarEndSlot,
  Center: NavBarCenter,
  Title: NavBarTitle,
  Subtitle: NavBarSubtitle,
});
