import type { Separator } from './separator.styled';
import type { GetProps } from '@tamagui/core';

type SeparatorSharedProps = GetProps<typeof Separator>;

export interface SeparatorProps extends SeparatorSharedProps {}
