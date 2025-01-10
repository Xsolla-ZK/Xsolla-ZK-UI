import type { ReactNode } from 'react';

export interface XZKUIAccordionItem {
  header: ReactNode;
  content?: ReactNode;
}

export interface XZKUIAccordionStandalone {
  header: ReactNode;
  children?: ReactNode;
}

type NeverAllKeys<T> = {
  [K in keyof T]?: never;
};

export type XZKUIAccordionProps =
  | ({
      list: XZKUIAccordionItem[];
    } & NeverAllKeys<XZKUIAccordionStandalone>)
  | ({
      list?: never;
    } & XZKUIAccordionStandalone);

export interface XZKUIAccordionContentProps {
  active: boolean;
  id: string;
  label: string;
  children?: ReactNode;
}
