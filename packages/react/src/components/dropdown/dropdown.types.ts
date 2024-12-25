import type { dropdownThemeSizes } from './dropdown.theme';
import type { ButtonProps, PopperProps } from '@mui/base';
import type {
  ComponentPropsWithoutRef,
  ElementType,
  MouseEvent,
  ReactElement,
  ReactNode,
} from 'react';

type Sizes = (typeof dropdownThemeSizes)[number];

type XZKUIDropdownPassProps = Pick<ButtonProps, 'aria-controls' | 'aria-expanded'>;

export type XZKUIDropdownShared = {
  open: boolean;
  close: () => void;
  openHandler: (element: HTMLElement | null) => void;
  toggleHandler: (event: MouseEvent<HTMLElement>) => void;
};

export type XZKUIDropdownSharedProps = XZKUIDropdownShared & {
  ownProps: XZKUIDropdownPassProps;
};

export interface XZKUIDropdownBaseProps {
  size: Sizes;
}

export type XZKUIDropdownProps<T extends ElementType = ElementType> = ComponentPropsWithoutRef<T> &
  Partial<XZKUIDropdownBaseProps> & {
    body?: ElementType;
    control: ((props: XZKUIDropdownSharedProps) => ReactElement) | ReactNode;
    children: ((props: XZKUIDropdownShared) => ReactNode) | ReactNode;
    popperProps?: Partial<Omit<PopperProps, 'id' | 'anchorEl'>>;
    className?: string;
    component?: T;
  };
