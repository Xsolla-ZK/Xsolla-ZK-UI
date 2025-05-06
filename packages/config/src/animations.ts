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
});
