import { withStaticProperties } from '@tamagui/core';
import { forwardRef } from 'react';
import { ClipPath, Defs, G, Image, Rect } from 'react-native-svg';
import { getSafeTokenValue } from '../../utils';
import { RICH_ICON_SHAPES } from './rich-icon.constants';
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
  forwardRef(
    (
      { shape = 'circle', children, backdropProps = {}, imageSrc, ...rest },
      ref: ForwardedRef<TamaguiElement>,
    ) => {
      const { strokeWidth, ...restBackdropProps } = backdropProps;
      const shapeStrokeWidth = getSafeTokenValue(strokeWidth) * 2;
      return (
        <RichIconFrame
          noShape={!shape}
          tag={rest.pressable ? 'button' : undefined}
          pressable={Boolean(rest.pressable)}
          {...rest}
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
    },
  ),
);

export const RichIcon = withStaticProperties(RichIconComponent, {
  Props: RichIconContext.Provider,
  Text: RichIconText,
  Icon: RichIconIcon,
  // Pimple: RichIconPimple,
});
