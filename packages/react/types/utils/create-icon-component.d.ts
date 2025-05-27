import type { XORIconProps } from '../types/icon';
import type { ColorTokens } from '@tamagui/core';
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
export declare function createIconComponent<ContextType extends {
    size: string;
}, ConfigKey extends string>(componentName: string, context: ReturnType<typeof createStyledContext<ContextType>>, configKey: ConfigKey, extra?: {
    getColorFn?: (ctx: ContextType) => ColorTokens;
    props?: Omit<XORIconProps, 'icon' | 'children'>;
}): ({ children, icon, ...rest }: XORIconProps) => import("react").ReactElement<unknown, string | import("react").JSXElementConstructor<any>> | import("react").FunctionComponentElement<IconProps> | null;
//# sourceMappingURL=create-icon-component.d.ts.map