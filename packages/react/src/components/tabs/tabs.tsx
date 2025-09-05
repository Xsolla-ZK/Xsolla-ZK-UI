// rework tamagui implementation of Tabs component - @tamagui/tabs based
// https://github.com/tamagui/tamagui/blob/main/code/ui/tabs
/* eslint-disable max-lines */

import { AnimatePresence } from '@tamagui/animate-presence';
import {
  composeEventHandlers,
  composeRefs,
  isWeb,
  useEvent,
  withStaticProperties,
} from '@tamagui/core';
import { RovingFocusGroup } from '@tamagui/roving-focus';
import { ScrollView } from '@tamagui/scroll-view';
import { useControllableState } from '@tamagui/use-controllable-state';
import { useDirection } from '@tamagui/use-direction';
import { TABS_CONTEXT } from '@xsolla-zk/constants';
import { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { useStyledMediaContext } from '../../hooks';
import {
  TabsContentFrame,
  TabsContext,
  TabsFrame,
  TabsListFrame,
  TabsListIndicator,
  TabsTabContent,
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
import type { ScrollViewProps } from '@tamagui/scroll-view';
import type { HTMLProps, MouseEvent, ReactNode } from 'react';

const { Provider: TabsProvider, useStyledContext: useTabsContext } = TabsContext;

function makeTabId(baseId: string, value: string) {
  return `${baseId}-tab-${value}`;
}

function makeContentId(baseId: string, value: string) {
  return `${baseId}-content-${value}`;
}

const TabsComponent = TabsFrame.styleable<TabsProps>(
  (
    {
      scope,
      value: valueProp,
      onValueChange,
      defaultValue,
      dir,
      activationMode = 'manual',
      ...propsIn
    }: ScopedProps<TabsProps>,
    forwardedRef,
  ) => {
    const { orientation = 'horizontal', size = '$500', ...props } = propsIn;
    const direction = useDirection(dir);
    const [value, setValue] = useControllableState({
      prop: valueProp,
      onChange: onValueChange,
      defaultProp: defaultValue ?? '',
    });
    const [tabsCount, setTabsCount] = useState(0);
    const [tabLayout, setTabLayout] = useState<TabLayout>();
    const registerTab = useEvent(() => setTabsCount((v) => v + 1));
    const unregisterTab = useEvent(() => setTabsCount((v) => v - 1));
    const setActiveTabLayout = useEvent((layout: TabLayout) => setTabLayout(layout));
    const ref = useRef<TamaguiElement>(null);

    return (
      <TabsProvider
        componentProps={{ size, ...props }}
        scope={scope}
        baseId={useId()}
        value={value}
        onChange={setValue}
        orientation={orientation}
        dir={direction}
        activationMode={activationMode}
        registerTab={registerTab}
        tabsCount={tabsCount}
        unregisterTab={unregisterTab}
        activeTabLayout={tabLayout}
        containerRef={ref}
        setActiveTabLayout={setActiveTabLayout}
      >
        <TabsFrame
          direction={direction}
          orientation={orientation}
          data-orientation={orientation}
          {...props}
          ref={composeRefs(forwardedRef, ref)}
        />
      </TabsProvider>
    );
  },
);

const TabsList = forwardRef<TamaguiElement, TabsListProps>(
  (props: ScopedProps<TabsListProps>, forwardedRef) => {
    const { scope, loop = true, ...listProps } = props;
    const { mediaContext, ...context } = useStyledMediaContext(TabsContext, scope);
    const [hasScroll, setHasScroll] = useState(false);
    const listRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
      if (!isWeb || !listRef.current) return;

      const checkOverflow = () => {
        if (!listRef.current) return;

        const element = listRef.current;
        const isHorizontal = context.orientation === 'horizontal';

        const hasOverflow = isHorizontal
          ? element.scrollWidth > element.clientWidth
          : element.scrollHeight > element.clientHeight;

        setHasScroll(hasOverflow);
      };

      checkOverflow();

      const resizeObserver = new ResizeObserver(checkOverflow);
      resizeObserver.observe(listRef.current);

      return () => {
        if (listRef.current) {
          resizeObserver.unobserve(listRef.current);
        }
        resizeObserver.disconnect();
      };
    }, [context.orientation, context.tabsCount]);

    return (
      <ScrollWrapper hasScroll={hasScroll} horizontal={context.orientation === 'horizontal'}>
        <RovingFocusGroup
          __scopeRovingFocusGroup={scope || TABS_CONTEXT}
          orientation={context.orientation}
          dir={context.dir}
          loop={loop}
          asChild
        >
          <TabsListFrame
            role="tablist"
            aria-orientation={context.orientation}
            ref={composeRefs(forwardedRef, listRef)}
            orientation={context.orientation}
            {...mediaContext}
            {...listProps}
          >
            {listProps.children}
            <AnimatePresence>
              {context.activeTabLayout && (
                <TabsListIndicator
                  {...mediaContext}
                  orientation={context.orientation}
                  {...(context.orientation === 'horizontal'
                    ? {
                        width: context.activeTabLayout?.width,
                        x: context.activeTabLayout?.x,
                      }
                    : {
                        height: context.activeTabLayout?.height,
                        y: context.activeTabLayout?.y,
                      })}
                />
              )}
            </AnimatePresence>
          </TabsListFrame>
        </RovingFocusGroup>
      </ScrollWrapper>
    );
  },
);

