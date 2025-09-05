import { Stack, Text } from '@tamagui/core';
import { TOOLTIP_COMPONENT_NAME } from '@xsolla-zk/constants';
import { getComponentsConfig, getMappedStyles, smartContextStyled } from '../../utils';

function getComponentFrameStyles() {
  const config = getComponentsConfig();
  const componentProps = config.tooltip;

  return getMappedStyles(componentProps.frame);
}

function getComponentTextStyles() {
  const config = getComponentsConfig();
  const componentProps = config.tooltip;

  return getMappedStyles(componentProps.label);
}

export const TooltipFrame = smartContextStyled(Stack, {
  name: TOOLTIP_COMPONENT_NAME,
  backgroundColor: '$background',
  borderWidth: 1,
  borderColor: '$borderColor',
  ...getComponentFrameStyles(),
});

export const TooltipText = smartContextStyled(Text, {
  name: TOOLTIP_COMPONENT_NAME,
  color: '$color',
  ...getComponentTextStyles(),
});
