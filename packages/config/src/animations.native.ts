import { createAnimations } from '@tamagui/animations-moti';
import { Easing } from 'react-native-reanimated';

const easingFunctions = {
  easeOutQuad: Easing.bezier(0.11, 0, 0.5, 0),
  pop: Easing.bezier(0.39, 0.57, 0.56, 1),
  bounceIn: Easing.bezier(0, -0.5, 1, 0.5),
  bounceOut: Easing.bezier(0.75, -0.5, 1, 1),
  bounceReturn: Easing.bezier(0, 0, 0.5, 1.25),
  fade: Easing.bezier(0.39, 0.575, 0.565, 1),
};

export const animations = createAnimations({
  state: {
    type: 'timing',
    duration: 100,
    easing: easingFunctions.easeOutQuad,
  },
  pop: {
    type: 'timing',
    duration: 100,
    easing: easingFunctions.pop,
  },
  bounceIn: {
    type: 'timing',
    duration: 120,
    easing: easingFunctions.bounceIn,
  },
  bounceOut: {
    type: 'timing',
    duration: 120,
    easing: easingFunctions.bounceOut,
  },
  bounceReturn: {
    type: 'timing',
    duration: 240,
    easing: easingFunctions.bounceReturn,
  },
  fade: {
    type: 'timing',
    duration: 120,
    easing: easingFunctions.fade,
  },
  colorChange: {
    type: 'timing',
    duration: 120,
    easing: easingFunctions.fade,
  },
  tabSwitch: {
    type: 'spring',
    damping: 30,
    mass: 1,
    stiffness: 400.1,
  },
});
