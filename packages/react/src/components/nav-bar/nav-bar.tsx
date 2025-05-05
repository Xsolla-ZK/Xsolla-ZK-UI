import { isWeb, withStaticProperties } from '@tamagui/core';
import { useCallback } from 'react';
import {
  NavBarAction,
  NavBarBackButton,
  NavBarEndSlot,
  NavBarFrame,
  NavBarIcon,
  NavBarStartSlot,
  NavBarTitle,
  NavBarTitleContainer,
} from './nav-bar.styled';
import type { NavBarProps } from './nav-bar.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const NavBarComponent = NavBarFrame.styleable<NavBarProps>(
  (
    {
      title,
      showBackButton = true,
      onBackPress,
      backButtonLabel = 'Back',
      headerRight,
      headerLeft,
      navigation,
      route,
      children,
      backButtonIcon,
      ...rest
    },
    ref: ForwardedRef<TamaguiElement>,
  ) => {
    const handleBackPress = useCallback(() => {
      if (onBackPress) {
        onBackPress();
        return;
      }

      if (navigation?.goBack) {
        navigation.goBack();
      }
    }, [onBackPress, navigation]);

    const canGoBack = navigation?.canGoBack?.() ?? showBackButton;

    return (
      <NavBarFrame {...rest} ref={ref}>
        <NavBarStartSlot>
          {headerLeft ||
            (canGoBack ? (
              <NavBarBackButton onPress={handleBackPress}>
                {backButtonIcon ? <NavBarIcon icon={backButtonIcon} /> : `&rbrace;`}
                {!isWeb && <NavBarTitle>{backButtonLabel}</NavBarTitle>}
              </NavBarBackButton>
            ) : null)}
        </NavBarStartSlot>

        <NavBarTitleContainer>
          {typeof title === 'string' ? <NavBarTitle>{title}</NavBarTitle> : title}
          {children}
        </NavBarTitleContainer>

        <NavBarEndSlot>{headerRight}</NavBarEndSlot>
      </NavBarFrame>
    );
  },
);

export const NavBar = withStaticProperties(NavBarComponent, {
  StartSlot: NavBarStartSlot,
  EndSlot: NavBarEndSlot,
  Action: NavBarAction,
  Title: NavBarTitle,
  Icon: NavBarIcon,
});
