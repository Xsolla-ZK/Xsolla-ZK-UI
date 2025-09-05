import { useTheme, withStaticProperties } from '@tamagui/core';
import { RICH_ICON_SHAPES } from '@xsolla-zk/constants';
import { getSafeTokenValue } from '@xsolla-zk/ui-utils';
import { ClipPath, Defs, ForeignObject, G, Path } from 'react-native-svg';
import { processMediaValues, smartContextStyled } from '../../utils';
import {
  RichIconContent,
  RichIconContext,
  RichIconFrame,
  RichIconIcon,
  // RichIconPimple,
  RichIconShapeSvg,
  RichIconText,
} from './rich-icon.styled';
import type { RichIconProps, ShapePathProps } from './rich-icon.types';
import type { ColorTokens } from '@tamagui/core';

const DEFAULT_SIZE = 80;

const RichIconComponent = RichIconFrame.styleable<RichIconProps>(
  ({ children, ...propsIn }, ref) => {
    const { shape = 'circle', backdropProps = {}, image, ...props } = propsIn;

    return (
      <RichIconContext.Provider componentProps={props}>
        <RichIconFrame
          tag={props.pressable ? 'button' : undefined}
          pressable={Boolean(props.pressable)}
          {...props}
          ref={ref}
        >
          {shape && (
            <RichIconShapeSvg viewBox={`0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`}>
              <Defs>
                <ClipPath id={`icon-clip-${shape}`}>
                  <RichIconShapePath
                    d={RICH_ICON_SHAPES[shape as keyof typeof RICH_ICON_SHAPES] ?? shape}
                  />
                </ClipPath>
              </Defs>
              {image && (
                <>
                  <G clipPath={`url(#icon-clip-${shape})`}>
                    <ForeignObject width="100%" height="100%">
                      {image(DEFAULT_SIZE)}
                    </ForeignObject>
                  </G>
                </>
              )}
              <RichIconShapePath
                d={RICH_ICON_SHAPES[shape as keyof typeof RICH_ICON_SHAPES] ?? shape}
                {...backdropProps}
                fill={image ? 'none' : 'currentColor'}
                clipPath={`url(#icon-clip-${shape})`}
              />
            </RichIconShapeSvg>
          )}
          {shape ? <RichIconContent>{children}</RichIconContent> : children}
        </RichIconFrame>
      </RichIconContext.Provider>
    );
  },
);

const PathStyled = smartContextStyled(Path);

function RichIconShapePath({ strokeWidth, fill, stroke, ...props }: ShapePathProps) {
  const ctx = RichIconContext.useStyledContext();
  const theme = useTheme();

  const strokeValues = processMediaValues(
    { size: ctx.size },
    {
      size: (val, { config }) => {
        const componentProps = config.richIcon[val as keyof typeof config.richIcon];
        if (!componentProps) return {};

        const sizeRatio = DEFAULT_SIZE / getSafeTokenValue(componentProps.frame.minSize);
        return {
          strokeWidth: Math.ceil(getSafeTokenValue(strokeWidth) * 2 * sizeRatio),
        };
      },
    },
  );

  const strokeValue = stroke ? ((theme[stroke]?.get() ?? stroke) as ColorTokens) : undefined;
  const fillValue = fill ? ((theme[fill]?.get() ?? fill) as ColorTokens) : undefined;

  // @ts-expect-error - OK
  return <PathStyled stroke={strokeValue} fill={fillValue} {...strokeValues} {...props} />;
}

export const RichIcon = withStaticProperties(RichIconComponent, {
  Text: RichIconText,
  Icon: RichIconIcon,
  // Pimple: RichIconPimple,
});
