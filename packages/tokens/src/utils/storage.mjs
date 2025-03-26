const tokensStorage = new Map();
const breakpointsStorage = new Map();

export function setTokensStorage(key, value) {
  tokensStorage.set(key, value);
}

export function getTokensStorage() {
  return tokensStorage;
}

export function setBreakpointsStorage(key, value) {
  breakpointsStorage.set(key, value);
}

export function getBreakpointsStorage() {
  return breakpointsStorage;
}
