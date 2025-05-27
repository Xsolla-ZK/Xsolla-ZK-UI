import type { PimpleFrame } from './pimple.styled';
import type { ComponentsConfig } from '../../utils';
import type { GetProps } from '@tamagui/core';

export type PimpleSizes = keyof ComponentsConfig['pimple'] | (string & {});

export type PimpleContextType = {
  size: PimpleSizes;
};

export type PimpleSharedProps = GetProps<typeof PimpleFrame>;

export interface PimpleProps extends PimpleSharedProps {}
