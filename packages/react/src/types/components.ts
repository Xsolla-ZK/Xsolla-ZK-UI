import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  RefAttributes,
} from 'react';

export type XZKUIPolymorphicProps<T extends ElementType, AdditionalProps = object> = {
  as?: T;
} & AdditionalProps &
  Omit<ComponentPropsWithoutRef<T>, keyof AdditionalProps>;

export type XZKUIPolymorphicRef<T extends ElementType> = ComponentPropsWithRef<T>['ref'];
export type XZKUIPolymorphicForwardedRef<T extends ElementType> = ForwardedRef<
  XZKUIPolymorphicRef<T>
>;

export type XZKUIPolymorphicComponent<Props = object> = {
  <T extends ElementType>(
    props: XZKUIPolymorphicProps<T, Props> & RefAttributes<ComponentPropsWithRef<T>['ref']>,
  ): JSX.Element | null;
};
