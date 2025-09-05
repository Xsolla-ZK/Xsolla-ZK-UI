type DeepMerge<T, U> = {
    [K in keyof T | keyof U]: K extends keyof T ? K extends keyof U ? T[K] extends object ? U[K] extends object ? DeepMerge<T[K], U[K]> : T[K] : T[K] | U[K] : T[K] : K extends keyof U ? U[K] : never;
};
export declare function deepMerge<T extends object, U extends object>(obj1: T, obj2: U): DeepMerge<T, U>;
export {};
//# sourceMappingURL=deep-merge.d.ts.map