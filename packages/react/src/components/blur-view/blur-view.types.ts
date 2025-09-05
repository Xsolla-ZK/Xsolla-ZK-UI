import type { BlurFrame } from './blur-view.styled';
import type { GetProps } from '@tamagui/core';
import type { ReactNode } from 'react';

export type BlurViewProps = {
  children?: ReactNode;
} & GetProps<typeof BlurFrame>;
