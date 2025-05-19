/* eslint-disable max-lines */
/* forked from @tamagui/accordion */
/* https://github.com/tamagui/tamagui/blob/main/code/ui/accordion/src/Accordion.tsx */

import { createCollection } from '@tamagui/collection';
import { useComposedRefs } from '@tamagui/compose-refs';
import { isWeb } from '@tamagui/constants';
import { Stack, useEvent, View } from '@tamagui/core';
import { composeEventHandlers, withStaticProperties } from '@tamagui/helpers';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { forwardRef, useCallback, useId, useRef, useState } from 'react';
import {
  ACCORDION_CONTEXT,
  ACCORDION_HEADER_NAME,
  ACCORDION_KEYS,
  ACCORDION_NAME,
} from './accordion.constants';
import {
  AccordionCollapsibleContext,
  AccordionImplContext,
  AccordionItemContext,
  AccordionValueContext,
} from './accordion.context';
import {
  AccordionContentFrame,
  AccordionHeaderFrame,
  AccordionItemFrame,
  AccordionTriggerFrame,
} from './accordion.styled';
import type {
  AccordionContentProps,
  AccordionHeaderElement,
  AccordionHeaderProps,
  AccordionImplMultipleProps,
  AccordionImplProps,
  AccordionImplSingleProps,
  AccordionItemElement,
  AccordionItemProps,
  AccordionProps,
  AccordionScopedProps,
  AccordionTrigger,
  AccordionTriggerProps,
} from './accordion.types';
import type { TamaguiElement, ViewProps } from '@tamagui/core';
import type { ForwardedRef, PropsWithChildren } from 'react';
import type { LayoutChangeEvent } from 'react-native';

const [Collection, useCollection] = createCollection<AccordionTrigger>(ACCORDION_NAME);

const { Provider: AccordionImplProvider, useStyledContext: useAccordionContext } =
  AccordionImplContext;

const { Provider: AccordionValueProvider, useStyledContext: useAccordionValueContext } =
  AccordionValueContext;

const { Provider: AccordionCollapsibleProvider, useStyledContext: useAccordionCollapsibleContext } =
  AccordionCollapsibleContext;

const { Provider: AccordionItemProvider, useStyledContext: useAccordionItemContext } =
  AccordionItemContext;

/* -----------------------------------------------------------------------------------------------*/

const AccordionImpl = forwardRef<TamaguiElement, AccordionImplProps>(
  (props: AccordionScopedProps<AccordionImplProps>, forwardedRef) => {
    const {
      __scopeAccordion,
      disabled,
      dir,
      orientation = 'vertical',
      size,
      withBoard = false,
      ...accordionProps
    } = props;

    const accordionRef = useRef<TamaguiElement>(null);
    const composedRef = useComposedRefs(accordionRef, forwardedRef);
    const getItems = useCollection(__scopeAccordion || ACCORDION_CONTEXT);
    const direction = useDirection(dir);
    const isDirectionLTR = direction === 'ltr';
    const handleKeyDown = composeEventHandlers(props.onKeyDown, (event) => {
      if (!ACCORDION_KEYS.includes(event.key)) return;
      const target = event.target as HTMLElement;
      const triggerCollection = getItems().filter((item) => {
        const el = item.ref.current as { disabled?: boolean } | null;
        return !el?.disabled;
      });
      const triggerIndex = triggerCollection.findIndex((item) => item.ref.current === target);
      const triggerCount = triggerCollection.length;

      if (triggerIndex === -1) return;

      // Prevents page scroll while user is navigating
      event.preventDefault();

      let nextIndex = triggerIndex;
      const homeIndex = 0;
      const endIndex = triggerCount - 1;

      const moveNext = () => {
        nextIndex = triggerIndex + 1;
        if (nextIndex > endIndex) {
          nextIndex = homeIndex;
        }
      };

      const movePrev = () => {
        nextIndex = triggerIndex - 1;
        if (nextIndex < homeIndex) {
          nextIndex = endIndex;
        }
      };

      switch (event.key) {
        case 'Home':
          nextIndex = homeIndex;
          break;
        case 'End':
          nextIndex = endIndex;
          break;
        case 'ArrowRight':
          if (orientation === 'horizontal') {
            if (isDirectionLTR) {
              moveNext();
            } else {
              movePrev();
            }
          }
          break;
        case 'ArrowDown':
          if (orientation === 'vertical') {
            moveNext();
          }
          break;
        case 'ArrowLeft':
          if (orientation === 'horizontal') {
            if (isDirectionLTR) {
              movePrev();
            } else {
              moveNext();
            }
          }
          break;
        case 'ArrowUp':
          if (orientation === 'vertical') {
            movePrev();
          }
          break;
      }

      const clampedIndex = nextIndex % triggerCount;
      triggerCollection[clampedIndex].ref.current?.focus();
    });

    return (
      <AccordionImplProvider
        scope={__scopeAccordion}
        disabled={disabled}
        direction={dir}
        orientation={orientation}
        size={size}
        withBoard={withBoard}
      >
        <Collection.Slot __scopeCollection={__scopeAccordion || ACCORDION_CONTEXT}>
          <Stack
            data-orientation={orientation}
            ref={composedRef}
            {...accordionProps}
            {...(isWeb && {
              onKeyDown: handleKeyDown,
            })}
          />
        </Collection.Slot>
      </AccordionImplProvider>
    );
  },
);

