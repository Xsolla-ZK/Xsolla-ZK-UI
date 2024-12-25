import { ClickAwayListener } from '@mui/base';
import { isValidElement, useId, useState } from 'react';
import Styled from './dropdown.styled';
import type { XZKUIDropdownProps, XZKUIDropdownSharedProps } from './dropdown.types';
import type { JSXElementConstructor, KeyboardEventHandler, MouseEvent, ElementType } from 'react';

function XZKUIDropdown<T extends ElementType>(props: XZKUIDropdownProps<T>) {
  const uniqId = useId();
  const {
    control,
    children,
    id,
    popperProps,
    body,
    component,
    className,
    size = 'md',
    ...rest
  } = props;
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const Control = props.control as JSXElementConstructor<XZKUIDropdownSharedProps>;
  const Body = body ?? Styled.Body;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl((prev) => (prev ? null : event.currentTarget));
  };

  const handleClose = () => setAnchorEl(null);

  const handleOpen = (element: HTMLElement | null) => setAnchorEl(element);

  const open = Boolean(anchorEl);
  const passId = open ? `xzkui-dropdown-${uniqId}` : undefined;

  const sharedProps = {
    open,
    close: handleClose,
    openHandler: handleOpen,
    toggleHandler: handleClick,
  };

  const onKeyDownHandler: KeyboardEventHandler<HTMLElement> = (e) => {
    if (e.key === 'Escape') handleClose();
  };

  const ownProps = {
    'aria-controls': passId,
    'aria-expanded': open || undefined,
  };

  return (
    <ClickAwayListener onClickAway={handleClose}>
      <Styled.Main className={className} as={component} onKeyDown={onKeyDownHandler} {...rest}>
        {typeof control === 'function' && isValidElement(control) ? (
          control({ ...sharedProps, ownProps })
        ) : (
          <Control {...sharedProps} ownProps={ownProps} />
        )}
        <Styled.Popper id={passId} open={open} anchorEl={anchorEl} {...popperProps}>
          <Body xzkuiSize={size}>
            {typeof children === 'function' ? children(sharedProps) : children}
          </Body>
        </Styled.Popper>
      </Styled.Main>
    </ClickAwayListener>
  );
}

export default XZKUIDropdown;
