import type { XZKUICustomColor } from '@xsolla-zk-ui/react/types/theme';
import type { ReactNode } from 'react';

export interface XZKUIBoardBaseProps {
  bg?: XZKUICustomColor;
}

export interface XZKUIBoardProps extends Partial<XZKUIBoardBaseProps> {
  className?: string;
  children?: ReactNode;
  isClosable?: boolean;
}
