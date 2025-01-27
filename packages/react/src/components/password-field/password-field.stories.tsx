import XZKUIPasswordField from './password-field';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIPasswordField,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    // onClick: fn(),
    autoSave: 'off',
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIPasswordField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Password',
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
