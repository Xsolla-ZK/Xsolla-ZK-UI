import generateFileHeader from './header.mjs';

function generateSimpleFile(data, key) {
  return `
    ${generateFileHeader()}

    const ${key} = ${JSON.stringify(data, null, 2)};
    export default ${key};
  `;
}

export default generateSimpleFile;
