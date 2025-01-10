import XZKUITabs from './tabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUITabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUITabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <XZKUITabs>
      <XZKUITabs.List>
        <XZKUITabs.Tab value={1}>Tab 1</XZKUITabs.Tab>
        <XZKUITabs.Tab value={2}>Tab 2</XZKUITabs.Tab>
        <XZKUITabs.Tab value={3}>Tab 3</XZKUITabs.Tab>
      </XZKUITabs.List>
      <XZKUITabs.Panel value={1}>Content for tab 1</XZKUITabs.Panel>
      <XZKUITabs.Panel value={2}>Content for tab 2</XZKUITabs.Panel>
      <XZKUITabs.Panel value={3}>Content for tab 3</XZKUITabs.Panel>
    </XZKUITabs>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
