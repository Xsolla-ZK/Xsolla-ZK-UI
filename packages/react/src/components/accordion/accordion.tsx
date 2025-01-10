import { useSpring } from '@react-spring/web';
import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import Styled from './accordion.styled';
import type { XZKUIAccordionContentProps, XZKUIAccordionProps } from './accordion.types';

function XZKUIAccordion({ list, header, children }: XZKUIAccordionProps) {
  const uniqId = useId();
  const [isOpen, setOpen] = useState<number | boolean | null>(null);

  return (
    <Styled.Main>
      {list ? (
        list.map((item, idx) => {
          const content = `${uniqId}accordion-content-${idx}`;
          const header = `${uniqId}accordion-header-${idx}`;
          const active = isOpen === idx;
          const disabled = !item.content;

          return (
            <Fragment key={`accordion-list-item-${idx}`}>
              <Styled.Header
                aria-expanded={active}
                aria-controls={`${content}-${idx}`}
                aria-disabled={disabled}
                role="button"
                tabIndex={disabled ? -1 : 0}
                id={header}
                onClick={() => setOpen((prev) => (prev === idx ? null : idx))}
              >
                <Styled.HeaderTitle>{item.header}</Styled.HeaderTitle>
                {/* <SvgIcon icon={active ? SvgUp : SvgDown} /> */}
              </Styled.Header>
              <XZKUIAccordionContent id={content} label={header} active={active}>
                {item.content}
              </XZKUIAccordionContent>
            </Fragment>
          );
        })
      ) : (
        <>
          <Styled.Header
            aria-expanded={Boolean(isOpen)}
            aria-controls={`${uniqId}-accordion-content`}
            aria-disabled={!children}
            role="button"
            tabIndex={!children ? -1 : 0}
            id={`${uniqId}-accordion-header`}
            onClick={() => setOpen((prev) => !prev)}
          >
            <Styled.HeaderTitle>{header}</Styled.HeaderTitle>
            {/* <SvgIcon icon={active ? SvgUp : SvgDown} /> */}
          </Styled.Header>
          <XZKUIAccordionContent
            id={`${uniqId}-accordion-content`}
            label={`${uniqId}-accordion-header`}
            active={Boolean(isOpen)}
          >
            {children}
          </XZKUIAccordionContent>
        </>
      )}
    </Styled.Main>
  );
}

function XZKUIAccordionContent({ active, id, label, children }: XZKUIAccordionContentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { height = 0 } = useResizeObserver({
    ref,
    box: 'border-box',
  });

  const style = useSpring({
    from: { height: 0, opacity: 0 },
    to: {
      height: active ? height : 0,
      opacity: active ? 1 : 0,
    },
  });

  const ready = useRef(false);

  useEffect(() => {
    ready.current = true;
  }, []);

  return (
    <Styled.ContentWrapper style={ready.current ? style : undefined}>
      <Styled.Content
        ref={ref}
        aria-labelledby={label}
        id={id}
        role="region"
        suppressHydrationWarning
      >
        {children}
      </Styled.Content>
    </Styled.ContentWrapper>
  );
}

export default XZKUIAccordion;
