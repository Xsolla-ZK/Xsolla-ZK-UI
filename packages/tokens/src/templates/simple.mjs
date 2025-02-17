import generateFileHeader from './header.mjs';

/**
 * @param {object} data
 * @param {string} key
 * @returns {string}
 */
function generateSimpleFile(data, key) {
  return `
    ${generateFileHeader()}

    const ${key} = ${JSON.stringify(data, null, 2)};
    export default ${key};
  `;
}

export default generateSimpleFile;
