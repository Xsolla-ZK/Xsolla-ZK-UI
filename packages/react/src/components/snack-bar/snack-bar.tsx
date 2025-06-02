import { withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import {
  SnackBarContentDescriptionActionsFrame,
  SnackBarContentDescriptionFrame,
  SnackBarContentDescriptionListFrame,
  SnackBarContentFrame,
  SnackBarContext,
  SnackBarFrame,
} from './snack-bar.styled';
import type { SnackBarProps } from './snack-bar.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const SnackBarFrameComponent = SnackBarFrame.styleable<SnackBarProps>(
  forwardRef(({ size = '$500', ...props }, ref: ForwardedRef<TamaguiElement>) => (
    <SnackBarFrame size={size} {...props} ref={ref} />
  )),
);

export const SnackBar = withStaticProperties(SnackBarFrameComponent, {
  Props: SnackBarContext.Provider,
  Content: SnackBarContentFrame,
  Description: SnackBarContentDescriptionFrame,
  List: SnackBarContentDescriptionListFrame,
  Actions: SnackBarContentDescriptionActionsFrame,
});
