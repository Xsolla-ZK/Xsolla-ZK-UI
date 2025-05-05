import type { XZKUICustomColor } from '@xsolla-zk/react/types/theme';
import type { MouseEvent as ReactMouseEvent, ReactNode } from 'react';

type XZKUIAccordionState = {
  active: boolean;
};

type HeaderClickHandler = (
  event: ReactMouseEvent<HTMLDivElement, MouseEvent>,
  state: XZKUIAccordionState,
) => void;
export interface XZKUIAccordionItem {
  header: ReactNode;
  headerClick?: HeaderClickHandler;
  content?: ReactNode;
}

export interface XZKUIAccordionStandalone {
  header: ReactNode;
  children?: ReactNode;
}

export interface XZKUIAccordionBaseProps {
  bg?: XZKUICustomColor;
}

type NeverAllKeys<T> = {
  [K in keyof T]?: never;
};

export type XZKUIAccordionProps = XZKUIAccordionBaseProps & {
  className?: string;
  headerClick?: HeaderClickHandler;
  renders?: {
    headerButton?: ReactNode | ((props: XZKUIAccordionState) => ReactNode);
  };
} & (
    | ({
        list: XZKUIAccordionItem[];
      } & NeverAllKeys<XZKUIAccordionStandalone>)
    | ({
        list?: never;
      } & XZKUIAccordionStandalone)
  );

export interface XZKUIAccordionContentProps {
  active: boolean;
  id: string;
  label: string;
  children?: ReactNode;
}
