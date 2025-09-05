import { BlurView as NativeBlurView } from '@react-native-community/blur';
import { Stack } from '@tamagui/core';
import { StyleSheet } from 'react-native';
import type { BlurViewProps } from './blur-view.types';

export function BlurView({
  children,
  blurAmount = 200,
  backgroundColor = 'rgba(0,0,0,0.1)',
  ...propsIn
}: BlurViewProps) {
  return (
    <Stack {...propsIn} overflow="hidden">
      <NativeBlurView blurAmount={blurAmount} style={StyleSheet.absoluteFillObject} />
      <Stack
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        backgroundColor={backgroundColor}
        pointerEvents="none"
      />
      {children}
    </Stack>
  );
}
