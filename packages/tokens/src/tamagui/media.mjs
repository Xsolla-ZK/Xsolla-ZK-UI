import generateSimpleFile from '../templates/simple.mjs';
import { writeToBuildDir } from '../utils/files.mjs';
import { getValueRecursively } from '../utils/values.mjs';

/**
 * @param {object} breakpoints
 * @returns {object|null}
 */
function transformBreakpoints(breakpoints) {
  if (!breakpoints) return null;
  return Object.entries(breakpoints).reduce((acc, [key, value]) => {
    acc[key] = { minWidth: value };
    return acc;
  }, {});
}

/**
 * @param {object} obj
 * @returns {object|null}
 */
function findAndTransformBreakpoint(obj) {
  if (!obj || typeof obj !== 'object') return null;

  if ('breakpoint' in obj) {
    return transformBreakpoints(obj.breakpoint);
  }

  for (const key in obj) {
    const result = findAndTransformBreakpoint(obj[key]);
    if (result) return result;
  }

  return null;
}

async function transformMedia(rawData, sources, variant) {
  const mediaData = getValueRecursively(rawData, sources);
  const transformedBreakpoint = findAndTransformBreakpoint(mediaData);

  if (transformedBreakpoint) {
    await writeToBuildDir(['media', variant], generateSimpleFile(transformedBreakpoint, 'media'));
  }
}

export default transformMedia;
