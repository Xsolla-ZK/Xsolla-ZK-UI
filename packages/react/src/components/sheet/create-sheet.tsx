import { useComposedRefs } from '@tamagui/compose-refs';
import { useIsomorphicLayoutEffect } from '@tamagui/constants';
import { Stack } from '@tamagui/core';
import { composeEventHandlers, withStaticProperties } from '@tamagui/helpers';
import { resolveViewZIndex } from '@tamagui/portal';
import { RemoveScroll } from '@tamagui/remove-scroll';
import { useDidFinishSSR } from '@tamagui/use-did-finish-ssr';
import { StackZIndexContext } from '@tamagui/z-index-stack';
import {
  SHEET_COMPONENT_NAME,
  SHEET_COVER_COMPONENT_NAME,
  SHEET_HANDLE_COMPONENT_NAME,
  SHEET_OVERLAY_COMPONENT_NAME,
} from '@xsolla-zk/constants';
import { forwardRef, useMemo } from 'react';
import { Platform } from 'react-native';
import { getNativeSheet } from './native-sheet';
import { SheetImplCustom } from './sheet-impl-custom';
import { SheetScrollView } from './sheet-scroll-view';
import { useSheetContext } from './sheet.context';
import { useSheetController, useSheetOffscreenSize } from './sheet.hooks';
import type {
  SheetFrame as SheetFrameType,
  SheetHandle as SheetHandleType,
  SheetOverlay as SheetOverlayType,
} from './sheet.styled';
import type { SheetProps, SheetScopedProps } from './sheet.types';
import type {
  GetProps,
  StackProps,
  TamaguiComponent,
  TamaguiComponentExpectingVariants,
  TamaguiElement,
} from '@tamagui/core';
import type { ForwardedRef } from 'react';
import type { View } from 'react-native';

type SharedSheetProps = {
  open?: boolean;
};

type BaseProps = StackProps & SharedSheetProps;

type SheetStyledComponent = TamaguiComponentExpectingVariants<BaseProps, SharedSheetProps>;

type ExtraFrameProps = {
  /**
   * By default the sheet adds a view below its bottom that extends down another 50%,
   * this is useful if your Sheet has a spring animation that bounces "past" the top when
   * opening, preventing it from showing the content underneath.
   */
  disableHideBottomOverflow?: boolean;

  /**
   * Adds padding accounting for the currently offscreen content, so if you put a flex element inside
   * the sheet, it will always flex to the height of the visible amount of the sheet. If this is not
   * turned on, the inner content is always set to the max height of the sheet.
   */
  adjustPaddingForOffscreenContent?: boolean;
};

type SheetFrameWithExtraProps = Omit<SheetProps, 'position'> & ExtraFrameProps;

type CreateSheetProps = {
  Handle: typeof SheetHandleType;
  Content: typeof SheetFrameType;
  Overlay: typeof SheetOverlayType;
};

export function createSheet<
  E extends Record<string, TamaguiComponent> = Record<string, TamaguiComponent>,
