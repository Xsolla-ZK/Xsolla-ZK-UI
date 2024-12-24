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
