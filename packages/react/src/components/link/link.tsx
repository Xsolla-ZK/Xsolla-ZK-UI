import {
  createContext,
  createElement,
  useContext,
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';
import Styled from './link.styled';
import type { XZKUILinkProps } from './link.types';
import type { XZKUIInputProps } from '../input/input.types';

function XZKUILink({ children }: XZKUILinkProps) {
  return <Styled.Root>{children}</Styled.Root>;
}

type ContextValues = {
  error?: boolean;
  id?: string;
};

export type ContextCallback = (context: ContextValues) => ReactNode;

export interface PropsWithCallback {
  render?: ContextCallback;
}

export type PropsWithElement<T extends ElementType> = {
  render?: T;
} & Omit<ComponentPropsWithoutRef<T>, 'render'>;

export type PropsDefault = {
  render?: never;
} & XZKUIInputProps;

export type Props<T extends ElementType> = PropsWithCallback | PropsWithElement<T> | PropsDefault;

export const Context = createContext<ContextValues>({
  error: false,
  id: undefined,
});

export const useComponentContext = () => {
  const ctx = useContext(Context);

  if (!ctx) {
    throw new Error('Xsolla-ZK UI: Context is missing. Field parts must be placed within <>.');
  }

  return ctx;
};

function Component(props: PropsWithCallback): ReactNode;
function Component(props: PropsDefault): ReactNode;
function Component<T extends ElementType>(props: PropsWithElement<T>): ReactNode;
function Component<T extends ElementType>({ render, ...props }: Props<T>) {
  const context = useComponentContext();

  if (typeof render === 'function') {
    return (render as ContextCallback)(context);
  }

  return createElement(render ?? 'a', { ...context, ...props });
}

function TestRender() {
  return (
    <>
      <Component />
      <Component render={() => <div>Hello</div>} />
      <Component render="span" />
    </>
  );
}

export default XZKUILink;
