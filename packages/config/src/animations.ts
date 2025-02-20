// import { createAnimations } from '@tamagui/animations-react-native';
import { createAnimations } from '@tamagui/animations-css';

const easingFunctions = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
};

const animations = createAnimations({
  state: `${easingFunctions.easeOutQuad} 100ms`,
});
// const animations = createAnimations({
//   easeOutQuad: {
//     damping: 15,
//     mass: 1,
//     stiffness: 200,
//     // overshootClamping: true,
//   },
// });

export default animations;
