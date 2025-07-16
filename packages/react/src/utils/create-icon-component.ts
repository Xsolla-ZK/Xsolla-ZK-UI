import { createElement, isValidElement, useMemo } from 'react';
import { cloneElement } from 'react';
import { getComponentsConfig } from './components-config';
import { pickByDotNotation } from './objects/pick-by-dot-notation';
import type { ComponentsConfig } from './components-config';
import type { XORIconProps } from '../types/icon';
import type { ColorTokens, SizeTokens } from '@tamagui/core';
import type { createStyledContext } from '@tamagui/core';
import type { IconProps } from '@tamagui/helpers-icon';

/**
 * Factory for creating icon components
 * @param context - Context that will be used to get values
 * @param componentName - Name of the component
 * @param configKey - Key of the component in the components config
 * @param extra - Extra options
 * @returns Icon component
 */
export function createIconComponent<ContextType extends { size: string }, ConfigKey extends string>(
  componentName: string,
  context: ReturnType<typeof createStyledContext<ContextType>>,
  configKey: ConfigKey,
  extra: {
    getColorFn?: (ctx: ContextType) => ColorTokens;
    props?: Omit<XORIconProps, 'icon' | 'children'>;
  } = {},
) {
  const { getColorFn = () => '$color' } = extra;

  return function IconComponent({ children, icon, ...rest }: XORIconProps) {
    const ctx = context.useStyledContext();

    if (!ctx) {
      throw new Error(
        `Xsolla-ZK UI: ${componentName}Context is missing. ${componentName} parts must be placed within <${componentName}>.`,
      );
    }

    const config = getComponentsConfig();
    const componentConfig = useMemo(
      () =>
        configKey.includes('.')
          ? pickByDotNotation(config, configKey)
          : config[configKey as keyof ComponentsConfig],
      [config],
    );

    const componentProps = componentConfig
      ? ((componentConfig as Record<string, unknown>)[ctx.size] as
          | { icon: { size: SizeTokens } }
          | undefined)
      : undefined;

    if (!componentProps) {
      throw new Error(
        `Xsolla-ZK UI: ${componentName} component props for size ${ctx.size} not found.`,
      );
    }

    if (icon) {
      return createElement(icon, {
        // name: componentName,
        size: componentProps.icon.size,
        color: getColorFn(ctx),
        flexGrow: 0,
        flexShrink: 0,
        flexBasis: 'auto',
        ...extra.props,
        ...rest,
      } as IconProps);
    }

    return isValidElement(children)
      ? cloneElement(children, {
          // name: componentName,
          size: componentProps.icon.size,
          color: getColorFn(ctx),
          flexGrow: 0,
          flexShrink: 0,
          flexBasis: 'auto',
          ...extra.props,
          ...rest,
        } as {})
      : null;
  };
}
