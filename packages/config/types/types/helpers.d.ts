export type GenericMedia<T> = {
    [K in keyof T]: {
        [key: string]: number | string;
    };
};
//# sourceMappingURL=helpers.d.ts.map