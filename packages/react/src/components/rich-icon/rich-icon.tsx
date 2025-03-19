import { withStaticProperties } from '@tamagui/core';
import { ClipPath, Defs, G, Image, Path, Rect } from 'react-native-svg';
import {
  Content,
  RichIconContext,
  RichIconFrame,
  RichIconIcon,
  richIconPaths,
  RichIconPimple,
  RichIconShapeIcon,
} from './rich-icon.styled';
import type { RichIconProps } from './rich-icon.types';
import type { TamaguiElement } from '@tamagui/core';
import type { ForwardedRef } from 'react';

const RichIconComponent = RichIconFrame.styleable<RichIconProps>(
  (
    { shape = 'circle', children, backdropProps, imageSrc, ...rest },
    ref: ForwardedRef<TamaguiElement>,
  ) => (
    <RichIconFrame noShape={!shape} {...rest} ref={ref}>
      {shape && (
        <RichIconShapeIcon viewBox="0 0 80 80">
          <Defs>
            <ClipPath id={`icon-clip-${shape}`}>
              <Path d={richIconPaths[shape]} {...backdropProps} />
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
            <Path
              d={richIconPaths[shape]}
              {...backdropProps}
              fill="currentColor"
              clipPath={`url(#icon-clip-${shape}`}
            />
          )}
        </RichIconShapeIcon>
      )}
      {shape ? <Content>{children}</Content> : children}
      {/* {pimple && <XZKUIPimple {...pimple} />} */}
    </RichIconFrame>
  ),
);

const RichIcon = withStaticProperties(RichIconComponent, {
  Props: RichIconContext.Provider,
  Icon: RichIconIcon,
  Pimple: RichIconPimple,
});

export default RichIcon;
