import { animated, useSpring } from '@react-spring/web';
import { forwardRef } from 'react';
import type { XZKUIAnimatedProps } from './animated.types';

const XZKUIAnimatedSlideUp = forwardRef<HTMLDivElement, XZKUIAnimatedProps>(
  function XZKUIAnimatedSlideUp(props, ref) {
    const { in: open, children, onEnter, onExited, from, to, settings, ...other } = props;

    const style = useSpring({
      from: { transform: 'translateY(100%)', ...from },
      to: open ? { transform: 'translateY(0)', ...to } : { transform: 'translateY(100%)', ...from },
      onStart: () => {
        if (open && onEnter) {
          onEnter(null, true);
        }
      },
      onRest: () => {
        if (!open && onExited) {
          onExited(null, true);
        }
      },
      config: {
        tension: 170, // Equivalent to stiffness
        damping: 20, // Resistance/friction
        mass: 1,
      },
      ...settings,
    });

    return (
      <animated.div ref={ref} style={{ width: '100%', height: '100%', ...style }} {...other}>
        {children}
      </animated.div>
    );
  },
);

export default XZKUIAnimatedSlideUp;