/* -----------------------------------------------------------------------------------------------*/

const AccordionImplSingle = forwardRef<
  TamaguiElement,
  AccordionScopedProps<AccordionImplSingleProps>
>((props: AccordionScopedProps<AccordionImplSingleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    control,
    onValueChange = () => {},
    toggleable = false,
    ...accordionSingleProps
  } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue || '',
    onChange: onValueChange,
  });

  const handleItemClose = useCallback(() => setValue(''), [setValue]);

  return (
    <AccordionValueProvider
      scope={props.__scopeAccordion}
      value={value ? [value] : []}
      onItemOpen={setValue}
      onItemClose={handleItemClose}
    >
      <AccordionCollapsibleProvider scope={props.__scopeAccordion} toggleable={toggleable}>
        <AccordionImpl {...accordionSingleProps} ref={forwardedRef} />
      </AccordionCollapsibleProvider>
    </AccordionValueProvider>
  );
});

/* -----------------------------------------------------------------------------------------------*/

const AccordionImplMultiple = forwardRef<
  TamaguiElement,
  AccordionScopedProps<AccordionImplMultipleProps>
>((props: AccordionScopedProps<AccordionImplMultipleProps>, forwardedRef) => {
  const {
    value: valueProp,
    defaultValue,
    onValueChange = () => {},
    ...accordionMultipleProps
  } = props;

  const [value, setValue] = useControllableState({
    prop: valueProp,
    defaultProp: defaultValue || [],
    onChange: onValueChange,
  });

  const handleItemOpen = useCallback(
    (itemValue: string) => setValue((prevValue = []) => [...prevValue, itemValue]),
    [setValue],
  );

  const handleItemClose = useCallback(
    (itemValue: string) =>
      setValue((prevValue = []) => prevValue.filter((value) => value !== itemValue)),
    [setValue],
  );

  return (
    <AccordionValueProvider
      scope={props.__scopeAccordion}
      value={value || []}
      onItemOpen={handleItemOpen}
      onItemClose={handleItemClose}
    >
      <AccordionCollapsibleProvider scope={props.__scopeAccordion} toggleable={true}>
        <AccordionImpl {...accordionMultipleProps} ref={forwardedRef} />
      </AccordionCollapsibleProvider>
    </AccordionValueProvider>
  );
});

/* -----------------------------------------------------------------------------------------------*/

const AccordionItem = AccordionItemFrame.styleable<AccordionScopedProps<AccordionItemProps>>(
  forwardRef((props, forwardedRef: ForwardedRef<AccordionItemElement>) => {
    const { __scopeAccordion, value, ...accordionItemProps } = props;
    const accordionContext = useAccordionContext(__scopeAccordion);
    const valueContext = useAccordionValueContext(__scopeAccordion);
    const triggerId = useId();
    const open = (value && valueContext.value.includes(value)) || false;
    const disabled = accordionContext.disabled || props.disabled;

    return (
      <AccordionItemProvider
        scope={__scopeAccordion}
        open={open}
        disabled={disabled}
        triggerId={triggerId}
      >
        <AccordionItemFrame
          size={accordionContext.size}
          withBoard={accordionContext.withBoard}
          data-orientation={accordionContext.orientation}
          data-state={open ? 'open' : 'closed'}
          __scopeCollapsible={__scopeAccordion || ACCORDION_CONTEXT}
          {...accordionItemProps}
          ref={forwardedRef}
          disabled={disabled}
          open={open}
          onOpenChange={(open) => {
            if (open) {
              valueContext.onItemOpen(value);
            } else {
              valueContext.onItemClose(value);
            }
          }}
        />
      </AccordionItemProvider>
    );
  }),
);

/* -----------------------------------------------------------------------------------------------*/

