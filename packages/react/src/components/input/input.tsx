import { withStaticProperties, type TamaguiElement } from '@tamagui/core';
import useChildrenArray from '@xsolla-zk-ui/react/hooks/use-children-array';
import { isValidElement, useId, useMemo, useRef, useState } from 'react';
import {
  EndAdornment,
  InputContext,
  InputElement,
  InputFrame,
  StartAdornment,
} from './input.styled';
import type { InputProps } from './input.types';
import type { ForwardedRef, ReactElement } from 'react';

const InputComponent = InputFrame.styleable<InputProps>(
  ({ size = '$500', error, children, ...props }, ref: ForwardedRef<TamaguiElement>) => {
    const childrenArray = useChildrenArray(children);
    const [focused, setFocused] = useState(false);

    const { startAdornment, endAdornment } = useMemo(() => {
      let start: ReactElement | null = null;
      let end: ReactElement | null = null;

      childrenArray.forEach((child) => {
        if (isValidElement(child)) {
          if (child.type === StartAdornment && !start) {
            start = child;
          } else if (child.type === EndAdornment && !end) {
            end = child;
          }
        }
      });

      return {
        startAdornment: start,
        endAdornment: end,
      };
    }, [childrenArray]);

    return (
      <InputFrame size={size} focused={focused} theme={error ? 'error' : undefined} ref={ref}>
        {startAdornment}
        <InputElement
          size={size}
          borderRadius={0}
          height="100%"
          padding={0}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          {...props}
        />
        {endAdornment}
      </InputFrame>
    );
  },
  {
    disableTheme: true,
  },
);

const Input = withStaticProperties(InputComponent, {
  Props: InputContext.Provider,
  StartAdornment,
  EndAdornment,
});

export default Input;
