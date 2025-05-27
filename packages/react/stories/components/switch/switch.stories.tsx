import { Stack } from '@tamagui/core';
import { useState } from 'react';
import { Label } from '../label';
import { SemanticText } from '../semantic-text';
import { Switch } from './switch';
import type { SwitchProps } from './switch.types';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { table: { disable: true } },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

function SwitchBase(props: SwitchProps) {
  return (
    <Switch {...props}>
      <Switch.Knob />
    </Switch>
  );
}

function ControlledSwitch({ checked: checkedProp, ...props }: SwitchProps) {
  const [checked, setChecked] = useState(() => checkedProp);
  return (
    <Stack gap={16}>
      <Stack flexDirection="row" alignItems="center" gap={16}>
        <Label htmlFor="switch-controlled">Switch label</Label>
        <Switch
          {...props}
          checked={checked}
          onPress={() => setChecked((prev) => !prev)}
          id="switch-controlled"
        >
          <Switch.Knob />
        </Switch>
      </Stack>
      <SemanticText>{checked ? 'Active' : 'Inactive'}</SemanticText>
    </Stack>
  );
}

export const Default: Story = {
  args: {},
  render: (args) => <SwitchBase {...args} />,
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => <SwitchBase {...args} />,
};

export const WithLabelAndControlledValue: Story = {
  args: {
    checked: true,
  },
  render: (args) => <ControlledSwitch {...args} />,
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
