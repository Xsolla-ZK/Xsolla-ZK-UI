export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<T>;

export type RequiredOnly<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

export type KeysWithObjectValue<T> = {
  [K in keyof T]: T[K] extends object ? K : never;
}[keyof T];

export type PickByDotNotation<
  TObject,
  TPath extends string,
> = TPath extends `${infer TKey extends keyof TObject & string}.${infer TRest}`
  ? PickByDotNotation<TObject[TKey], TRest>
  : TPath extends keyof TObject
    ? TObject[TPath]
    : never;

export type KeyBuilder<T extends string, S extends string> = `${T}${Capitalize<S>}`;

export type AddPrefix<T, Prefix extends string> = {
  [K in keyof T as `${Prefix}${Capitalize<string & K>}`]: T[K];
};

export type ExcludeStartsWith<T, Prefix extends string> = T extends `${Prefix}${string}`
  ? never
  : T;
