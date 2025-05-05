const path = require('path');

function camelize(str) {
  if (/^[a-z][A-Za-z0-9]*$/.test(str)) return str;
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());
}

// function defaultIndexTemplate(filePaths) {
//   const exportEntries = filePaths
//     .map(({ path: filePath, _originalPath }) => {
//       const basename = path.basename(filePath, path.extname(filePath));
//       return `${JSON.stringify(basename)}: () => import('@xsolla-zk/react/components/svg-icons/${basename}'),`;
//     })
//     .join('\n');
//   return `export const svgIconsNames = {${exportEntries}}`;
// }

function defaultIndexTemplate(filePaths) {
  const exportEntries = filePaths.map(({ path: filePath }) => {
    const basename = path.basename(filePath, path.extname(filePath));
    const exportName = /^\d/.test(basename) ? `Svg${basename}` : basename;
    return `export { default as ${camelize(exportName)} } from './${basename}'`;
  });
  return exportEntries.join('\n');
}

module.exports = defaultIndexTemplate;
