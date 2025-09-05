import { AnimatePresence } from '@tamagui/animate-presence';
import { withStaticProperties } from '@tamagui/core';
import { Children, cloneElement, forwardRef, isValidElement, useId, useMemo } from 'react';
import { useChildrenArray, useStyledMediaContext } from '../../hooks';
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
  FieldHintProps,
  FieldHintValueProps,
  FieldLabelProps,
  FieldProps,
  FieldRowProps,
} from './field.types';

const FieldControlComponent = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { mediaContext, id, error } = useStyledMediaContext(FieldContext);
  const { asChild, children, ...otherProps } = props;

  const content = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, {
        id,
        error,
        ...mediaContext,
        ...otherProps,
      });
    }
    return child;
  });

  if (!content || content.length === 0) {
    return <Input id={id} error={error} {...mediaContext} {...otherProps} ref={ref} />;
  }

  return content;
});

const FieldErrorComponent = FieldHint.styleable<FieldHintProps>(
  (props, ref) => {
    const { error } = FieldContext.useStyledContext();

    return (
      <AnimatePresence>
        {error && (
          <FieldHint
            role="alert"
            aria-live="polite"
            theme="error"
            {...(process.env.XSOLLA_ZK_STAGE !== 'build'
              ? {
                  enterStyle: { opacity: 0, y: 5 },
                  exitStyle: { opacity: 0, y: -5 },
                  opacity: 1,
                  y: 0,
                  animation: 'bounceIn',
                }
              : {})}
            {...props}
            ref={ref}
          />
        )}
      </AnimatePresence>
    );
  },
  {
    disableTheme: true,
  },
);

const FieldErrorValueComponent = FieldHintValue.styleable<FieldHintValueProps>(
  (props, ref) => {
    const { error } = FieldContext.useStyledContext();

    return (
      <AnimatePresence>
        {error && (
          <FieldHintValue
            ref={ref}
            role="alert"
            aria-live="polite"
            theme="error"
            {...(process.env.XSOLLA_ZK_STAGE !== 'build'
              ? {
                  enterStyle: { opacity: 0, y: 5 },
                  exitStyle: { opacity: 0, y: -5 },
                  opacity: 1,
                  y: 0,
                  animation: 'bounceIn',
                }
              : {})}
            {...props}
          >
            {props.children}
          </FieldHintValue>
        )}
      </AnimatePresence>
    );
  },
  {
    disableTheme: true,
  },
);

const FieldComponent = FieldFrame.styleable<FieldProps>(({ id: propId, error, ...props }, ref) => {
  const generatedId = useId();
  const id = propId || generatedId;

  const value = useMemo(
    () => ({
      id,
      error,
    }),
    [id, error],
  );

  return (
    <FieldContext.Provider componentProps={props} {...value}>
      <FieldFrame
        {...props}
        role="group"
        aria-invalid={Boolean(error)}
        ref={ref}
        error={Boolean(error)}
      />
    </FieldContext.Provider>
  );
});

const FieldLabelComponent = FieldLabel.styleable<FieldLabelProps>((props, ref) => {
  const { id } = FieldContext.useStyledContext();
  const { id: propId, ...restProps } = props;

  return <FieldLabel htmlFor={id} {...restProps} ref={ref} />;
});

const FieldHintComponent = FieldHint.styleable<FieldHintProps>((props, ref) => (
  <AnimatePresence initial={false}>
    <FieldHint
      {...(process.env.XSOLLA_ZK_STAGE !== 'build'
        ? {
            animation: 'bounceIn',
            enterStyle: { opacity: 0, y: 5 },
            exitStyle: { opacity: 0, y: -5 },
          }
        : {})}
      {...props}
      ref={ref}
    />
  </AnimatePresence>
));

const FieldHintValueComponent = FieldHintValue.styleable<FieldHintValueProps>((props, ref) => (
  <AnimatePresence initial={false}>
    <FieldHintValue
      {...(process.env.XSOLLA_ZK_STAGE !== 'build'
        ? {
            animation: 'bounceIn',
            enterStyle: { opacity: 0, y: 5 },
            exitStyle: { opacity: 0, y: -5 },
          }
        : {})}
      {...props}
      ref={ref}
    />
  </AnimatePresence>
));

const FieldRowComponent = FieldRow.styleable<FieldRowProps>((props, ref) => {
  const children = useChildrenArray(props.children);
  const { mediaContext } = useStyledMediaContext(FieldContext);
  return children.length ? <FieldRow {...mediaContext} {...props} ref={ref} /> : null;
});

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
