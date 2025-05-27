import type { ProgressBarActiveTrack, ProgressBarFrame } from './progress-bar.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type ProgressBarSizes = keyof ComponentsConfig['progressBar'] | (string & {});
export type ProgressBarContextType = {
    size: ProgressBarSizes;
    value: number;
};
type ProgressBarSharedProps = GetProps<typeof ProgressBarFrame>;
export type ProgressBarProps = ProgressBarSharedProps & {
    value: number;
    size?: ProgressBarSizes;
};
export type ProgressBarActiveTrackProps = GetProps<typeof ProgressBarActiveTrack>;
export {};
//# sourceMappingURL=progress-bar.types.d.ts.map