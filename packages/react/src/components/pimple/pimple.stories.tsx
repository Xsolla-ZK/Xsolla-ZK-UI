import { within, expect } from '@storybook/test';
import XZKUIPimple from './pimple';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIPimple,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Text',
    // onClick: fn(),
  },
} satisfies Meta<typeof XZKUIPimple>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    await expect(canvas.getByText('Text')).toBeInTheDocument();
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
