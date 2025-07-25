import type { TypographyPresets } from '../types/typography';
import type { SizeKeys, ThemeValueGet } from '@tamagui/core';
export declare const validProps: {
    borderRadius: boolean;
    borderTopLeftRadius: boolean;
    borderTopRightRadius: boolean;
    borderBottomLeftRadius: boolean;
    borderBottomRightRadius: boolean;
    width: boolean;
    height: boolean;
    minWidth: boolean;
    minHeight: boolean;
    maxWidth: boolean;
    maxHeight: boolean;
    gap: boolean;
    columnGap: boolean;
    rowGap: boolean;
    margin: boolean;
    marginBottom: boolean;
    marginHorizontal: boolean;
    marginLeft: boolean;
    marginRight: boolean;
    marginTop: boolean;
    marginVertical: boolean;
    padding: boolean;
    paddingBottom: boolean;
    paddingLeft: boolean;
    paddingRight: boolean;
    paddingTop: boolean;
    paddingHorizontal: boolean;
    paddingVertical: boolean;
    borderBottomWidth: boolean;
    borderLeftWidth: boolean;
    borderRightWidth: boolean;
    borderTopWidth: boolean;
    borderWidth: boolean;
};
export type ValidKeys = keyof typeof validProps;
export type ValidExtraKeys = keyof typeof validExtraProps;
export type ValidBaseProps = {
    [K in ValidKeys]?: ThemeValueGet<K>;
};
export type ValidExtraProps = Partial<{
    size: ThemeValueGet<SizeKeys>;
    minSize: ThemeValueGet<SizeKeys>;
    maxSize: ThemeValueGet<SizeKeys>;
    typography: TypographyPresets;
}>;
export type ValidProps = ValidBaseProps & ValidExtraProps;
export declare const validExtraProps: {
    size: boolean;
    minSize: boolean;
    maxSize: boolean;
    typography: boolean;
};
export declare const propsMap: Record<ValidExtraKeys, ValidKeys | ValidKeys[] | ((...args: any[]) => unknown)>;
//# sourceMappingURL=valid-props.d.ts.map