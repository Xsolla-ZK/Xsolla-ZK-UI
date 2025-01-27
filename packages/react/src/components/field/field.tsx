import clsx from 'clsx';
import { createElement, forwardRef, useId } from 'react';
import XZKUIInput from '../input/input';
import xzkuiFieldClasses from './field.classes';
import { useXZKUIFieldContext, XZKUIFieldContext } from './field.context';
import Styled from './field.styled';
import type {
  XZKUIFieldContextCallback,
  XZKUIFieldControlProps,
  XZKUIFieldControlPropsDefault,
  XZKUIFieldControlPropsWithCallback,
  XZKUIFieldControlPropsWithElement,
  XZKUIFieldProps,
} from './field.types';
import type { ComponentProps, ElementType, ForwardedRef, ReactNode } from 'react';

const XZKUIField = forwardRef(function XZKUIField(
  { children, label, labelValue, error, errorValue, hint, hintValue, ...rest }: XZKUIFieldProps,
  ref: ForwardedRef<HTMLDivElement>,
) {
  const uniqId = useId();
  const id = label ? `field${uniqId}` : undefined;

  return (
    <XZKUIFieldContext.Provider value={{ error: Boolean(error), id }}>
      <Styled.Root {...rest} ref={ref}>
        <FieldRow titleAlias="label" htmlFor={id} title={label} value={labelValue} />
        {children}
        <FieldRow
          className={clsx([error && xzkuiFieldClasses.error])}
          title={error}
          value={errorValue}
        />
        <FieldRow title={hint} value={hintValue} />
      </Styled.Root>
    </XZKUIFieldContext.Provider>
  );
});

function Control(props: XZKUIFieldControlPropsWithCallback): ReactNode;
function Control(props: XZKUIFieldControlPropsDefault): ReactNode;
function Control<T extends ElementType>(props: XZKUIFieldControlPropsWithElement<T>): ReactNode;
function Control<T extends ElementType>({ render, ...props }: XZKUIFieldControlProps<T>) {
  const context = useXZKUIFieldContext();

  if (typeof render === 'function') {
    return (render as XZKUIFieldContextCallback)(context);
  }

  return createElement(render ?? XZKUIInput, { ...context, ...props });
}

type FieldRowPropsBase = {
  title?: ReactNode;
  value?: ReactNode;
  className?: string;
};

type FieldRowProps<T extends ElementType = 'div'> = Omit<
  ComponentProps<T>,
  keyof FieldRowPropsBase
> &
  FieldRowPropsBase & {
    titleAlias?: T;
  };

function FieldRow<T extends ElementType = 'div'>({
  title,
  value,
  titleAlias,
  className,
  ...rest
}: FieldRowProps<T>) {
  if (!title && !value) return null;

  return (
    <Styled.Row className={className}>
      {title && (
        <Styled.RowTitle as={titleAlias} {...rest}>
          {title}
        </Styled.RowTitle>
      )}
      {value && <Styled.RowValue>{value}</Styled.RowValue>}
    </Styled.Row>
  );
}

type XZKUIFieldType = typeof XZKUIField & {
  Control: typeof Control;
};

Object.assign(XZKUIField, { Control });

export default XZKUIField as XZKUIFieldType;
