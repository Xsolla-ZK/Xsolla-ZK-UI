import { useState } from 'react';
import { Switch } from './switch';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Switch,
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
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args) => {
    const [isActive, setIsActive] = useState(false);
    return (
      <Switch {...args} onPress={() => setIsActive(!isActive)}>
        <Switch.Knob animation="state" x={isActive ? '100%' : 0} />
      </Switch>
    );
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
