import { type StaticConfigPublic, type StylableComponent, type StyledContext, type VariantDefinitions } from '@tamagui/core';
import { styled } from '@tamagui/core';
export declare function smartContextStyled<ParentComponent extends StylableComponent, StyledConfig extends StaticConfigPublic, Variants extends VariantDefinitions<ParentComponent, StyledConfig>, Context extends StyledContext & {
    __contextMediaProps?: readonly string[];
}>(ComponentIn: ParentComponent, options?: Omit<NonNullable<Parameters<typeof styled<ParentComponent, StyledConfig, Variants>>[1]>, 'context'> & {
    context?: Context;
}, staticConfig?: StyledConfig): ReturnType<typeof styled<ParentComponent, StyledConfig, Variants>>;
//# sourceMappingURL=smart-context-styled.d.ts.map