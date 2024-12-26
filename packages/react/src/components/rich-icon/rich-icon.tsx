import clsx from 'clsx';
import { forwardRef } from 'react';
import XZKUIPimple from '../pimple/pimple';
import xzkuiRichIconClasses from './rich-icon.classes';
import Styled, { richIconPaths } from './rich-icon.styled';
import type { XZKUIRichIconBaseProps, XZKUIRichIconProps } from './rich-icon.types';
import type { ElementType, ForwardedRef } from 'react';

const XZKUIRichIcon = forwardRef(function XZKUIRichIcon<T extends ElementType>(
  {
    shape = 'circle',
    size = 500,
    children,
    backdropProps,
    imageSrc,
    component,
    className,
    bg = 'brandHigh',
    pimple,
    ...rest
  }: XZKUIRichIconProps<T>,
  ref: ForwardedRef<HTMLDivElement>,
) {
  return (
    <Styled.Main
      as={component}
      className={clsx([className, !shape && xzkuiRichIconClasses.noShape])}
      xzkuiSize={size}
      xzkuiBg={bg}
      {...rest}
      ref={ref}
    >
      {shape && (
        <Styled.Icon
          width="1em"
          height="1em"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 80 80"
        >
          <defs>
            <clipPath id="icon-clip">
              <path d={richIconPaths[shape]} {...backdropProps} />
            </clipPath>
          </defs>
          {imageSrc ? (
            <>
              <rect width="100%" height="100%" fill="currentColor" clipPath="url(#icon-clip)" />
              <g clipPath="url(#icon-clip)">
                <image
                  href={imageSrc}
                  width="100%"
                  height="100%"
                  preserveAspectRatio="xMidYMid slice"
                />
              </g>
            </>
          ) : (
            <path d={richIconPaths[shape]} {...backdropProps} fill="currentColor" />
          )}
        </Styled.Icon>
      )}
      <Styled.Content>{children}</Styled.Content>
      {pimple && <XZKUIPimple size={calcPimpleSize(size)} {...pimple} />}
    </Styled.Main>
  );
});

function calcPimpleSize(size: XZKUIRichIconBaseProps['size']) {
  if (size > 700) return 700;
  if (size > 500) return 600;
  if (size > 300) return 500;
  if (size === 300) return 400;
  if (size === 200) return 300;
  return 200;
}

export default XZKUIRichIcon;
