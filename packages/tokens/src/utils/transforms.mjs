import transformTypographyToFonts from '../tamagui/typography.mjs';
import transformMedia from '../tamagui/media.mjs';
import { getArgValue } from './helpers.mjs';
import transformGroupComponents, {
  transformGroupComponentsSource,
} from '../tamagui/components.mjs';

const transformMap = {
  object: {},
  tamagui: {
    media: transformMedia,
    typography: transformTypographyToFonts,
  },
};

const transformGroupMap = {
  object: {},
  tamagui: {
    components: {
      flatten: false,
      postfix: 'Component',
      values: transformGroupComponents,
    },
    shared: {
      values: transformGroupComponentsSource,
    },
  },
};

/**
 * @returns {object}
 */
export function getTransform() {
  return transformMap[getArgValue('format')];
}

/**
 * @returns {object}
 */
export function getTransformGroup() {
  return transformGroupMap[getArgValue('format')];
}
