import type { BoardFrame } from './board.styled';
import type { GetProps } from '@tamagui/core';

type BoardSharedProps = GetProps<typeof BoardFrame>;

export interface BoardProps extends BoardSharedProps {}
