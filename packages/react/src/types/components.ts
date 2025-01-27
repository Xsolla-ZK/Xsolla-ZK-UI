import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ForwardedRef,
  ReactElement,
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

export type XZKUISlotComponent<TSlotComponent extends ElementType, TOverrides = object> = Partial<
  Omit<ComponentPropsWithoutRef<TSlotComponent>, keyof TOverrides>
> &
  TOverrides;

export type XZKUISlotComponentProps<TSlotComponent extends ElementType, TOverrides, TOwnerProps> =
  | (Partial<ComponentPropsWithRef<TSlotComponent>> & TOverrides)
  | ((ownerProps: TOwnerProps) => Partial<ComponentPropsWithRef<TSlotComponent>> & TOverrides);

type XZKUISlotSignature<Props = object> = {
  type: keyof JSX.IntrinsicElements;
  props: Props;
};

export type XZKUIWithSlots<T extends Record<string, XZKUISlotSignature>, TOwnerProps = object> = {
  slots?: {
    [K in keyof T]?: ElementType<
      Omit<ComponentPropsWithoutRef<T[K]['type']>, keyof T[K]['props']> & T[K]['props'],
      T[K]['type']
    >;
  };
  slotProps?: {
    [K in keyof T]?: XZKUISlotComponentProps<T[K]['type'], T[K]['props'], TOwnerProps>;
  };
};
