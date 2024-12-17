import { within, expect } from '@storybook/test';
import XZKUISomeComponent from './some-component';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUISomeComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', 'stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    children: 'Text',
    // onClick: fn(),
  },
} satisfies Meta<typeof XZKUISomeComponent>;

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
