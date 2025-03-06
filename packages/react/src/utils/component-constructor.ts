import { withStaticProperties } from '@tamagui/core';
import type { GetProps, TamaguiComponent, TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, ReactNode } from 'react';

type RenderFunction<T extends TamaguiComponent> = (
  Root: T,
  props: GetProps<T>,
  ref: ForwardedRef<TamaguiElement>,
) => ReactNode;

type OverridesProps<S = object> = {
  [K in keyof Omit<S, 'Props'> | 'Root']?: TamaguiComponent;
};

type OverrideRootType<
  OP extends OverridesProps,
  T extends TamaguiComponent,
> = OP['Root'] extends TamaguiComponent ? OP['Root'] : T;

function CreateComponent<T extends TamaguiComponent, S>(
  Root: T,
  staticProps: S,
  render: RenderFunction<T>,
) {
  const WrappedComponent = <C extends TamaguiComponent = T>(
    Component: C = Root as unknown as C,
    renderComponent: RenderFunction<C> = render as unknown as RenderFunction<C>,
  ) =>
    Component.styleable<GetProps<C>>(function WrappedComponent(
      props,
      ref: ForwardedRef<TamaguiElement>,
    ) {
      return renderComponent(Component, props, ref);
    });

  const fn = function () {
    return withStaticProperties(WrappedComponent(), staticProps);
  };

  fn.overrides = function <OP extends OverridesProps<S>>(
    overridesProps: OP,
    overridesRender?: RenderFunction<OverrideRootType<OP, T>>,
  ) {
    const { Root, ...rest } = overridesProps;
    return withStaticProperties(
      WrappedComponent(Root as OverrideRootType<OP, T>, overridesRender),
      {
        ...staticProps,
        ...rest,
      },
    );
  };

  return fn;
}

export default CreateComponent;
