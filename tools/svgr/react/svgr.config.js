module.exports = {
  icon: true,
  dimensions: false,
  jsxRuntime: 'automatic',
  ref: true,
  outDir: './packages/react/src/components/svg-icons/',
  filenameCase: 'kebab',
  replaceAttrValues: {
    white: 'currentColor',
    black: 'currentColor',
    '#fff': 'currentColor',
    '#000': 'currentColor',
  },
  typescript: true,
  ext: 'tsx',
  svgoConfig: require('./svgo.json'),
  template: require('./template.js'),
  indexTemplate: require('./index-template.js'),
};
