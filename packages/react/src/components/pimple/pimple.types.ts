import type { PimpleFrame } from './pimple.styled';
import type { GetProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils/components-config';

export type PimpleSizes = keyof ComponentsConfig['pimple'];

export type PimpleContextType = {
  size: PimpleSizes;
};

export type PimpleSharedProps = GetProps<typeof PimpleFrame>;

export interface PimpleProps extends PimpleSharedProps {}
