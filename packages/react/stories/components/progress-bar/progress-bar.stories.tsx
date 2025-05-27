import { Stack } from '@tamagui/core';
import { useState } from 'react';
import { getComponentsConfig } from '../../utils';
import { Button } from '../button';
import { Field } from '../field';
import { ProgressBar } from './progress-bar';
import type { ProgressBarProps, ProgressBarSizes } from './progress-bar.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { GetProps } from '@tamagui/core';

const sizes = Object.keys(getComponentsConfig().progressBar) as ProgressBarSizes[];

const meta = {
  component: ProgressBar,
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
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof ProgressBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 40,
  },
  render: (args) => <ProgressBar {...args} />,
};

function ProgressBarDynamic({ value: valueProp, ...props }: ProgressBarProps) {
  const [inputValue, setInputValue] = useState(String(valueProp));
  const [progressValue, setProgressValue] = useState(valueProp);

  const handleChange: GetProps<typeof Field.Control>['onChange'] = (e) => {
    const newValue = (e.target as HTMLInputElement).value;
    setInputValue(newValue);
  };

  const handleSubmit = () => {
    setProgressValue(Number(inputValue) > 100 ? 100 : Number(inputValue));
  };

  return (
    <Stack gap={12}>
      <Field>
        <Field.Row>
          <Field.Label>Please set new value</Field.Label>
        </Field.Row>
        <Field.Control
          type="number"
          inputMode="numeric"
          max={100}
          value={inputValue}
          onChange={handleChange}
        />
      </Field>
      <Button onPress={handleSubmit}>
        <Button.Text>Submit</Button.Text>
      </Button>
      <ProgressBar value={progressValue} {...props} />
    </Stack>
  );
}

export const WithDynamicValue: Story = {
  args: {
    value: 40,
  },
  render: (args) => <ProgressBarDynamic {...args} />,
};
