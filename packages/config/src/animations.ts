import { createAnimations } from '@tamagui/animations-css';

const easings = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
  pop: 'cubic-bezier(0.39, 0.57, 0.56, 1)',
  bounceReturn: 'cubic-bezier(0, 0, 0.5, 1.25)',
  bounceIn: 'cubic-bezier(0, -0.5, 1, 0.5)',
  bounceOut: 'cubic-bezier(0.75, -0.5, 1, 1)',
  fade: 'cubic-bezier(0.39, 0.575, 0.565, 1)',
  tabSwitch: 'cubic-bezier(0.33, 1, 0.68, 1)',
};

export const animations = createAnimations({
  state: `${easings.easeOutQuad} 100ms`,
  pop: `${easings.pop} 100ms`,
  bounceIn: `${easings.bounceIn} 120ms`,
  bounceOut: `${easings.bounceOut} 120ms`,
  bounceReturn: `${easings.bounceReturn} 240ms`,
  fade: `${easings.fade} 120ms`,
  colorChange: `${easings.fade} 120ms`,
  tabSwitch: `${easings.tabSwitch} 450ms`,
  medium: 'ease-in 300ms',
});

// import { createAnimations } from '@tamagui/animations-react-native';
// import { Easing } from 'react-native';

// const easingFunctions = {
//   easeOutQuad: Easing.bezier(0.11, 0, 0.5, 0),
//   pop: Easing.bezier(0.39, 0.57, 0.56, 1),
//   bounceIn: Easing.bezier(0, -0.5, 1, 0.5),
//   bounceOut: Easing.bezier(0.75, -0.5, 1, 1),
//   bounceReturn: Easing.bezier(0, 0, 0.5, 1.25),
//   fade: Easing.bezier(0.39, 0.575, 0.565, 1),
// };

// export const animations = createAnimations({
//   state: {
//     type: 'timing',
//     duration: 100,
//     easing: easingFunctions.easeOutQuad,
//   },
//   pop: {
//     type: 'timing',
//     duration: 100,
//     easing: easingFunctions.pop,
//   },
//   bounceIn: {
//     type: 'timing',
//     duration: 120,
//     easing: easingFunctions.bounceIn,
//   },
//   bounceOut: {
//     type: 'timing',
//     duration: 120,
//     easing: easingFunctions.bounceOut,
//   },
//   bounceReturn: {
//     type: 'timing',
//     duration: 240,
//     easing: easingFunctions.bounceReturn,
//   },
//   fade: {
//     type: 'timing',
//     duration: 120,
//     easing: easingFunctions.fade,
//   },
//   colorChange: {
//     type: 'timing',
//     duration: 120,
//     easing: easingFunctions.fade,
//   },
//   medium: {
//     type: 'timing',
//     duration: 300,
//     easing: Easing.ease,
//   },
//   tabSwitch: {
//     type: 'spring',
//     damping: 30,
//     mass: 1,
//     stiffness: 400.1,
//   },
// });
