import { forwardRef, useEffect, useRef, useState } from 'react';
import { createInput } from '../input/create-input';
import { InlineInputElement } from './inline-input.styled';
import type { InlineInputProps } from './inline-input.types';
import type { StyleProp } from '@tamagui/core';
import type { ForwardedRef } from 'react';
import type {
  LayoutChangeEvent,
  NativeSyntheticEvent,
  TextInput,
  TextInputContentSizeChangeEventData,
  TextStyle,
} from 'react-native';

const InlineInputBase = createInput(InlineInputElement);

export const InlineInput = InlineInputBase.styleable(
  forwardRef((props: InlineInputProps, ref: ForwardedRef<TextInput>) => {
    const { size = '$500', style, ...rest } = props;

    const [scale, setScale] = useState(1);
    const [inputWidth, setInputWidth] = useState(0);
    const [contentWidth, setContentWidth] = useState(0);
    const [inputHeight, setInputHeight] = useState(0);
    const initialHeight = useRef(0);

    const handleLayout = (e: LayoutChangeEvent) => {
      const { width, height } = e.nativeEvent.layout;
      setInputWidth(width);

      if (initialHeight.current === 0) {
        initialHeight.current = height;
        setInputHeight(height);
      }
    };

    const handleContentSizeChange = (
      e: NativeSyntheticEvent<TextInputContentSizeChangeEventData>,
    ) => {
      setContentWidth(e.nativeEvent.contentSize.width);
    };

    useEffect(() => {
      if (inputWidth > 0 && contentWidth > 0) {
        if (contentWidth <= inputWidth) {
          setScale(1);
          return;
        }

        let newScale = inputWidth / contentWidth;

        if (size === '$600') {
          newScale = Math.max(0.5, newScale);
        } else if (size === '$500') {
          newScale = Math.max(0.7, newScale);
        } else if (size === '$400') {
          newScale = 1;
        }

        setScale(newScale);
      }
    }, [inputWidth, contentWidth, size]);

    const scaledStyle: StyleProp<TextStyle> = {
      ...(style as object),
      transform: [{ scale }],
      transformOrigin: 'left center',
      height: inputHeight || initialHeight.current,
    };

    return (
      <InlineInputElement
        {...rest}
        size={size}
        style={scaledStyle}
        onLayout={handleLayout}
        onContentSizeChange={handleContentSizeChange}
        ref={ref}
      />
    );
  }),
);
