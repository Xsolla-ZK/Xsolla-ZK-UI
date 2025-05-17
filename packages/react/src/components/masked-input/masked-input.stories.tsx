import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { useState } from 'react';
import { Field } from '../field/field';
import { MaskedInput } from './masked-input';
import type { MaskedInputProps } from './masked-input.types';
import type { InputSizes } from '../input/input.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().input) as InputSizes[];

const meta = {
  component: MaskedInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  args: {
    placeholder: 'Placeholder',
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof MaskedInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => <MaskedInput {...args} mask="AA-AA-99-AA" placeholder="AA-AA-99-AA" />,
};

function ControlledMaskedInput({ mask, ...props }: MaskedInputProps) {
  const [values, setValues] = useState({
    raw: '',
    masked: '',
  });

  return (
    <Field width={320}>
      <Field.Row>
        <Field.Label>Raw value</Field.Label>
        <Field.LabelValue>{values.raw}</Field.LabelValue>
      </Field.Row>
      <Field.Control>
        <MaskedInput
          mask={mask}
          value={values.masked}
          onChangeText={(masked, raw) => setValues({ raw, masked })}
          {...props}
        />
      </Field.Control>
      <Field.Row>
        <Field.Hint>Masked value</Field.Hint>
        <Field.LabelValue>{values.masked}</Field.LabelValue>
      </Field.Row>
    </Field>
  );
}

export const WithCustomMask: Story = {
  args: {},
  render: (args) => (
    <ControlledMaskedInput
      mask={{ prefix: '+7 ', type: 'custom', format: '(999) 999 99 99' }}
      {...args}
    />
  ),
};

export const WithNumberMask: Story = {
  args: {},
  render: (args) => (
    <ControlledMaskedInput mask={{ prefix: 'prefix ', type: 'number' }} {...args} />
  ),
};

export const WithCurrencyMask: Story = {
  args: {},
  render: (args) => (
    <ControlledMaskedInput
      mask={{ type: 'currency' }}
      // mask={{ prefix: 'value ', type: 'number', options: { style: 'currency', currency: 'RUB' } }}
      {...args}
    />
  ),
};

export const WithPhoneMask: Story = {
  args: {},
  render: (args) => (
    <ControlledMaskedInput
      mask={{ prefix: '+', type: 'phone', lockPrefix: true, includePrefixInRawValue: true }}
      // mask={{ prefix: 'value ', type: 'number', options: { style: 'currency', currency: 'RUB' } }}
      {...args}
    />
  ),
};
