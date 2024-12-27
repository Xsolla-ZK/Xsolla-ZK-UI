import clsx from 'clsx';
import { forwardRef } from 'react';
import XZKUIPimple from '../pimple/pimple';
import xzkuiRichIconClasses from './rich-icon.classes';
import Styled, { richIconPaths } from './rich-icon.styled';
import type { XZKUIRichIconProps } from './rich-icon.types';
import type {
  XZKUIPolymorphicComponent,
  XZKUIPolymorphicForwardedRef,
  XZKUIPolymorphicProps,
} from '@xsolla-zk-ui/react/types/components';
import type { ElementType } from 'react';

const XZKUIRichIcon = forwardRef(function XZKUIRichIcon<T extends ElementType>(
  {
    shape = 'circle',
    size = 500,
    children,
    backdropProps,
    imageSrc,
    className,
    bg = 'brandHigh',
    pimple,
    ...rest
  }: XZKUIPolymorphicProps<T, XZKUIRichIconProps>,
  ref: XZKUIPolymorphicForwardedRef<T>,
) {
  return (
    <Styled.Main
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
        </Styled.Icon>
      )}
      <Styled.Content>{children}</Styled.Content>
      {pimple && <XZKUIPimple {...pimple} />}
    </Styled.Main>
  );
}) as XZKUIPolymorphicComponent<XZKUIRichIconProps>;

export default XZKUIRichIcon;
