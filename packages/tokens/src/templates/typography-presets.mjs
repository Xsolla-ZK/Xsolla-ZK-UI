/**
 * @param {object} data
 * @returns {string}
 */
function generatePresetsFile(data, separator = '/') {
  return `
    import type { TextStyle } from '@tamagui/core';

    const presetMapping = ${JSON.stringify(data, null, 2)};

    type PresetKeysUnion = keyof typeof presetMapping;

    type SplitKey<T extends string> = T extends \`\${infer First}${separator}\${infer Rest}\`
      ? [First, ...SplitKey<Rest>]
      : [T];

    type PresetTuple = SplitKey<PresetKeysUnion>;

    function getTypographyPreset(preset: PresetKeysUnion): TextStyle {
      const [category, size, variant] = preset.split('${separator}') as PresetTuple;

      const extra = presetMapping[preset];

      if (!extra) {
        throw new Error(\`Unknown preset type: \${category}\`);
      }

      return {
        fontFamily: \`$\${category}\`,
        fontSize: \`$\${size}\`,
        fontWeight: \`$\${variant}\`,
        lineHeight: \`$\${size}\`,
        ...extra,
      };
    }

    export default getTypographyPreset;
  `;
}

export default generatePresetsFile;
