import { within, expect } from '@storybook/test';
import XZKUISwitch from './switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUISwitch,
  // subcomponents: { Thumb: XZKUISwitch.Thumb },
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    // children: { control: 'text' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUISwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
