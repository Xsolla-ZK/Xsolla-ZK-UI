const tokensStorage = new Map();

export function setTokensStorage(key, value) {
  tokensStorage.set(key, value);
}

export function getTokensStorage() {
  return tokensStorage;
}
