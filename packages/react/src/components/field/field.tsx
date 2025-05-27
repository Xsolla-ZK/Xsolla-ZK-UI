import { AnimatePresence } from '@tamagui/animate-presence';
import { View, withStaticProperties } from '@tamagui/core';
import { useId, useMemo, forwardRef } from 'react';
import { useChildrenArray } from '../../hooks';
import { Input } from '../input';
import {
  FieldContext,
  FieldFrame,
  FieldHint,
  FieldHintValue,
  FieldLabel,
  FieldLabelValue,
  FieldRow,
} from './field.styled';
import type { InputProps } from '../input';
import type {
  FieldProps,
  FieldRowProps,
  FieldHintProps,
  FieldHintValueProps,
  FieldLabelProps,
} from './field.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const FieldControlComponent = Input.styleable<InputProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const { id, error, size } = FieldContext.useStyledContext();
    const { asChild, ...otherProps } = props;

    return (
      // @ts-ignore okay
      <View asChild id={id} error={error} size={size} {...otherProps} ref={ref}>
        {props.children ? props.children : <Input />}
      </View>
    );
  }),
);

const FieldErrorComponent = FieldHint.styleable<FieldHintProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const { error } = FieldContext.useStyledContext();

    return (
      <AnimatePresence>
        {error && (
          <FieldHint
            enterStyle={{ opacity: 0, y: 5 }}
            exitStyle={{ opacity: 0, y: -5 }}
            opacity={1}
            y={0}
            animation="bounceIn"
            role="alert"
            aria-live="polite"
            error={error}
            {...props}
            ref={ref}
          />
        )}
      </AnimatePresence>
    );
  }),
);

const FieldErrorValueComponent = FieldHintValue.styleable<FieldHintValueProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const { error } = FieldContext.useStyledContext();

    return (
      <AnimatePresence>
        {error && (
          <FieldHintValue
            ref={ref}
            role="alert"
            aria-live="polite"
            animation="bounceIn"
            enterStyle={{ opacity: 0, y: 5 }}
            exitStyle={{ opacity: 0, y: -5 }}
            error={error}
            {...props}
          >
            {props.children}
          </FieldHintValue>
        )}
      </AnimatePresence>
    );
  }),
);

const FieldComponent = FieldFrame.styleable<FieldProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const { id: propId, error, size = '$500', ...restProps } = props;

    const generatedId = useId();
    const id = propId || generatedId;

    const value = useMemo(
      () => ({
        id,
        error,
        size,
      }),
      [id, error, size],
    );

    return (
      <FieldContext.Provider {...value}>
        <FieldFrame
          {...restProps}
          size={size}
          role="group"
          aria-invalid={Boolean(error)}
          ref={ref}
          error={Boolean(error)}
        />
      </FieldContext.Provider>
    );
  }),
);

const FieldLabelComponent = FieldLabel.styleable<FieldLabelProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const { id, size } = FieldContext.useStyledContext();
    const { id: propId, ...restProps } = props;

    return <FieldLabel htmlFor={id} size={size} {...restProps} ref={ref} />;
  }),
);

const FieldHintComponent = FieldHint.styleable<FieldHintProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => (
    <AnimatePresence initial={false}>
      <FieldHint
        {...props}
        error={false}
        ref={ref}
        animation="bounceIn"
        enterStyle={{ opacity: 0, y: 5 }}
        exitStyle={{ opacity: 0, y: -5 }}
      />
    </AnimatePresence>
  )),
);

const FieldHintValueComponent = FieldHintValue.styleable<FieldHintValueProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => (
    <AnimatePresence initial={false}>
      <FieldHintValue
        {...props}
        error={false}
        ref={ref}
        animation="bounceIn"
        enterStyle={{ opacity: 0, y: 5 }}
        exitStyle={{ opacity: 0, y: -5 }}
      />
    </AnimatePresence>
  )),
);

const FieldRowComponent = FieldRow.styleable<FieldRowProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const children = useChildrenArray(props.children);
    return children.length ? <FieldRow {...props} ref={ref} /> : null;
  }),
);

export const Field = withStaticProperties(FieldComponent, {
  Row: FieldRowComponent,
  Label: FieldLabelComponent,
  LabelValue: FieldLabelValue,
  Hint: FieldHintComponent,
  HintValue: FieldHintValueComponent,
  Error: FieldErrorComponent,
  ErrorValue: FieldErrorValueComponent,
  Control: FieldControlComponent,
});
