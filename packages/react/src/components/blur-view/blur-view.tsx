import { BlurFrame } from './blur-view.styled';
import type { BlurViewProps } from './blur-view.types';

const BlurView = BlurFrame.styleable<BlurViewProps>(
  ({ children, blurAmount = 200, backgroundColor = 'rgba(0,0,0,0.1)', ...propsIn }, ref) => (
    <BlurFrame blurAmount={blurAmount} backgroundColor={backgroundColor} {...propsIn} ref={ref}>
      {children}
    </BlurFrame>
  ),
);

export { BlurView };
