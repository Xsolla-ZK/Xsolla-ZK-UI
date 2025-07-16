import { useProps, withStaticProperties } from '@tamagui/core';
import { RICH_ICON_SHAPES } from '@xsolla-zk/constants';
import { forwardRef } from 'react';
import { ClipPath, Defs, G, Image, Rect } from 'react-native-svg';
import { getSafeTokenValue } from '../../utils';
import {
  RichIconContent,
  RichIconContext,
  RichIconFrame,
  RichIconIcon,
  // RichIconPimple,
  RichIconShapePath,
  RichIconShapeSvg,
  RichIconText,
} from './rich-icon.styled';
import type { RichIconProps } from './rich-icon.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const RichIconComponent = RichIconFrame.styleable<RichIconProps>(
  forwardRef(({ children, ...propsIn }, ref: ForwardedRef<TamaguiElement>) => {
    const { shape = 'circle', backdropProps = {}, imageSrc, ...props } = useProps(propsIn);
    const { strokeWidth, ...restBackdropProps } = backdropProps;
    const shapeStrokeWidth = getSafeTokenValue(strokeWidth) * 2;

    return (
      <RichIconFrame
        shape={shape}
        tag={props.pressable ? 'button' : undefined}
        pressable={Boolean(props.pressable)}
        {...props}
        ref={ref}
      >
        {shape && (
          <RichIconShapeSvg viewBox="0 0 80 80">
            <Defs>
              <ClipPath id={`icon-clip-${shape}`}>
                <RichIconShapePath
                  d={RICH_ICON_SHAPES[shape as keyof typeof RICH_ICON_SHAPES] ?? shape}
                  strokeWidth={shapeStrokeWidth}
                  {...restBackdropProps}
                />
              </ClipPath>
            </Defs>
            {imageSrc ? (
              <>
                <Rect
                  width="100%"
                  height="100%"
                  fill="currentColor"
                  clipPath={`url(#icon-clip-${shape}`}
                />
                <G clipPath={`url(#icon-clip-${shape}`}>
                  <Image
                    href={imageSrc}
                    width="100%"
                    height="100%"
                    preserveAspectRatio="xMidYMid slice"
                  />
                </G>
              </>
            ) : (
              <RichIconShapePath
                d={RICH_ICON_SHAPES[shape as keyof typeof RICH_ICON_SHAPES] ?? shape}
                strokeWidth={shapeStrokeWidth}
                {...restBackdropProps}
                fill="currentColor"
                clipPath={`url(#icon-clip-${shape}`}
              />
            )}
          </RichIconShapeSvg>
        )}
        {shape ? <RichIconContent>{children}</RichIconContent> : children}
      </RichIconFrame>
    );
  }),
);

export const RichIcon = withStaticProperties(RichIconComponent, {
  Props: RichIconContext.Provider,
  Text: RichIconText,
  Icon: RichIconIcon,
  // Pimple: RichIconPimple,
});
