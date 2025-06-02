import type { SnackBarFrame } from './snack-bar.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';
export type SnackBarSizes = keyof ComponentsConfig['snackBar'] | (string & {});
export type SnackBarContextType = {
    size: SnackBarSizes;
};
export type SnackBarProps = GetProps<typeof SnackBarFrame>;
//# sourceMappingURL=snack-bar.types.d.ts.map