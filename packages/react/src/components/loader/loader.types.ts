import type loaderTheme from './loader.theme';
import type { ReactNode } from 'react';

type Variants = keyof ReturnType<typeof loaderTheme>['variants'];

export interface XZKUILoaderBaseProps {
  size: number;
  /** Orientation of elements in a component */
  vertical?: boolean;
  variant: Variants;
  mainColor?: string;
  spinColor?: string;
}

export interface XZKUILoaderProps extends Partial<XZKUILoaderBaseProps> {
  children?: ReactNode;
  className?: string;
}
