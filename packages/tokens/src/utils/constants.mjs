import path from 'path';

export const ROOT_DIR = process.env.XSOLLA_ZK_TOKENS_ROOT_DIR || process.cwd();
export const GENERATED_FILES_LOG = '.generated-tokens-files.json';
export const GENERATED_FILES_PATH = path.join(ROOT_DIR, 'node_modules', GENERATED_FILES_LOG);
export const GENERATED_FILES_VALIDITY_PERIOD_MS = 24 * 60 * 60 * 1000; // Validity period of the list of files - 24 hours

export const VALID_PROPS = {
  borderRadius: true,
  borderTopLeftRadius: true,
  borderTopRightRadius: true,
  borderBottomLeftRadius: true,
  borderBottomRightRadius: true,
  width: true,
  height: true,
  minWidth: true,
  minHeight: true,
  maxWidth: true,
  maxHeight: true,
  gap: true,
  columnGap: true,
  rowGap: true,
  margin: true,
  marginBottom: true,
  marginHorizontal: true,
  marginLeft: true,
  marginRight: true,
  marginTop: true,
  marginVertical: true,
  padding: true,
  paddingBottom: true,
  paddingLeft: true,
  paddingRight: true,
  paddingTop: true,
  paddingHorizontal: true,
  paddingVertical: true,
  borderBottomWidth: true,
  borderLeftWidth: true,
  borderRightWidth: true,
  borderTopWidth: true,
  borderWidth: true,
  size: true,
  minSize: true,
  maxSize: true,
  typography: true,
};
