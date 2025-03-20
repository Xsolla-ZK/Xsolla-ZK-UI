import { withStaticProperties } from '@tamagui/core';
import { type ForwardedRef } from 'react';
import { ClipPath, Defs, G, Image, Rect } from 'react-native-svg';
import { RICH_ICON_SHAPES } from './rich-icon.constants';
import {
  Content,
  RichIconContext,
  RichIconFrame,
  RichIconIcon,
  RichIconPimple,
  RichIconShapePath,
  RichIconShapeSvg,
} from './rich-icon.styled';
import type { RichIconProps } from './rich-icon.types';
import type { TamaguiElement } from '@tamagui/core';

const RichIconComponent = RichIconFrame.styleable<RichIconProps>(
  (
    { shape = 'circle', children, backdropProps, imageSrc, ...rest },
    ref: ForwardedRef<TamaguiElement>,
  ) => (
    <RichIconFrame noShape={!shape} {...rest} ref={ref}>
      {shape && (
        <RichIconShapeSvg viewBox="0 0 80 80">
          <Defs>
            <ClipPath id={`icon-clip-${shape}`}>
              <RichIconShapePath d={RICH_ICON_SHAPES[shape]} {...backdropProps} />
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
              d={RICH_ICON_SHAPES[shape]}
              {...backdropProps}
              fill="currentColor"
              clipPath={`url(#icon-clip-${shape}`}
            />
          )}
        </RichIconShapeSvg>
      )}
      {shape ? <Content>{children}</Content> : children}
    </RichIconFrame>
  ),
);

const RichIcon = withStaticProperties(RichIconComponent, {
  Props: RichIconContext.Provider,
  Icon: RichIconIcon,
  Pimple: RichIconPimple,
});

export default RichIcon;
