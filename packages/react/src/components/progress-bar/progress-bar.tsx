import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import { forwardRef } from 'react';
import { useStyledMediaContext } from '../../hooks';
import {
  ProgressBarActiveTrack,
  ProgressBarContext,
  ProgressBarFrame,
} from './progress-bar.styled';
import type { ProgressBarActiveTrackProps, ProgressBarProps } from './progress-bar.types';
import type { ForwardedRef } from 'react';

const ProgressBarComponent = forwardRef<TamaguiElement, ProgressBarProps>(
  ({ value, ...props }, forwardedRef) => (
    <ProgressBarContext.Provider componentProps={props} value={value}>
      <ProgressBarFrame {...props} ref={forwardedRef} />
    </ProgressBarContext.Provider>
  ),
);

const ProgressBarActiveTrackComponent =
  ProgressBarActiveTrack.styleable<ProgressBarActiveTrackProps>(
    ({ width, ...props }, forwardedRef: ForwardedRef<TamaguiElement>) => {
      const { mediaContext, value } = useStyledMediaContext(ProgressBarContext);

      return (
        <ProgressBarActiveTrack
          width={`${value}%`}
          {...mediaContext}
          {...props}
          ref={forwardedRef}
        />
      );
    },
  );

export const ProgressBar = withStaticProperties(ProgressBarComponent, {
  ActiveTrack: ProgressBarActiveTrackComponent,
});
