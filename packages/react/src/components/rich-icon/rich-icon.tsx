import { forwardRef } from 'react';
import { GetProps } from '@tamagui/core';
import XZKUIPimple from '../pimple/pimple';
import xzkuiRichIconClasses from './rich-icon.classes';
import { Root, Icon, Content, richIconPaths } from './rich-icon.styled';
import type { XZKUIRichIconShape } from './rich-icon.types';

export type RichIconProps = GetProps<typeof Root> & {
  shape?: XZKUIRichIconShape | false;
  backdropProps?: React.SVGAttributes<SVGPathElement>;
  imageSrc?: string;
  pimple?: Omit<React.ComponentProps<typeof XZKUIPimple>, 'size'>;
};

const XZKUIRichIcon = forwardRef<typeof Root, RichIconProps>(function XZKUIRichIcon(
  {
    shape = 'circle',
    size = 500,
    children,
    backdropProps,
    imageSrc,
    className,
    pimple,
    isButton,
    ...rest
  },
  ref
) {
  return (
    <Root
      className={className}
      data-no-shape={!shape}
      size={size}
      isButton={isButton}
      {...rest}
      ref={ref}
    >
      {shape && (
        <Icon
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
          as="svg"
        >
          <defs>
            <clipPath id={`icon-clip-${shape}`}>
              <path d={richIconPaths[shape]} {...backdropProps} />
            </clipPath>
          </defs>
          {imageSrc ? (
            <>
              <rect
                width="100%"
                height="100%"
                fill="currentColor"
                clipPath={`url(#icon-clip-${shape}`}
              />
              <g clipPath={`url(#icon-clip-${shape}`}>
                <image
                  href={imageSrc}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </>
          ) : (
            <path
              d={richIconPaths[shape]}
              {...backdropProps}
              fill="currentColor"
              clipPath={`url(#icon-clip-${shape}`}
            />
          )}
        </Icon>
      )}
      <Content noShape={!shape}>{children}</Content>
      {pimple && <XZKUIPimple {...pimple} />}
    </Root>
  );
});

export default XZKUIRichIcon;
