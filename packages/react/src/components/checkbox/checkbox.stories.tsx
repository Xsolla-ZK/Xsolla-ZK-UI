import XZKUICheckbox from './checkbox';
import { checkboxThemeSizes } from './checkbox.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUICheckbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUICheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      {checkboxThemeSizes.map((size) => (
        <XZKUICheckbox key={size} {...args} size={size} />
      ))}
    </div>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
