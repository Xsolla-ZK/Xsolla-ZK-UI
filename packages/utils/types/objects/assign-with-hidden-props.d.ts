type MergeWithHidden<Base extends object, Ext extends object, K extends keyof Ext> = Base & Omit<Ext, K> & {
    readonly [P in K as `__${string & P}`]: Ext[P];
};
export declare function assignWithHiddenProps<Base extends object, Ext extends object, Keys extends ReadonlyArray<keyof Ext>>(base: Base, ext: Ext, hidden: Keys): MergeWithHidden<Base, Ext, Keys[number]>;
export {};
//# sourceMappingURL=assign-with-hidden-props.d.ts.map