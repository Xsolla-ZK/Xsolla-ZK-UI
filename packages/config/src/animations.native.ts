import { createAnimations } from '@tamagui/animations-moti';
import { Easing } from 'react-native-reanimated';

const easingFunctions = {
  easeOutQuad: Easing.bezier(0.11, 0, 0.5, 0),
};

export const animations = createAnimations({
  state: {
    type: 'timing',
    duration: 100,
    easing: easingFunctions.easeOutQuad,
  },
});
