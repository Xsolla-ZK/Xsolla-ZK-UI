import type { ElementType, ReactNode } from 'react';

type Ratio = [number, number];

export interface XZKUIAspectRatioProps {
  aspectRatio?: Ratio;
  children?: ReactNode;
  className?: string;
  as?: ElementType;
}
