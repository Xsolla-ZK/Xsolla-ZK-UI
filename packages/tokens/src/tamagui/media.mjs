import generateSimpleFile from '../templates/simple.mjs';
import { writeToBuildDir } from '../utils/files.mjs';
import { setBreakpointsStorage } from '../utils/storage.mjs';
import { getValueRecursively } from '../utils/values.mjs';
import { capitalizeFirstLetter } from '../utils/helpers.mjs';

/**
 * @param {object} breakpoints
 * @returns {object|null}
 */
function transformBreakpoints(breakpoints) {
  if (!breakpoints) return null;

  setBreakpointsStorage(
    'order',
    Object.entries(breakpoints)
      .sort((a, b) => a[1] - b[1])
      .map(([key]) => key),
  );

  return Object.entries(breakpoints).reduce((acc, [key, value]) => {
    if (value > 0) {
      acc[key] = { minWidth: value };
      acc[`max${capitalizeFirstLetter(key)}`] = { maxWidth: value - 1 };
    }

    setBreakpointsStorage(key, value > 0 ? `$${key}` : 'base');
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
