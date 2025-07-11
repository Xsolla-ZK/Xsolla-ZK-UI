// rework tamagui implementation of Label component @tamagui/label
// https://github.com/tamagui/tamagui/blob/main/code/ui/label/src/Label.tsx
/* eslint-disable react-hooks/rules-of-hooks */

import { useComposedRefs } from '@tamagui/compose-refs';
import { isWeb } from '@tamagui/core';
import { createContext } from '@tamagui/create-context';
import { focusFocusable } from '@tamagui/focusable';
import { LABEL_COMPONENT_NAME } from '@xsolla-zk/constants';
import { useEffect, useId, useRef, forwardRef } from 'react';
import { LabelFrame } from './label.styled';
import type { LabelProps } from './label.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, MutableRefObject } from 'react';

type LabelContextValue = {
  id?: string;
  controlRef: MutableRefObject<HTMLElement | null>;
};

const [LabelProvider, useLabelContextImpl] = createContext<LabelContextValue>(
  LABEL_COMPONENT_NAME,
  {
    id: undefined,
    controlRef: { current: null },
  },
);

export const Label = LabelFrame.styleable<LabelProps>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const { htmlFor, id: idProp, ...labelProps } = props;
    const controlRef = useRef<HTMLElement | null>(null);
    const ref = useRef(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const uniqId = useId();
    const id = idProp ?? uniqId;

    if (isWeb) {
      useEffect(() => {
        if (htmlFor) {
          const element = document.getElementById(htmlFor);
          const label = ref.current;
          if (label && element) {
            const getAriaLabel = () => element.getAttribute('aria-labelledby');
            const ariaLabelledBy = [id, getAriaLabel()].filter(Boolean).join(' ');
            element.setAttribute('aria-labelledby', ariaLabelledBy);
            controlRef.current = element;
            return () => {
              /**
               * We get the latest attribute value because at the time that this cleanup fires,
               * the values from the closure may have changed.
               */
              if (!id) return;
              const ariaLabelledBy = getAriaLabel()?.replace(id, '');
              if (ariaLabelledBy === '') {
                element.removeAttribute('aria-labelledby');
              } else if (ariaLabelledBy) {
                element.setAttribute('aria-labelledby', ariaLabelledBy);
              }
            };
          }
        }
      }, [id, htmlFor]);
    }

    return (
      <LabelProvider id={id} controlRef={controlRef}>
        <LabelFrame
          id={id}
          htmlFor={htmlFor}
          {...labelProps}
          ref={composedRefs}
          onMouseDown={(event) => {
            props.onMouseDown?.(event);
            // prevent text selection when double clicking label
            if (!event.defaultPrevented && event.detail > 1) {
              event.preventDefault();
            }
          }}
          onPress={(event) => {
            props.onPress?.(event);

            if (isWeb) {
              if (htmlFor || !controlRef.current || event.defaultPrevented) return;
              const isClickingControl = controlRef.current.contains(
                event.target as unknown as Node,
              );
              // Ensure event was generated by a user action
              // https://developer.mozilla.org/en-US/docs/Web/API/Event/isTrusted
              const isUserClick = event.isTrusted === true;
              /**
               * When a label is wrapped around the control it labels, we trigger the appropriate events
               * on the control when the label is clicked. We do nothing if the user is already clicking the
               * control inside the label.
               */
              if (!isClickingControl && isUserClick) {
                controlRef.current.click();
                controlRef.current.focus();
              }
            } else {
              if (props.htmlFor) {
                focusFocusable(props.htmlFor);
              }
            }
          }}
        />
      </LabelProvider>
    );
  }),
);

export const useLabelContext = (element?: HTMLElement | null) => {
  const context = useLabelContextImpl('LabelConsumer');
  const { controlRef } = context;

  useEffect(() => {
    if (element) controlRef.current = element;
  }, [element, controlRef]);

  return context.id;
};
