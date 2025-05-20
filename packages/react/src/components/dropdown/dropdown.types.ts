import type { ScopedProps } from '@tamagui/core';
import type { ComponentsConfig } from '@xsolla-zk/react/utils';

export type DropdownSizes = keyof ComponentsConfig['dropdown'];

export type DropdownScopedProps<P> = ScopedProps<P, 'Dropdown'>;