const AccordionHeader = AccordionHeaderFrame.styleable(
  forwardRef<AccordionHeaderElement, AccordionHeaderProps>(
    (props: AccordionScopedProps<AccordionHeaderProps>, forwardedRef) => {
      const { __scopeAccordion, ...headerProps } = props;
      const accordionContext = useAccordionContext(__scopeAccordion);
      const itemContext = useAccordionItemContext(__scopeAccordion);

      return (
        <AccordionHeaderFrame
          data-orientation={accordionContext.orientation}
          data-state={getState(itemContext.open)}
          data-disabled={itemContext.disabled ? '' : undefined}
          size={accordionContext.size}
          withBoard={accordionContext.withBoard}
          {...headerProps}
          ref={forwardedRef}
        />
      );
    },
  ),
);

AccordionHeader.displayName = ACCORDION_HEADER_NAME;

/* -----------------------------------------------------------------------------------------------*/

const AccordionTrigger = AccordionTriggerFrame.styleable<
  AccordionScopedProps<AccordionTriggerProps>
>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const { __scopeAccordion, ...triggerProps } = props;
    const accordionContext = useAccordionContext(__scopeAccordion);
    const itemContext = useAccordionItemContext(__scopeAccordion);
    const collapsibleContext = useAccordionCollapsibleContext(__scopeAccordion);

    return (
      <Collection.ItemSlot __scopeCollection={__scopeAccordion || ACCORDION_CONTEXT}>
        <AccordionTriggerFrame
          // @ts-ignore: collapsible scope
          __scopeCollapsible={__scopeAccordion || ACCORDION_CONTEXT}
          aria-disabled={(itemContext.open && !collapsibleContext.toggleable) || undefined}
          data-orientation={accordionContext.orientation}
          id={itemContext.triggerId}
          {...triggerProps}
          ref={forwardedRef}
        />
      </Collection.ItemSlot>
    );
  }),
);

/* -----------------------------------------------------------------------------------------------*/

const AccordionContent = AccordionContentFrame.styleable<
  AccordionScopedProps<AccordionContentProps>
>(
  forwardRef((props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const { __scopeAccordion, ...contentProps } = props;
    const accordionContext = useAccordionContext(__scopeAccordion);
    const itemContext = useAccordionItemContext(__scopeAccordion);
    return (
      <AccordionContentFrame
        role="region"
        aria-labelledby={itemContext.triggerId}
        data-orientation={accordionContext.orientation}
        size={accordionContext.size}
        withBoard={accordionContext.withBoard}
        // @ts-ignore: collapsible scope
        __scopeCollapsible={__scopeAccordion || ACCORDION_CONTEXT}
        {...contentProps}
        ref={forwardedRef}
      />
    );
  }),
);

/* -----------------------------------------------------------------------------------------------*/

const HeightAnimator = View.styleable<ViewProps>(
  forwardRef((props, ref: ForwardedRef<TamaguiElement>) => {
    const itemContext = useAccordionItemContext();
    const { children, ...rest } = props as PropsWithChildren<Omit<ViewProps, 'children'>>;
    const [height, setHeight] = useState(0);

    const onLayout = useEvent(({ nativeEvent }: LayoutChangeEvent) => {
      if (nativeEvent.layout.height) {
        setHeight(nativeEvent.layout.height);
      }
    });

    return (
      <View ref={ref} height={itemContext.open ? height : 0} {...rest}>
        <View position="absolute" width="100%" onLayout={onLayout}>
          {children}
        </View>
      </View>
    );
  }),
);

/* -----------------------------------------------------------------------------------------------*/

const AccordionComponent = forwardRef<TamaguiElement, AccordionScopedProps<AccordionProps>>(
  (props, forwardedRef) => {
    const { type, size = 'medium', ...accordionProps } = props;
    const singleProps = accordionProps as AccordionImplSingleProps;
    const multipleProps = accordionProps as AccordionImplMultipleProps;

    return (
      <Collection.Provider __scopeCollection={props.__scopeAccordion || ACCORDION_CONTEXT}>
        {type === 'multiple' ? (
          <AccordionImplMultiple size={size} {...multipleProps} ref={forwardedRef} />
        ) : (
          <AccordionImplSingle size={size} {...singleProps} ref={forwardedRef} />
        )}
      </Collection.Provider>
    );
  },
);

AccordionComponent.displayName = ACCORDION_NAME;

/* -----------------------------------------------------------------------------------------------*/

function getState(open?: boolean) {
  return open ? 'open' : 'closed';
}

export const Accordion = withStaticProperties(AccordionComponent, {
  Trigger: AccordionTrigger,
  Header: AccordionHeader,
  Content: AccordionContent,
  Item: AccordionItem,
  HeightAnimator: HeightAnimator,
});
