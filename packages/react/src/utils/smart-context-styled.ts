import {
  type StaticConfigPublic,
  type StylableComponent,
  type StyledContext,
  type VariantDefinitions,
} from '@tamagui/core';
import { styled } from '@tamagui/core';
import { variantWithMedia } from './variant-with-media';
import type { Prettify } from '../types';
import type { VariantSpreadFunction } from '@tamagui/core';

type TransformVariants<Variants, MediaPropsKeys extends PropertyKey> = {
  [K in keyof Variants]-?: K extends MediaPropsKeys
    ? Variants[K] extends VariantSpreadFunction<infer Props, infer Val>
      ? VariantSpreadFunction<Props, Val>
      : Variants[K]
    : Variants[K];
};

type ObjectEntries<T> = Array<[keyof T & string, T[keyof T]]>;

type VariantsWithWrapped<
  Variants extends VariantDefinitions<StylableComponent, StaticConfigPublic>,
  Ctx,
> = Ctx extends { __contextMediaProps: ReadonlyArray<infer MediaKeys> }
  ? Prettify<TransformVariants<Variants, MediaKeys & string>>
  : Variants;

export function smartContextStyled<
  ParentComponent extends StylableComponent,
  StyledConfig extends StaticConfigPublic,
  Variants extends VariantDefinitions<ParentComponent, StyledConfig>,
  Context extends StyledContext & { __contextMediaProps?: readonly string[] },
>(
  ComponentIn: ParentComponent,
  options?: Omit<
    NonNullable<Parameters<typeof styled<ParentComponent, StyledConfig, Variants>>[1]>,
    'context'
  > & {
    context?: Context;
  },
  staticConfig?: StyledConfig,
): ReturnType<typeof styled<ParentComponent, StyledConfig, Variants>> {
  if (options?.context && '__contextMediaProps' in options.context) {
    const mediaPropsSet = new Set(options.context.__contextMediaProps);

    const variantsWithMedia = (
      Object.entries(options.variants ?? {}) as ObjectEntries<Variants>
    ).reduce<Variants>((acc, [key, value]) => {
      if (mediaPropsSet.has(key) && typeof value === 'function') {
        (acc as Record<string, unknown>)[key] = variantWithMedia(
          value as VariantSpreadFunction<Record<string, unknown>, unknown>,
        );
      } else {
        (acc as Record<string, unknown>)[key] = value;
      }
      return acc;
    }, {} as Variants);

    return styled(
      ComponentIn,
      {
        ...options,
        variants: variantsWithMedia,
      } as never,
      staticConfig,
    );
  }

  return styled(ComponentIn, options as never, staticConfig);
}
