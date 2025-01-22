import clsx from 'clsx';
import { forwardRef, isValidElement, useMemo, type ElementType } from 'react';
import XZKUILoader from '../loader/loader';
import xzkuiButtonClasses from './button.classes';
import Styled from './button.styled';
import type { ComponentButtonTypeMap } from './button.types';
import type { PolymorphicProps } from '@mui/base';
import type { OverridableComponent } from '@mui/types';
import type { ReactNode } from 'react';

// const XZKUIButton = forwardRef(function XZKUIButton<T extends ElementType>(
//   props: XZKUIPolymorphicProps<T, XZKUIButtonProps>,
//   ref: XZKUIPolymorphicForwardedRef<T>,
// ) {
const XZKUIButton = forwardRef(function XZKUIButton(props, ref) {
  const {
    size = 500,
    variant = 'primary',
    isLoading,
    bgOff,
    startAdornment,
    endAdornment,
    children,
    fullWidth,
    className,
    onClick,
    ...rest
  } = props;
  return (
    <Styled.Root
      xzkuiSize={size}
      xzkuiVariant={variant}
      className={clsx([
        className,
        isLoading && xzkuiButtonClasses.loading,
        fullWidth && xzkuiButtonClasses.fullWidth,
        bgOff && xzkuiButtonClasses.bgOff,
        (startAdornment || endAdornment) && xzkuiButtonClasses.extraSpaces,
      ])}
      onClick={!props.isLoading ? onClick : undefined}
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
    </Styled.Root>
  );
}) as OverridableComponent<ComponentButtonTypeMap>;

function renderContent(content: ReactNode, start: ReactNode, end: ReactNode) {
  return (
    <>
      {start && <Styled.Adornment>{start}</Styled.Adornment>}
      {isValidElement(content) ? content : <Styled.Text>{content}</Styled.Text>}
      {end && <Styled.Adornment>{end}</Styled.Adornment>}
    </>
  );
}

function useFilterProps<T extends ElementType>(props: PolymorphicProps<ComponentButtonTypeMap, T>) {
  return useMemo(
    () =>
      props.isLoading
        ? Object.keys(props).reduce(
            (acc, key) => {
              if (!(key.startsWith('on') && typeof props[key] === 'function')) {
                acc[key as keyof PolymorphicProps<ComponentButtonTypeMap, T>] =
                  props[key as keyof PolymorphicProps<ComponentButtonTypeMap, T>];
              }
              return acc;
            },
            {} as PolymorphicProps<ComponentButtonTypeMap, T>,
          )
        : props,
    [props],
  );
}

export default XZKUIButton;
