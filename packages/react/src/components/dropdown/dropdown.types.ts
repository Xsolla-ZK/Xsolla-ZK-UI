import type { ComponentsConfig } from '../../utils';
import type { ScopedProps } from '@tamagui/core';

export type DropdownSizes = keyof ComponentsConfig['dropdown'] | (string & {});

export type DropdownScopedProps<P> = ScopedProps<P, 'Dropdown'>;
