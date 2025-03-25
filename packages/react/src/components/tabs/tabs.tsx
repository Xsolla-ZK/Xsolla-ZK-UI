import { composeEventHandlers, composeRefs, isWeb, useEvent } from '@tamagui/core';
import { Theme } from '@tamagui/core';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useEffect, useRef, useState } from 'react';
import { TabsContext, TabsFrame, TabsTriggerFrame } from './tabs.styled';
import type { TabsProps } from './tabs.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const { useStyledContext: useTabsContext } = TabsContext;

function makeTriggerId(baseId: string, value: string) {
  return `${baseId}-trigger-${value}`;
}

function makeContentId(baseId: string, value: string) {
  return `${baseId}-content-${value}`;
}

const TabsComponent = TabsFrame.styleable<TabsProps>(function Tabs(
  props,
  forwardedRef: ForwardedRef<TamaguiElement>,
) {
  const {
    __scopeTabs,
    value: valueProp,
    onValueChange,
    defaultValue,
    orientation = 'horizontal',
    dir,
    activationMode = 'automatic',
    size = '$true',
    ...tabsProps
  } = props;
  const direction = useDirection(dir);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue ?? '',
  });
  const [triggersCount, setTriggersCount] = useState(0);
  const registerTrigger = useEvent(() => setTriggersCount((v) => v + 1));
  const unregisterTrigger = useEvent(() => setTriggersCount((v) => v - 1));

  return (
    <TabsProvider
      scope={__scopeTabs}
      baseId={useId()}
      value={value}
      onChange={setValue}
      orientation={orientation}
      dir={direction}
      activationMode={activationMode}
      size={size}
      registerTrigger={registerTrigger}
      triggersCount={triggersCount}
      unregisterTrigger={unregisterTrigger}
    >
      <TabsFrame
        direction={direction}
        //   dir={direction}
        data-orientation={orientation}
        {...tabsProps}
        ref={forwardedRef}
      />
    </TabsProvider>
  );
});

const TabsTrigger = TabsTriggerFrame.styleable((props, forwardedRef) => {
  const {
    __scopeTabs,
    value,
    disabled = false,
    onInteraction,
    disableActiveTheme,
    ...triggerProps
  } = props;
  const context = useTabsContext(__scopeTabs);
  const triggerId = makeTriggerId(context.baseId, value);
  const contentId = makeContentId(context.baseId, value);
  const isSelected = value === context.value;
  const [layout, setLayout] = useState<TabLayout | null>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const groupItemProps = useGroupItem({ disabled: !!disabled });

  useEffect(() => {
    context.registerTrigger();
    return () => context.unregisterTrigger();
  }, []);

  useEffect(() => {
    if (!triggerRef.current || !isWeb) return;

    function getTriggerSize() {
      if (!triggerRef.current) return;
      setLayout({
        width: triggerRef.current.offsetWidth,
        height: triggerRef.current.offsetHeight,
        x: triggerRef.current.offsetLeft,
        y: triggerRef.current.offsetTop,
      });
    }
    getTriggerSize();

    const observer = new ResizeObserver(getTriggerSize);
    observer.observe(triggerRef.current);

    return () => {
      if (!triggerRef.current) return;
      observer.unobserve(triggerRef.current);
    };
  }, [context.triggersCount]);

  useEffect(() => {
    if (isSelected && layout) {
      onInteraction?.('select', layout);
    }
  }, [isSelected, value, layout]);

  return (
    <Theme name={isSelected && !disableActiveTheme ? 'active' : null}>
      <RovingFocusGroup.Item
        __scopeRovingFocusGroup={__scopeTabs || TABS_CONTEXT}
        asChild
        focusable={!disabled}
        active={isSelected}
      >
        <TabsTriggerFrame
          onLayout={(event) => {
            if (!isWeb) {
              setLayout(event.nativeEvent.layout);
            }
          }}
          onHoverIn={composeEventHandlers(props.onHoverIn, () => {
            if (layout) {
              onInteraction?.('hover', layout);
            }
          })}
          onHoverOut={composeEventHandlers(props.onHoverOut, () => {
            onInteraction?.('hover', null);
          })}
          role="tab"
          aria-selected={isSelected}
          aria-controls={contentId}
          data-state={isSelected ? 'active' : 'inactive'}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          id={triggerId}
          {...(!props.unstyled && {
            size: context.size,
          })}
          {...(isSelected && {
            forceStyle: 'focus',
          })}
          {...groupItemProps}
          {...triggerProps}
          ref={composeRefs(forwardedRef, triggerRef)}
          onPress={composeEventHandlers(props.onPress ?? undefined, (event) => {
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)

            const webChecks =
              !isWeb ||
              ((event as unknown as React.MouseEvent).button === 0 &&
                (event as unknown as React.MouseEvent).ctrlKey === false);
            if (!disabled && !isSelected && webChecks) {
              context.onChange(value);
            } else {
              // prevent focus to avoid accidental activation
              event.preventDefault();
            }
          })}
          {...(isWeb && {
            type: 'button',
            onKeyDown: composeEventHandlers(
              (props as React.HTMLProps<HTMLButtonElement>).onKeyDown,
              (event) => {
                if ([' ', 'Enter'].includes(event.key)) {
                  context.onChange(value);
                  event.preventDefault();
                }
              },
            ),
            onFocus: composeEventHandlers(props.onFocus, (event) => {
              if (layout) {
                onInteraction?.('focus', layout);
              }
              // handle "automatic" activation if necessary
              // ie. activate tab following focus
              const isAutomaticActivation = context.activationMode !== 'manual';
              if (!isSelected && !disabled && isAutomaticActivation) {
                context.onChange(value);
              }
            }),
            onBlur: composeEventHandlers(props.onFocus, () => {
              onInteraction?.('focus', null);
            }),
          })}
        />
      </RovingFocusGroup.Item>
    </Theme>
  );
});
