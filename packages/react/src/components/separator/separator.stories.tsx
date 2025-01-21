import XZKUISeparator from './separator';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUISeparator,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    color: {
      control: 'color',
    },
    weight: { control: 'number' },
    mt: { control: 'number' },
    mb: { control: 'number' },
    ml: { control: 'number' },
    mr: { control: 'number' },
    mx: { control: 'number' },
    my: { control: 'number' },
  },
  args: {},
  decorators: [
    (Story) => (
      <div style={{ display: 'flex', alignItems: 'center', width: 400, height: 200 }}>
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUISeparator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomColor: Story = {
  args: {
    color: '#ff0000',
  },
};

export const Vertical: Story = {
  args: {
    vertical: true,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
