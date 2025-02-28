import { ClipPath, Defs, G, Image, Path, Rect, Svg } from 'react-native-svg';
// import XZKUIPimple from '../pimple/pimple';
import { Content, Icon, richIconPaths } from './rich-icon.styled';
import RichIconStyled from './rich-icon.styled';
import type { RichIconShape } from './rich-icon.types';
import type { GetProps, ThemeTokens } from '@tamagui/core';

export interface RichIconProps extends GetProps<typeof RichIconStyled> {
  shape?: RichIconShape | false;
  backdropProps?: GetProps<typeof Path>;
  imageSrc?: string;
  color?: ThemeTokens;
  // pimple?: Omit<ComponentProps<typeof XZKUIPimple>, 'size'>;
}

const RichIcon = function RichIcon({
  shape = 'circle',
  children,
  backdropProps,
  imageSrc,
  color = '$background.brand-high',
  // pimple,
  ...rest
}: RichIconProps) {
  return (
    <RichIconStyled {...rest}>
      {shape && (
        <Icon color={color} viewBox="0 0 80 80">
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
        </Icon>
      )}
      <Content noShape={!shape}>{children}</Content>
      {/* {pimple && <XZKUIPimple {...pimple} />} */}
    </RichIconStyled>
  );
};

export default RichIcon;
