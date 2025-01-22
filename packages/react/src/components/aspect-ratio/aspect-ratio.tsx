import { css } from '@emotion/react';
import { forwardRef, useMemo } from 'react';
import Styled from './aspect-ratio.styled';
import type { XZKUIAspectRatioProps } from './aspect-ratio.types';

const XZKUIAspectRatio = forwardRef<HTMLDivElement, XZKUIAspectRatioProps>(
  function XZKUIAspectRatio({ aspectRatio, children, className, as }, ref) {
    const aspectRatioPercentage = useMemo(
      () =>
        aspectRatio
          ? {
              paddingTop: `${((aspectRatio[1] / aspectRatio[0]) * 100).toFixed(2)}%`,
            }
          : undefined,
      [aspectRatio],
    );

    return (
      <Styled.Root as={as} className={className} css={css(aspectRatioPercentage)}>
        <Styled.Inner as={as} ref={ref}>
          {children}
        </Styled.Inner>
      </Styled.Root>
    );
  },
);

export default XZKUIAspectRatio;