type WithScrollProps = ScrollViewProps & {
  hasScroll?: boolean;
  children: ReactNode;
};

function ScrollWrapper({ children, hasScroll = false, ...props }: WithScrollProps) {
  if (!hasScroll) return <>{children}</>;
  return <ScrollView {...props}>{children}</ScrollView>;
}

const TabsTab = TabsTabFrame.styleable<TabsTabProps>(
  (props: ScopedProps<TabsTabProps>, forwardedRef) => {
    const {
      scope,
      value,
      disabled = false,
      onInteraction,
      disableActiveTheme,
      ...tabProps
    } = props;
    const { mediaContext, ...context } = useStyledMediaContext(TabsContext, scope);
    const tabId = makeTabId(context.baseId, value);
    const contentId = makeContentId(context.baseId, value);
    const isSelected = value === context.value;
    const [layout, setLayout] = useState<TabLayout | null>(null);
    const tabRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
      context.registerTab();
      return () => context.unregisterTab();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

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
        context.setActiveTabLayout(layout);
      }
    }, [isSelected, value, layout]);

    const [hovered, setHovered] = useState(false);
    const [focused, setFocused] = useState(false);

    return (
      <RovingFocusGroup.Item
        __scopeRovingFocusGroup={scope || TABS_CONTEXT}
        asChild
        tabIndex={disabled ? -1 : 0}
        theme={isSelected && !disableActiveTheme ? 'active' : null}
        active={isSelected}
      >
        <TabsTabFrame
          onLayout={(event) => {
            if (!isWeb) {
              setLayout(event.nativeEvent.layout);
            }
          }}
          onHoverIn={composeEventHandlers(props.onHoverIn, () => {
            setHovered(true);
            if (layout) {
              onInteraction?.('hover', layout);
            }
          })}
          onHoverOut={composeEventHandlers(props.onHoverOut, () => {
            setHovered(false);
            onInteraction?.('hover', null);
          })}
          role="tab"
          aria-selected={isSelected}
          aria-controls={contentId}
          data-state={isSelected ? 'active' : 'inactive'}
          data-disabled={disabled ? '' : undefined}
          disabled={disabled}
          id={tabId}
          {...(isSelected && {
            forceStyle: 'focus',
          })}
          {...mediaContext}
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
              setFocused(true);
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
              setFocused(false);
              onInteraction?.('focus', null);
            }),
          })}
        >
          <TabsTabContent forceStyle={hovered || focused ? 'hover' : undefined}>
            {props.children}
          </TabsTabContent>
        </TabsTabFrame>
      </RovingFocusGroup.Item>
    );
  },
  { disableTheme: true },
);

const TabsContent = TabsContentFrame.styleable<TabsContentProps>(
  (props: ScopedProps<TabsContentProps>, forwardedRef) => {
    const { scope, value, forceMount, ...contentProps } = props;
    const context = useTabsContext(scope);
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

export const Tabs = withStaticProperties(TabsComponent, {
  Tab,
  List: TabsList,
  Content: TabsContent,
});
