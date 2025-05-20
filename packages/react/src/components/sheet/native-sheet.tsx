/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from '@tamagui/core';
import { useEffect, useRef } from 'react';
import { View } from 'react-native';
import { SheetProvider } from './sheet.context';
import { useSheetOpenState, useSheetProviderProps } from './sheet.hooks';
import type { SheetProps } from './sheet.types';
import type { FunctionComponent } from 'react';

type SheetNativePlatforms = 'ios';

const nativeSheets: Record<SheetNativePlatforms, FunctionComponent<SheetProps> | null> = {
  ios: null,
};

export function getNativeSheet(platform: SheetNativePlatforms) {
  return nativeSheets[platform];
}

export function setupNativeSheet(
  platform: SheetNativePlatforms,
  RNIOSModal: { ModalSheetView: any; ModalSheetViewMainContent: any },
) {
  const { ModalSheetView, ModalSheetViewMainContent } = RNIOSModal;

  if (platform === 'ios') {
    nativeSheets[platform] = (props: SheetProps) => {
      const state = useSheetOpenState(props);
      const providerProps = useSheetProviderProps(props, state);
      // const { position } = providerProps
      // const { positions } = useSheetSnapPoints(providerProps)

      const { open, setOpen } = state;
      const ref = useRef<{
        presentModal: () => void;
        dismissModal: () => void;
      } | null>(null);

      useEffect(() => {
        if (open) {
          ref.current?.presentModal();
        } else {
          ref.current?.dismissModal();
        }
      }, [open]);

      function setOpenInternal(next: boolean) {
        props.onOpenChange?.(open);
        setOpen(next);
      }

      // modalContentPreferredContentSize={{
      //   mode: 'percent',
      //   percentWidth: '100%',
      //   percentHeight:
      // }}

      return (
        <>
          <SheetProvider scrollEnabled setHasScrollView={emptyFn} {...providerProps} onlyShowFrame>
            <ModalSheetView ref={ref} onModalDidDismiss={() => setOpenInternal(false)}>
              <ModalSheetViewMainContent>
                <View style={{ flex: 1 }}>{props.children}</View>
              </ModalSheetViewMainContent>
            </ModalSheetView>

            {/* for some reason select triggers wont show on native if this isn't inside the actual tree not inside implementation... */}
            {/* so just hiding it here for now... not great... */}
            <Stack position="absolute" opacity={0} pointerEvents="none" width={0} height={0}>
              {props.children}
            </Stack>
          </SheetProvider>
        </>
      );
    };
  }
}

function emptyFn() {}
