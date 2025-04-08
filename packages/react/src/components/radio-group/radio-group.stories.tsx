import { Stack } from '@tamagui/core';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Label from '../label/label';
import RadioGroup from './radio-group';
import type { RadioGroupItemProps, RadioGroupSizes } from './radio-group.types';
import type { Meta, StoryObj } from '@storybook/react';
import type { ReactNode } from 'react';

const sizes = Object.keys(getComponentsConfig().radio) as RadioGroupSizes[];

const meta = {
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: (
      <RadioGroup.Item value="1" id="1">
        <RadioGroup.Indicator />
      </RadioGroup.Item>
    ),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof RadioGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

function RadioGroupItemWithLabel({ label, ...props }: RadioGroupItemProps & { label: ReactNode }) {
  const id = `radiogroup-${props.value}`;
  return (
    <Stack flexDirection="row" alignItems="center" gap="$space.250">
      <RadioGroup.Item id={id} {...props}>
        <RadioGroup.Indicator />
      </RadioGroup.Item>

      <Label htmlFor={id}>{label}</Label>
    </Stack>
  );
}

export const Default: Story = {
  args: {},
  render: (args) => (
    <RadioGroup
      aria-labelledby="Select one item"
      defaultValue="2"
      name="form"
      alignItems="center"
      gap="$space.250"
    >
      <RadioGroupItemWithLabel value="1" label="Radio 1" />
      <RadioGroupItemWithLabel value="2" label="Radio 2" disabled />
      <RadioGroupItemWithLabel value="3" label="Radio 3" />
    </RadioGroup>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <Stack flexDirection="row" alignItems="center" gap="$space.250">
      <RadioGroup {...args} alignItems="center" gap="$space.250">
        {sizes.map((size) => (
          <RadioGroupItemWithLabel key={size} size={size} value={size} label={size} />
        ))}
      </RadioGroup>
    </Stack>
  ),
};

export const Native: Story = {
  args: {
    native: true,
    accentColor: 'red',
  },
  // render: (args) => <RadioGroupItemWithLabel value="1" label="Radio 1" />,
};
/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
