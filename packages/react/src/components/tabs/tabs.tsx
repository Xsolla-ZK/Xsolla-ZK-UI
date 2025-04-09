// rework tamagui implementation of Tabs component - @tamagui/tabs based
// https://github.com/tamagui/tamagui/blob/main/code/ui/tabs/src/Tabs.tsx
/* eslint-disable max-lines */

import {
  composeEventHandlers,
  composeRefs,
  isWeb,
  useEvent,
  withStaticProperties,
} from '@tamagui/core';
import { useGroupItem } from '@tamagui/group';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { TABS_CONTEXT, TABS_LIST_COMPONENT_NAME } from './tabs.constants';
import {
  TabsContentFrame,
  TabsContext,
  TabsFrame,
  TabsListFrame,
  TabsListIndicator,
  TabsTabFrame,
  TabsTabIcon,
  TabsTabText,
} from './tabs.styled';
import type {
  TabLayout,
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTabProps,
} from './tabs.types';
import type { ScopedProps, TamaguiElement } from '@tamagui/core';
import type { ForwardedRef, HTMLProps, MouseEvent } from 'react';

const { Provider: TabsProvider, useStyledContext: useTabsContext } = TabsContext;

function makeTabId(baseId: string, value: string) {
  return `${baseId}-tab-${value}`;
}

function makeContentId(baseId: string, value: string) {
  return `${baseId}-content-${value}`;
}

const TabsComponent = TabsFrame.styleable<ScopedProps<TabsProps, 'Tabs'>>(function Tabs(
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
    size = '$500',
    ...tabsProps
  } = props;
  const direction = useDirection(dir);
  const [value, setValue] = useControllableState({
    prop: valueProp,
    onChange: onValueChange,
    defaultProp: defaultValue ?? '',
  });
  const [tabsCount, setTabsCount] = useState(0);
  const [activeTabLayout, setActiveTabLayout] = useState<TabLayout>();
  const registerTab = useEvent(() => setTabsCount((v) => v + 1));
  const unregisterTab = useEvent(() => setTabsCount((v) => v - 1));
  const selectActiveTabLayout = useEvent((layout: TabLayout) => setActiveTabLayout(layout));

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
      registerTab={registerTab}
      tabsCount={tabsCount}
      unregisterTab={unregisterTab}
      activeTabLayout={activeTabLayout}
      selectActiveTabLayout={selectActiveTabLayout}
    >
      <TabsFrame
        direction={direction}
        data-orientation={orientation}
        {...tabsProps}
        ref={forwardedRef}
      />
    </TabsProvider>
  );
});

const TabsList = forwardRef<TamaguiElement, ScopedProps<TabsListProps, 'Tabs'>>(
  (props, forwardedRef) => {
    const { __scopeTabs, loop = true, disablePassBorderRadius = true, ...listProps } = props;
    const context = useTabsContext(__scopeTabs);

    return (
      <RovingFocusGroup
        __scopeRovingFocusGroup={__scopeTabs || TABS_CONTEXT}
        orientation={context.orientation}
        dir={context.dir}
        loop={loop}
        asChild
      >
        <TabsListFrame
          role="tablist"
          aria-orientation={context.orientation}
          ref={forwardedRef}
          orientation={context.orientation}
          disablePassBorderRadius={disablePassBorderRadius}
          size={context.size}
          {...listProps}
        >
          {listProps.children}
          <TabsListIndicator
            width={context.activeTabLayout?.width}
            x={context.activeTabLayout?.x}
          />
        </TabsListFrame>
      </RovingFocusGroup>
    );
  },
);

const TabsTab = TabsTabFrame.styleable<ScopedProps<TabsTabProps, 'Tabs'>>(
  (props, forwardedRef: ForwardedRef<TamaguiElement>) => {
    const {
      __scopeTabs,
      value,
      disabled = false,
      onInteraction,
      disableActiveTheme,
      ...tabProps
    } = props;
    const context = useTabsContext(__scopeTabs);
    const tabId = makeTabId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const [layout, setLayout] = useState<TabLayout | null>(null);
    const tabRef = useRef<HTMLButtonElement>(null);
    const groupItemProps = useGroupItem({ disabled: !!disabled });

    useEffect(() => {
      context.registerTab();
      return () => context.unregisterTab();
    }, []);

    useEffect(() => {
      if (!tabRef.current || !isWeb) return;

      function getTabSize() {
        if (!tabRef.current) return;
        setLayout({
          width: tabRef.current.offsetWidth,
          height: tabRef.current.offsetHeight,
          x: tabRef.current.offsetLeft,
          y: tabRef.current.offsetTop,
        });
      }
      getTabSize();

      const observer = new ResizeObserver(getTabSize);
      observer.observe(tabRef.current);

      return () => {
        if (!tabRef.current) return;
        observer.unobserve(tabRef.current);
      };
    }, [context.tabsCount]);

    useEffect(() => {
      if (isSelected && layout) {
        onInteraction?.('select', layout);
        context.selectActiveTabLayout(layout);
      }
    }, [isSelected, value, layout]);

    return (
      <RovingFocusGroup.Item
        __scopeRovingFocusGroup={__scopeTabs || TABS_CONTEXT}
        asChild
        focusable={!disabled}
        active={isSelected}
        theme={isSelected && !disableActiveTheme ? 'active' : null}
      >
        <TabsTabFrame
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
          id={tabId}
          size={context.size}
          {...(isSelected && {
            forceStyle: 'focus',
          })}
          {...groupItemProps}
          {...tabProps}
          ref={composeRefs(forwardedRef, tabRef)}
          onPress={composeEventHandlers(props.onPress ?? undefined, (event) => {
            // only call handler if it's the left button (mousedown gets triggered by all mouse buttons)
            // but not when the control key is pressed (avoiding MacOS right click)

            const webChecks =
              !isWeb ||
              ((event as unknown as MouseEvent).button === 0 &&
                (event as unknown as MouseEvent).ctrlKey === false);
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
              (props as HTMLProps<HTMLButtonElement>).onKeyDown,
              (event) => {
                if ([' ', 'Enter'].includes(event.key)) {
                  context.onChange(value);
                  event.preventDefault();
                }
              },
            ),
            onFocus: composeEventHandlers(props.onFocus, (_event) => {
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
    );
  },
  { disableTheme: true },
);

const TabsContent = TabsContentFrame.styleable<ScopedProps<TabsContentProps, 'Tabs'>>(
  function TabsContent(props, forwardedRef: ForwardedRef<TamaguiElement>) {
    const { __scopeTabs, value, forceMount, ...contentProps } = props;
    const context = useTabsContext(__scopeTabs);
    const isSelected = value === context.value;
    const show = forceMount || isSelected;

    const tabId = makeTabId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);

    if (!show) {
      return null;
    }

    return (
      <TabsContentFrame
        key={value}
        data-state={isSelected ? 'active' : 'inactive'}
        data-orientation={context.orientation}
        role="tabpanel"
        aria-labelledby={tabId}
        hidden={!show}
        id={contentId}
        tabIndex={0}
        {...contentProps}
        ref={forwardedRef}
      />
    );
  },
);

const Tab = withStaticProperties(TabsTab, {
  Text: TabsTabText,
  Icon: TabsTabIcon,
});

const Tabs = withStaticProperties(TabsComponent, {
  Tab,
  List: TabsList,
  Content: TabsContent,
});

export default Tabs;
