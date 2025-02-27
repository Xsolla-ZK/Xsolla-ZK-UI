/**
 * @param {object} data
 * @param {string} key
 * @returns {string}
 */
function generateSimpleFile(data, key) {
  return `
    export const ${key} = ${JSON.stringify(data, null, 2)};
  `;
}

export default generateSimpleFile;
