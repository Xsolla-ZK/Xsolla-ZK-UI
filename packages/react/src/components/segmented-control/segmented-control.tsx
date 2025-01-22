import { buttonClasses } from '@mui/base';
import clsx from 'clsx';
import { useId, useState } from 'react';
import Styled from './segmented-control.styled';
import type { XZKUISegmentedControlProps } from './segmented-control.types';

function XZKUISegmentedControl({
  size = 500,
  values,
  className,
  defaultSelected,
  onChangeValue,
}: XZKUISegmentedControlProps) {
  const uniqId = useId();
  const [selected, setSelected] = useState<string | number | undefined>(
    defaultSelected ? values[defaultSelected] : undefined,
  );
  const controlId = `xzkui-segmetad-control-${uniqId}`;

  return (
    <Styled.Root xzkuiSize={size} className={className}>
      {values.map((value, idx) => (
        <Styled.Control
          key={`${controlId}-position-${value}`}
          onClick={() => {
            onChangeValue?.({ idx, value });
            setSelected(value);
          }}
          className={clsx(selected === value && buttonClasses.active)}
        >
          {value}
        </Styled.Control>
      ))}
    </Styled.Root>
  );
}

export default XZKUISegmentedControl;
