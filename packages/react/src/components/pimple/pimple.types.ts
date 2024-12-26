import type { pimpleThemeSizes } from './pimple.theme';
import type { ReactNode } from 'react';

type Sizes = (typeof pimpleThemeSizes)[number];

export interface XZKUIPimpleBaseProps {
  size: Sizes;
}

export interface XZKUIPimpleProps extends Partial<XZKUIPimpleBaseProps> {
  children: ReactNode;
  className?: string;
}
