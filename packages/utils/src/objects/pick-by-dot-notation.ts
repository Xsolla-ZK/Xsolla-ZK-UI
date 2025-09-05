type DeepPick<T, K extends string> = K extends `${infer First}.${infer Rest}`
  ? First extends keyof T
    ? DeepPick<T[First], Rest>
    : undefined
  : K extends keyof T
    ? T[K]
    : undefined;

export function pickByDotNotation<T, K extends string>(obj: T, path: K): DeepPick<T, K> {
  return path.split('.').reduce((acc: unknown, key: string) => {
    if (acc && typeof acc === 'object' && acc !== null && key in (acc as Record<string, unknown>)) {
      return (acc as Record<string, unknown>)[key];
    }
    return undefined;
  }, obj as unknown) as DeepPick<T, K>;
}
