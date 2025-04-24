import { badgeTheme } from './src/components/badge/badge.theme';
import { buttonTheme } from './src/components/button/button.theme';
import { checkboxTheme } from './src/components/checkbox/checkbox.theme';
import { chipsTheme } from './src/components/chips/chips.theme';
import { flexButtonTheme } from './src/components/flex-button/flex-button.theme';
import { inputTheme } from './src/components/input/input.theme';
import { inputNewTheme } from './src/components/input-new/input-new.theme';
import { loaderTheme } from './src/components/loader/loader.theme';
import { pimpleTheme } from './src/components/pimple/pimple.theme';
import { radioGroupTheme } from './src/components/radio-group/radio-group.theme';
import { richIconTheme } from './src/components/rich-icon/rich-icon.theme';
import { tabsListIndicatorTheme, tabsTabTheme } from './src/components/tabs/tabs.theme';

const componentsTheme = {
  button: buttonTheme,
  loader: loaderTheme,
  badge: badgeTheme,
  pimple: pimpleTheme,
  input: inputTheme,
  inputNew: inputNewTheme,
  chips: chipsTheme,
  flexButton: flexButtonTheme,
  checkbox: checkboxTheme,
  radioGroup: radioGroupTheme,
  richIcon: richIconTheme,
  tabsTab: tabsTabTheme,
  tabsListIndicator: tabsListIndicatorTheme,
};

export { componentsTheme };
export { Button } from './src/components/button/button';
export { RadioGroup } from './src/components/radio-group/radio-group';
export { Label } from './src/components/label/label';
export { RichIcon } from './src/components/rich-icon/rich-icon';
export { SemanticText } from './src/components/semantic-text/semantic-text';
export { Typography } from './src/components/typography/typography';
export * from './src/utils/components-config';
export { getTypographyPreset } from './src/utils/get-typography-preset';
export { useChildrenArray } from './src/hooks/use-children-array';
export { useIconsPosition } from './src/hooks/use-icons-position';
export { createConfig } from './src/utils/create-config';
