import { useEvent, withStaticProperties } from '@tamagui/core';
import { isValidElement, useMemo, useState } from 'react';
import { useChildrenArray } from '../../hooks';
import { withStyledMediaContext } from '../../utils';
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
import type { ReactElement } from 'react';

const NavBarCenterComponent = withStyledMediaContext(NavBarCenter, NavBarContext);
const NavBarContentComponent = withStyledMediaContext(NavBarContent, NavBarContext);

const NavBarComponent = NavBarFrame.styleable<NavBarProps>(({ children, ...propsIn }, ref) => {
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

  return (
    <NavBarStateContext.Provider
      slotMaxWidth={slotMaxWidth}
      onChangeSlotMaxWidth={onChangeSlotMaxWidth}
    >
      <NavBarContext.Provider componentProps={propsIn}>
        <NavBarFrame {...propsIn} ref={ref}>
          <NavBarContentComponent>
            {startSlot}
            {centerSlot}
            {endSlot}
          </NavBarContentComponent>
        </NavBarFrame>
      </NavBarContext.Provider>
    </NavBarStateContext.Provider>
  );
});

export const NavBar = withStaticProperties(NavBarComponent, {
  StartSlot: NavBarStartSlot,
  EndSlot: NavBarEndSlot,
  Center: NavBarCenterComponent,
  Title: NavBarTitle,
  Subtitle: NavBarSubtitle,
});
