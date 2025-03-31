const tokensStorage = new Map();
const breakpointsStorage = new Map();
const sharedStorage = new Map();

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

export function setSharedStorage(key, value) {
  sharedStorage.set(key, value);
}

export function getSharedStorage() {
  return sharedStorage;
}
