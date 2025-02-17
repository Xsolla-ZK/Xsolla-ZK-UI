import prettier from 'prettier';
import prettierConfig from '../../prettier.config.mjs';

/**
 * @param {string} content
 * @param {boolean} ts
 * @returns {Promise<string>}
 */
export async function formatJS(content, ts) {
  return await prettier.format(content, {
    semi: prettierConfig.semi,
    singleQuote: prettierConfig.singleQuote,
    trailingComma: prettierConfig.trailingComma,
    parser: ts ? 'typescript' : 'babel',
  });
}
