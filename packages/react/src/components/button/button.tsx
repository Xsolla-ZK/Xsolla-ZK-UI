import clsx from 'clsx';
import { forwardRef, isValidElement, useMemo, type ElementType } from 'react';
import XZKUILoader from '../loader/loader';
import xzkuiButtonClasses from './button.classes';
import Styled from './button.styled';
import type { XZKUIButtonProps } from './button.types';
import type { ForwardedRef, ReactNode } from 'react';

function renderContent(content: ReactNode, start: ReactNode, end: ReactNode) {
  return (
    <>
      {start && <Styled.Adornment>{start}</Styled.Adornment>}
      {isValidElement(content) ? content : <Styled.Text>{content}</Styled.Text>}
      {end && <Styled.Adornment>{end}</Styled.Adornment>}
    </>
  );
}

function useFilterProps<T extends ElementType>(props: XZKUIButtonProps<T>) {
  return useMemo(
    () =>
      props.isLoading
        ? Object.keys(props).reduce((acc, key) => {
            if (!(key.startsWith('on') && typeof props[key] === 'function')) {
              acc[key as keyof XZKUIButtonProps<T>] = props[key as keyof XZKUIButtonProps<T>];
            }
            return acc;
          }, {} as XZKUIButtonProps<T>)
        : props,
    [props],
  );
}

const XZKUIButton = forwardRef(function XZKUIButton<T extends ElementType>(
  props: XZKUIButtonProps<T>,
  ref: ForwardedRef<HTMLButtonElement>,
) {
  const {
    as,
    size = 'md',
    variant = 'primary',
    isLoading,
    startAdornment,
    endAdornment,
    children,
    full,
    className,
    ...rest
  } = useFilterProps(props);
  const RootComponent = rest.href || rest.to ? 'a' : (as ?? 'button');
  return (
    <Styled.Main
      slots={{ root: RootComponent }}
      size={size}
      variant={variant}
      className={clsx([
        className,
        isLoading && xzkuiButtonClasses.loading,
        full && xzkuiButtonClasses.full,
        (startAdornment || endAdornment) && xzkuiButtonClasses.extraSpaces,
      ])}
      {...rest}
      ref={ref}
    >
      {isLoading ? (
        isValidElement(isLoading) ? (
          isLoading
        ) : (
          <XZKUILoader variant={variant === 'primary' ? 'brand' : undefined} />
        )
      ) : (
        renderContent(children, startAdornment, endAdornment)
      )}
    </Styled.Main>
  );
});

export default XZKUIButton;
