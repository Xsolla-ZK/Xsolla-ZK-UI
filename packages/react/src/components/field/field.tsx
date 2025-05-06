import { AnimatePresence } from '@tamagui/animate-presence';
import { View, withStaticProperties } from '@tamagui/core';
import { Stack } from '@tamagui/core';
import { useMemo, useId } from 'react';
import { Input } from '../input';
import {
  FieldFrame,
  FieldHint,
  FieldHintValue,
  FieldLabel,
  FieldLabelValue,
  FieldRow,
  FieldContext,
} from './field.styled';
import type { InputProps } from '../input';
import type { FieldProps } from './field.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const ErrorComponentTypes = new Set();

const FieldControlComponent = Input.styleable<InputProps>(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const { id, error } = FieldContext.useStyledContext();
    const { asChild, ...otherProps } = props;

    return (
      <Stack asChild id={id} error={error} {...otherProps} ref={ref}>
        {props.children ? props.children : <Input />}
      </Stack>
    );
  },
);

const FieldErrorComponent = FieldHint.styleable((props, ref: ForwardedRef<TamaguiElement>) => {
  const { error } = FieldContext.useStyledContext();
  const uniqueKey = useId();

  return (
    <AnimatePresence>
      {error && (
        <FieldHint
          key={`${uniqueKey}:field-error`}
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
});

ErrorComponentTypes.add(FieldErrorComponent);

const FieldErrorValueComponent = FieldHintValue.styleable(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const { error } = FieldContext.useStyledContext();

    return (
      <AnimatePresence>
        {error && (
          <FieldHintValue
            ref={ref}
            role="alert"
            aria-live="polite"
            animation="state"
            enterStyle={{ opacity: 0, y: -5 }}
            exitStyle={{ opacity: 0, y: -5 }}
            error={error}
            {...props}
          >
            {props.children}
          </FieldHintValue>
        )}
      </AnimatePresence>
    );
  },
);

ErrorComponentTypes.add(FieldErrorValueComponent);

const FieldComponent = FieldFrame.styleable<FieldProps>(
  (props, ref: ForwardedRef<TamaguiElement>) => {
    const { id: propId, error, size, ...restProps } = props;

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
          role="group"
          aria-invalid={Boolean(error)}
          ref={ref}
          error={Boolean(error)}
        />
      </FieldContext.Provider>
    );
  },
);

const FieldLabelComponent = FieldLabel.styleable((props, ref: ForwardedRef<TamaguiElement>) => {
  const { id, size } = FieldContext.useStyledContext();
  const { id: propId, ...restProps } = props;

  return <FieldLabel htmlFor={id} size={size} {...restProps} ref={ref} />;
});

const FieldHintComponent = FieldHint.styleable((props, ref: ForwardedRef<TamaguiElement>) => (
  <AnimatePresence>
    <FieldHint
      {...props}
      error={false}
      ref={ref}
      animation="state"
      enterStyle={{ opacity: 0, y: -5 }}
      exitStyle={{ opacity: 0, y: -5 }}
    />
  </AnimatePresence>
));

const FieldHintValueComponent = FieldHintValue.styleable(
  (props, ref: ForwardedRef<TamaguiElement>) => (
    <AnimatePresence>
      <FieldHintValue
        {...props}
        error={false}
        ref={ref}
        animation="state"
        enterStyle={{ opacity: 0, y: -5 }}
        exitStyle={{ opacity: 0, y: -5 }}
      />
    </AnimatePresence>
  ),
);

export const Field = withStaticProperties(FieldComponent, {
  Row: FieldRow,
  Label: FieldLabelComponent,
  LabelValue: FieldLabelValue,
  Hint: FieldHintComponent,
  HintValue: FieldHintValueComponent,
  Error: FieldErrorComponent,
  ErrorValue: FieldErrorValueComponent,
  Control: FieldControlComponent,
});
