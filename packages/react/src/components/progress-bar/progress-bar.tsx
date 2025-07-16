import { useProps, withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
import {
  ProgressBarActiveTrack,
  ProgressBarContext,
  ProgressBarFrame,
} from './progress-bar.styled';
import type { ProgressBarActiveTrackProps, ProgressBarProps } from './progress-bar.types';
import type { ForwardedRef } from 'react';

const ProgressBarComponent = forwardRef(
  ({ value, ...propsIn }: ProgressBarProps, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const { size = '$500', ...props } = useProps(propsIn);

    return (
      <ProgressBarContext.Provider {...{ size, value }}>
        <ProgressBarFrame {...props} ref={forwardedRef} />
      </ProgressBarContext.Provider>
    );
  },
);

const ProgressBarActiveTrackComponent =
  ProgressBarActiveTrack.styleable<ProgressBarActiveTrackProps>(
    forwardRef(({ width, ...props }, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const { size, value } = ProgressBarContext.useStyledContext();

      return (
        <ProgressBarActiveTrack width={`${value}%`} size={size} {...props} ref={forwardedRef} />
      );
    }),
  );

export const ProgressBar = withStaticProperties(ProgressBarComponent, {
  ActiveTrack: ProgressBarActiveTrackComponent,
});