>({ Handle, Content, Overlay }: CreateSheetProps, extra: E = {} as E) {
  const SheetHandle = Handle.styleable<GetProps<CreateSheetProps['Handle']>>(
    forwardRef(
      (
        _props: SheetScopedProps<GetProps<CreateSheetProps['Handle']>>,
        forwardedRef: ForwardedRef<TamaguiElement>,
      ) => {
        const { __scopeSheet, ...props } = _props;
        const context = useSheetContext(SHEET_HANDLE_COMPONENT_NAME, __scopeSheet);
        const composedRef = useComposedRefs<TamaguiElement>(context.handleRef, forwardedRef);

        if (context.onlyShowFrame) {
          return null;
        }

        return (
          <Handle
            ref={composedRef}
            onPress={() => {
              // don't toggle to the bottom snap position when dismissOnSnapToBottom set
              const max = context.snapPoints.length + (context.dismissOnSnapToBottom ? -1 : 0);
              const nextPos = (context.position + 1) % max;
              context.setPosition(nextPos);
            }}
            open={context.open}
            {...props}
          />
        );
      },
    ),
  );

  const SheetOverlay = Overlay.styleable<GetProps<CreateSheetProps['Overlay']>>(
    forwardRef(
      (
        _props: SheetScopedProps<GetProps<CreateSheetProps['Overlay']>>,
        forwardedRef: ForwardedRef<TamaguiElement>,
      ) => {
        const { __scopeSheet, ...props } = _props;
        const context = useSheetContext(SHEET_OVERLAY_COMPONENT_NAME, __scopeSheet);

        // this ones a bit weird for legacy reasons, we need to hoist it above <Sheet /> AnimatedView
        // so we just pass it up to context

        const element = useMemo(
          () => (
            <Overlay
              {...props}
              onPress={composeEventHandlers(
                props.onPress,
                context.dismissOnOverlayPress
                  ? () => {
                      context.setOpen(false);
                    }
                  : undefined,
              )}
              ref={forwardedRef}
            />
          ),
          [props.onPress, props.opacity, context.dismissOnOverlayPress],
        );

        useIsomorphicLayoutEffect(() => {
          context.onOverlayComponent?.(element);
        }, [element]);

        if (context.onlyShowFrame) {
          return null;
        }

        return null;
      },
    ),
    {
      disableTheme: true,
      staticConfig: {
        memo: true,
      },
    },
  );

  const SheetFrame = Content.styleable<SheetFrameWithExtraProps>(
    forwardRef(
      (
        {
          __scopeSheet,
          adjustPaddingForOffscreenContent,
          disableHideBottomOverflow,
          children,
          ...props
        }: SheetFrameWithExtraProps,
        forwardedRef: ForwardedRef<TamaguiElement>,
      ) => {
        const context = useSheetContext(SHEET_COMPONENT_NAME, __scopeSheet);
        const { hasFit, removeScrollEnabled, frameSize, contentRef, open } = context;
        const composedContentRef = useComposedRefs(forwardedRef, contentRef);
        const offscreenSize = useSheetOffscreenSize(context);

        const sheetContents = useMemo(
          () => (
            <Content
              ref={composedContentRef}
              flex={hasFit ? 0 : 1}
              height={hasFit ? undefined : frameSize}
              pointerEvents={open ? 'auto' : 'none'}
              {...props}
            >
              <StackZIndexContext zIndex={resolveViewZIndex(props.zIndex) as number}>
                {children}
              </StackZIndexContext>

              {adjustPaddingForOffscreenContent && (
                <Stack data-sheet-offscreen-pad height={offscreenSize} width="100%" />
              )}
            </Content>
          ),
          [open, props, frameSize, offscreenSize, adjustPaddingForOffscreenContent, hasFit],
        );

        return (
          <>
            <RemoveScroll
              forwardProps
              enabled={removeScrollEnabled}
              allowPinchZoom
              shards={[contentRef]}
              // causes lots of bugs on touch web on site
              removeScrollBar={false}
            >
              {sheetContents}
            </RemoveScroll>

            {/* below frame hide when bouncing past 100% */}
            {!disableHideBottomOverflow && (
              <Content
                {...props}
                componentName={SHEET_COVER_COMPONENT_NAME}
                children={null}
                position="absolute"
                bottom="-100%"
                zIndex={-1}
                height={context.frameSize}
                left={0}
                right={0}
                borderWidth={0}
                borderRadius={0}
                shadowOpacity={0}
              />
            )}
          </>
        );
      },
    ),
  );

  const Sheet = forwardRef<View, SheetProps>((props, ref) => {
    const hydrated = useDidFinishSSR();
    const { isShowingNonSheet } = useSheetController();

    let SheetImplementation = SheetImplCustom;

    if (props.native && Platform.OS === 'ios') {
      if (process.env.TAMAGUI_TARGET === 'native') {
        const impl = getNativeSheet('ios');
        if (impl) {
          SheetImplementation = impl as TamaguiComponent<SheetProps>;
        }
      }
    }

    /**
     * Performance is sensitive here so avoid all the hooks below with this
     */
    if (isShowingNonSheet || !hydrated) {
      return null;
    }

    return <SheetImplementation {...props} ref={ref} />;
  });

  const components = {
    ...extra,
    Content: SheetFrame,
    Overlay: SheetOverlay,
    Handle: SheetHandle,
    ScrollView: SheetScrollView,
  };

  const Controlled = withStaticProperties(Sheet, components);

  return withStaticProperties(Sheet, {
    ...components,
    Controlled,
  });
}

/* -------------------------------------------------------------------------------------------------*/
