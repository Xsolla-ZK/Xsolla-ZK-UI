import type { pimpleThemeSizes } from './pimple.theme';
import type { ReactNode } from 'react';

type Sizes = (typeof pimpleThemeSizes)[number];

export interface PimpleBaseProps {
  size: Sizes;
}

export interface PimpleProps extends Partial<PimpleBaseProps> {
  children: ReactNode;
  className?: string;
}
