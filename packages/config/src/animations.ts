import { createAnimations } from '@tamagui/animations-css';

const easingFunctions = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
};

export const animations = createAnimations({
  state: `${easingFunctions.easeOutQuad} 100ms`,
  // spin: {
  //   type: 'keyframes',
  //   keyframes: {
  //     '0%': {
  //       strokeDasharray: '0 150',
  //       strokeDashoffset: '150',
  //     },
  //     '50%': {
  //       strokeDasharray: '18 150',
  //       strokeDashoffset: '150',
  //     },
  //     '75%': {
  //       strokeDasharray: '18 150',
  //       strokeDashoffset: '112',
  //     },
  //     '100%': {
  //       strokeDasharray: '0 150',
  //       strokeDashoffset: '75',
  //     },
  //   },
  //   duration: 1000,
  //   easing: 'linear',
  //   iterationCount: 'infinite',
  // },
});
