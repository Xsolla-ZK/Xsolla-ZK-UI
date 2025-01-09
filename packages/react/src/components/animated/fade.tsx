import { animated, useSpring } from '@react-spring/web';
import { forwardRef } from 'react';
import type { XZKUIAnimatedProps } from './animated.types';

const XZKUIAnimatedFade = forwardRef<HTMLDivElement, XZKUIAnimatedProps>(
  function XZKUIAnimatedFade(props, ref) {
    const {
      in: open,
      children,
      onEnter,
      onExited,
      from,
      to,
      settings,
      ownerState,
      ...other
    } = props;
    const style = useSpring({
      from: { opacity: 0, ...from },
      to: open ? { opacity: 1, ...to } : { opacity: 0, ...from },
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
        duration: 600,
      },
      ...settings,
    });

    return (
      <animated.div ref={ref} style={style} {...other}>
        {children}
      </animated.div>
    );
  },
);

export default XZKUIAnimatedFade;
