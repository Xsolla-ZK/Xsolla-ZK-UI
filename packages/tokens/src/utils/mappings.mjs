import { tamaguiTransformMap } from './transforms.mjs';
import { createFormat, transformKeyFromMap, transformGroupKey } from './format.mjs';

export const formatMap = {
  object: createFormat(),
  tamagui: createFormat({
    transformKey: transformKeyFromMap,
    transformGroupKey,
    transformMap: tamaguiTransformMap,
    extension: 'ts',
    flatten: true,
  }),
};
