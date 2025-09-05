import {
  type GetProps,
  type StyledContext,
  type TamaguiComponent,
  type TamaguiElement,
} from '@tamagui/core';
import { createElement, useMemo } from 'react';
import { useStyledMediaContext } from '../hooks';
import type { ForwardedRef, ReactNode } from 'react';

export function withStyledMediaContext<
  T extends TamaguiComponent,
  C extends StyledContext & { __contextMediaProps: string[] },
>(StyledComponent: T, context: C, contextScope?: string) {
  const variants = StyledComponent.staticConfig.variants ?? {};

  for (const prop in context.props) {
    if (!(prop in variants)) {
      variants[prop] = {};
    }
  }

  return StyledComponent.styleable<GetProps<T>>(
    ({ children, scope = contextScope, ...props }, ref: ForwardedRef<TamaguiElement>) => {
      const { mediaContext, ...otherProps } = useStyledMediaContext(context, scope as string);
      const onlyNeededProps = useMemo(
        () =>
          Object.keys(variants).reduce(
            (acc, key) => {
              if (otherProps[key as keyof typeof otherProps]) {
                acc[key as keyof typeof otherProps] = otherProps[key as keyof typeof otherProps];
              }
              return acc;
            },
            {} as typeof otherProps,
          ),
        [otherProps],
      );

      return createElement(
        StyledComponent,
        { ...mediaContext, ...onlyNeededProps, ...props, ref },
        children as ReactNode,
      );
    },
    {
      disableTheme: true,
    },
  );
}
