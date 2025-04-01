import { createAnimations } from '@tamagui/animations-css';

const easingFunctions = {
  easeOutQuad: 'cubic-bezier(0.11, 0, 0.5, 0)',
  pop: 'cubic-bezier(0.39, 0.57, 0.56, 1)',
};

export const animations = createAnimations({
  slow: 'ease-in 450ms',
  state: `${easingFunctions.easeOutQuad} 100ms`,
  pop: `${easingFunctions.pop} 100ms`,

  spin: {
    keyframes: {
      '0%': {
        strokeDasharray: '0 150',
        strokeDashoffset: '150',
      },
      '50%': {
        strokeDasharray: '18 150',
        strokeDashoffset: '150',
      },
      '75%': {
        strokeDasharray: '18 150',
        strokeDashoffset: '112',
      },
      '100%': {
        strokeDasharray: '0 150',
        strokeDashoffset: '75',
      },
    },
  },
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
