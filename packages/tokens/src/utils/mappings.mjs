export const formatMap = {
  scss: {
    platform: 'css',
    extension: 'scss',
    transforms: ['name/kebab'],
    format: 'scss/variables',
  },
  css: {
    platform: 'css',
    extension: 'css',
    transforms: ['name/kebab'],
    format: 'css/variables',
  },
  object: {
    platform: 'js',
    extension: 'js',
    transforms: ['ts/resolveMath', 'dimension/size/px'],
    format: 'js/nestedObject/prettier',
  },
  tamagui: {
    platform: 'js',
    extension: 'js',
    transforms: ['ts/resolveMath', 'numeric/value'],
    format: 'js/themeFlat/prettier',
    groupFilesCompiler: {
      theme: 'singleton',
      platform: {
        format: 'js/nestedObject/prettier',
      },
    },
    groupVariantFilesCompiler: {
      typography: 'manual',
    },
  },
};
