import {
  badgeThemes,
  buttonThemes,
  loaderThemes,
  pimpleThemes,
  inputThemes,
  chipsThemes,
  flexButtonThemes,
  checkboxThemes,
  radioGroupThemes,
  richIconThemes,
  tabsThemes,
  switchThemes,
  sliderThemes,
  tabBarThemes,
  sheetThemes,
  dialogThemes,
  progressBarThemes,
  segmentedControlThemes,
  inlineInputThemes,
  toastThemes,
  cellThemes,
  listThemes,
} from './components';
export * from './components';
export * from './utils';
export * from './hooks';
export type * from './types';

const componentsTheme = {
  ...buttonThemes,
  ...badgeThemes,
  ...loaderThemes,
  ...pimpleThemes,
  ...inputThemes,
  ...chipsThemes,
  ...flexButtonThemes,
  ...checkboxThemes,
  ...radioGroupThemes,
  ...richIconThemes,
  ...tabsThemes,
  ...switchThemes,
  ...sliderThemes,
  ...tabBarThemes,
  ...sheetThemes,
  ...dialogThemes,
  ...progressBarThemes,
  ...segmentedControlThemes,
  ...inlineInputThemes,
  ...toastThemes,
  ...cellThemes,
  ...listThemes,
};

export { componentsTheme };

export * from '@tamagui/core';
