import path from 'path';

export const ROOT_DIR = process.env.XSOLLA_ZK_UI_TOKENS_ROOT_DIR || process.cwd();
export const GENERATED_FILES_LOG = '.generated-tokens-files.json';
export const GENERATED_FILES_PATH = path.join(ROOT_DIR, 'node_modules', GENERATED_FILES_LOG);
export const GENERATED_FILES_VALIDITY_PERIOD_MS = 24 * 60 * 60 * 1000; // Validity period of the list of files - 24 hours
