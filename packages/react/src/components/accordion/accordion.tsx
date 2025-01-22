import { useSpring } from '@react-spring/web';
import { Fragment, useEffect, useId, useRef, useState } from 'react';
import { useResizeObserver } from 'usehooks-ts';
import XZKUIRichIcon from '../rich-icon/rich-icon';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgChevronDown from '../svg-icons/chevron-down';
import SvgChevronUp from '../svg-icons/chevron-up';
import Styled from './accordion.styled';
import type { XZKUIAccordionContentProps, XZKUIAccordionProps } from './accordion.types';

function XZKUIAccordion({
  list,
  header,
  headerClick,
  className,
  bg,
  renders,
  children,
}: XZKUIAccordionProps) {
  const uniqId = useId();
  const [isOpen, setOpen] = useState<number | boolean | null>(null);

  return (
    <Styled.Root className={className} xzkuiBg={bg}>
      {list ? (
        list.map((item, idx) => {
          const content = `${uniqId}accordion-content-${idx}`;
          const header = `${uniqId}accordion-header-${idx}`;
          const active = isOpen === idx;
          const disabled = !item.content;
          const toggle = () => setOpen((prev) => (prev === idx ? null : idx));
          const hasCustomHandler = Boolean(item.headerClick || headerClick);

          return (
            <Fragment key={`accordion-list-item-${idx}`}>
              <Styled.Header
                aria-expanded={active}
                aria-controls={`${content}-${idx}`}
                aria-disabled={disabled}
                role="button"
                tabIndex={disabled ? -1 : 0}
                id={header}
                onClick={(event) => {
                  if (item.headerClick) {
                    return item.headerClick(event, { active });
                  }
                  if (headerClick) {
                    return headerClick(event, { active });
                  }
                  toggle();
                }}
              >
                <Styled.HeaderTitle>{item.header}</Styled.HeaderTitle>
                {renders?.headerButton ? (
                  typeof renders?.headerButton === 'function' ? (
                    renders?.headerButton?.({ active })
                  ) : (
                    renders?.headerButton
                  )
                ) : (
                  <XZKUIRichIcon
                    component={hasCustomHandler ? 'button' : undefined}
                    shape="squircle"
                    size={200}
                    bg={({ theme }) => theme.overlay.neutral}
                    onClickCapture={hasCustomHandler ? () => toggle() : undefined}
                  >
                    <XZKUISvgIcon icon={active ? SvgChevronUp : SvgChevronDown} />
                  </XZKUIRichIcon>
                )}
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
            onClick={(event) => {
              if (headerClick) {
                return headerClick(event, { active: Boolean(isOpen) });
              }
              setOpen((prev) => !prev);
            }}
          >
            <Styled.HeaderTitle>{header}</Styled.HeaderTitle>
            {renders?.headerButton ? (
              typeof renders?.headerButton === 'function' ? (
                renders?.headerButton?.({ active: Boolean(isOpen) })
              ) : (
                renders?.headerButton
              )
            ) : (
              <XZKUIRichIcon
                component={headerClick ? 'button' : undefined}
                shape="squircle"
                size={200}
                bg={({ theme }) => theme.overlay.neutral}
                onClickCapture={headerClick ? () => setOpen((prev) => !prev) : undefined}
              >
                <XZKUISvgIcon icon={isOpen ? SvgChevronUp : SvgChevronDown} />
              </XZKUIRichIcon>
            )}
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
    </Styled.Root>
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
