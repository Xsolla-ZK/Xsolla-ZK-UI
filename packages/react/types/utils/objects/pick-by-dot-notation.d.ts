type DeepPick<T, K extends string> = K extends `${infer First}.${infer Rest}` ? First extends keyof T ? DeepPick<T[First], Rest> : undefined : K extends keyof T ? T[K] : undefined;
export declare function pickByDotNotation<T, K extends string>(obj: T, path: K): DeepPick<T, K>;
export {};
//# sourceMappingURL=pick-by-dot-notation.d.ts.map