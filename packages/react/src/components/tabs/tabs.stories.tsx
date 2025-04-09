import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import { Separator } from '../separator/separator.styled';
import Typography from '../typography/typography';
import Tabs from './tabs';
import type { TabsSizes } from './tabs.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().tabs) as TabsSizes[];

const meta = {
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Tabs defaultValue="1" orientation="horizontal" width={400} height={150}>
      <Tabs.List>
        <Tabs.Tab value="1">
          <Tabs.Tab.Icon icon={Plus} />
          <Tabs.Tab.Text>Tab First</Tabs.Tab.Text>
        </Tabs.Tab>
        <Tabs.Tab value="2">
          <Tabs.Tab.Icon icon={Plus} />
          <Tabs.Tab.Text>Tab Second</Tabs.Tab.Text>
        </Tabs.Tab>
        <Tabs.Tab value="3">
          <Tabs.Tab.Icon icon={Plus} />
          <Tabs.Tab.Text>Tab Third</Tabs.Tab.Text>
        </Tabs.Tab>
        <Tabs.Tab value="4">
          <Tabs.Tab.Icon icon={Plus} />
          <Tabs.Tab.Text>Tab Fourth</Tabs.Tab.Text>
        </Tabs.Tab>
        <Tabs.Tab value="5">
          <Tabs.Tab.Icon icon={Plus} />
          <Tabs.Tab.Text>Tab Fifth</Tabs.Tab.Text>
        </Tabs.Tab>
      </Tabs.List>
      <Separator />
      <Tabs.Content value="1">
        <Typography preset="display.500.accent">Content for tab 1</Typography>
      </Tabs.Content>
      <Tabs.Content value="2">
        <Typography preset="display.500.accent">Content for tab 2</Typography>
      </Tabs.Content>
      <Tabs.Content value="3">
        <Typography preset="display.500.accent">Content for tab 3</Typography>
      </Tabs.Content>
      <Tabs.Content value="4">
        <Typography preset="display.500.accent">Content for tab 4</Typography>
      </Tabs.Content>
      <Tabs.Content value="5">
        <Typography preset="display.500.accent">Content for tab 5</Typography>
      </Tabs.Content>
    </Tabs>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
