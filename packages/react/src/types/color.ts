import type { GetThemeValueForKey } from '@tamagui/core';
import type { OpaqueColorValue } from 'react-native';

export type ColorType = GetThemeValueForKey<'color'> | OpaqueColorValue;
