import { createAnimations } from '@tamagui/animations-css';

const easingFunctions = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
};

const animations = createAnimations({
  state: `${easingFunctions.easeOutQuad} 100ms`,
});

export default animations;
