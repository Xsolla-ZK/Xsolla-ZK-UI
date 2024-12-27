import clsx from 'clsx';
import { forwardRef, isValidElement, useMemo, type ElementType } from 'react';
import XZKUILoader from '../loader/loader';
import xzkuiButtonClasses from './button.classes';
import Styled from './button.styled';
import type { XZKUIButtonProps } from './button.types';
import type {
  XZKUIPolymorphicComponent,
  XZKUIPolymorphicForwardedRef,
  XZKUIPolymorphicProps,
} from '@xsolla-zk-ui/react/types/components';
import type { ReactNode } from 'react';

const XZKUIButton = forwardRef(function XZKUIButton<T extends ElementType>(
  props: XZKUIPolymorphicProps<T, XZKUIButtonProps>,
  ref: XZKUIPolymorphicForwardedRef<T>,
) {
  const {
    size = 500,
    variant = 'primary',
    isLoading,
    startAdornment,
    endAdornment,
    children,
    fullWidth,
    className,
    ...rest
  } = useFilterProps(props);
  return (
    <Styled.Main
      xzkuiSize={size}
      xzkuiVariant={variant}
      className={clsx([
        className,
        isLoading && xzkuiButtonClasses.loading,
        fullWidth && xzkuiButtonClasses.fullWidth,
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
}) as XZKUIPolymorphicComponent<XZKUIButtonProps>;

function renderContent(content: ReactNode, start: ReactNode, end: ReactNode) {
  return (
    <>
      {start && <Styled.Adornment>{start}</Styled.Adornment>}
      {isValidElement(content) ? content : <Styled.Text>{content}</Styled.Text>}
      {end && <Styled.Adornment>{end}</Styled.Adornment>}
    </>
  );
}

function useFilterProps<T extends ElementType>(props: XZKUIPolymorphicProps<T, XZKUIButtonProps>) {
  return useMemo(
    () =>
      props.isLoading
        ? Object.keys(props).reduce(
            (acc, key) => {
              if (!(key.startsWith('on') && typeof props[key] === 'function')) {
                acc[key as keyof XZKUIPolymorphicProps<T, XZKUIButtonProps>] =
                  props[key as keyof XZKUIPolymorphicProps<T, XZKUIButtonProps>];
              }
              return acc;
            },
            {} as XZKUIPolymorphicProps<T, XZKUIButtonProps>,
          )
        : props,
    [props],
  );
}

export default XZKUIButton;
