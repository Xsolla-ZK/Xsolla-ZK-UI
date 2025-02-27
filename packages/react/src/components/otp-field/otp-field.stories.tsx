import { within, expect } from '@storybook/test';
import XZKUIOtpField from './otp-field';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIOtpField,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    // onClick: fn(),
  },
  decorators: [(story) => <div style={{ padding: 40 }}>{story()}</div>],
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIOtpField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    values: '',
    label: 'Label',
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
