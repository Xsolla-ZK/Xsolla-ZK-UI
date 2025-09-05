export function shallowEqual(a: unknown, b: unknown) {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object' || !a || !b) return false;
  const aKeys = Object.keys(a);
  const bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;
  for (const k of aKeys) {
    if (a[k as keyof typeof a] !== b[k as keyof typeof b]) return false;
  }
  return true;
}
