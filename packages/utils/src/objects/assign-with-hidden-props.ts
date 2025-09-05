type MergeWithHidden<Base extends object, Ext extends object, K extends keyof Ext> = Base &
  Omit<Ext, K> & {
    readonly [P in K as `__${string & P}`]: Ext[P];
  };

export function assignWithHiddenProps<
  Base extends object,
  Ext extends object,
  Keys extends ReadonlyArray<keyof Ext>,
>(base: Base, ext: Ext, hidden: Keys) {
  Object.assign(base, ext);

  hidden.forEach((key) => {
    const k = key;
    const val = ext[k];

    Object.defineProperty(
      base,
      `__${String(k)}` as keyof MergeWithHidden<Base, Ext, Keys[number]>,
      {
        value: val,
        enumerable: false,
        configurable: false,
        writable: false,
      },
    );

    // eslint-disable-next-line no-param-reassign
    delete (base as Record<keyof Ext, unknown>)[k];
  });

  return base as MergeWithHidden<Base, Ext, Keys[number]>;
}
