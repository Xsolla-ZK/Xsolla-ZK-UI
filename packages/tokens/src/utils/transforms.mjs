import transformTypographyToFonts from '../tamagui/typography.mjs';
import transformMedia from '../tamagui/media.mjs';
import { getArgValue } from './helpers.mjs';

const transformMap = {
  object: {},
  tamagui: {
    media: transformMedia,
    typography: transformTypographyToFonts,
  },
};

/**
 * @returns {object}
 */
export function getTransform() {
  return transformMap[getArgValue('format')];
}
