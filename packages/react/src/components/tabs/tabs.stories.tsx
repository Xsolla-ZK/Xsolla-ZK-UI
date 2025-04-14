import { Stack } from '@tamagui/core';
import { Minus, Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Pimple from '../pimple/pimple';
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

const tabs = [
  {
    value: '1',
    icon: Plus,
    text: 'Tab First',
    content: 'Content for tab 1',
  },
  {
    value: '2',
    icon: Plus,
    text: 'Tab Second',
    content: 'Content for tab 2',
  },
  {
    value: '3',
    icon: Plus,
    text: 'Tab Third',
    content: 'Content for tab 3',
  },
  {
    value: '4',
    icon: Plus,
    text: 'Tab Fourth',
    content: 'Content for tab 4',
  },
  {
    value: '5',
    icon: Plus,
    text: 'Tab Fifth',
    content: 'Content for tab 5',
  },
  {
    value: '6',
    icon: Plus,
    text: 'Tab Sixth',
    content: 'Content for tab 6',
  },
];

export const Default: Story = {
  args: {},
  render: ({ ...args }) => (
    <Tabs defaultValue="1" {...args}>
      <Tabs.List>
        {tabs.map((tab, index) => (
          <Tabs.Tab key={tab.text} value={tab.value}>
            <Tabs.Tab.Icon icon={tab.icon} />
            <Tabs.Tab.Text>{tab.text}</Tabs.Tab.Text>
            <Stack paddingLeft="$100">
              <Pimple backgroundColor="$background.neutral-high">
                <Pimple.Text>{index + 1}</Pimple.Text>
              </Pimple>
            </Stack>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Separator />
      {tabs.map((tab) => (
        <Tabs.Content key={tab.content} value={tab.value}>
          <Stack padding="$300">
            <Typography preset="display.500.accent">{tab.content}</Typography>
          </Stack>
        </Tabs.Content>
      ))}
    </Tabs>
  ),
};

export const Vertical: Story = {
  args: {},
  render: ({ ...args }) => (
    <Tabs defaultValue="1" orientation="vertical" {...args}>
      <Tabs.List width={120}>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.text} value={tab.value}>
            <Tabs.Tab.Icon icon={tab.icon} />
            <Tabs.Tab.Text>{tab.text}</Tabs.Tab.Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Separator vertical />
      {tabs.map((tab) => (
        <Tabs.Content key={tab.content} value={tab.value}>
          <Stack padding="$300">
            <Typography preset="display.500.accent">{tab.content}</Typography>
          </Stack>
        </Tabs.Content>
      ))}
    </Tabs>
  ),
};

const tabsWithTruncatedText = [
  {
    value: '0',
    icon: Minus,
    text: 'Very Long Tab Text Truncated',
    content: 'Content for tab 0',
  },
  ...tabs,
];

export const TruncatedText: Story = {
  args: {},
  render: ({ ...args }) => (
    <Tabs defaultValue="0" {...args}>
      <Tabs.List>
        {tabsWithTruncatedText.map((tab, index) => (
          <Tabs.Tab maxWidth={150} key={tab.text} value={tab.value}>
            <Tabs.Tab.Icon icon={tab.icon} />
            <Tabs.Tab.Text>{tab.text}</Tabs.Tab.Text>
            <Stack paddingLeft="$100">
              <Pimple backgroundColor="$background.neutral-high">
                <Pimple.Text>{index}</Pimple.Text>
              </Pimple>
            </Stack>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Separator />
      {tabsWithTruncatedText.map((tab) => (
        <Tabs.Content key={tab.content} value={tab.value}>
          <Stack padding="$300">
            <Typography preset="display.500.accent">{tab.content}</Typography>
          </Stack>
        </Tabs.Content>
      ))}
    </Tabs>
  ),
};

export const TabListScroller: Story = {
  args: {},
  render: ({ ...args }) => (
    <Tabs defaultValue="1" width={300} {...args}>
      <Tabs.List>
        {tabs.map((tab) => (
          <Tabs.Tab key={tab.text} value={tab.value}>
            <Tabs.Tab.Icon icon={tab.icon} />
            <Tabs.Tab.Text>{tab.text}</Tabs.Tab.Text>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      <Separator />
      {tabs.map((tab) => (
        <Tabs.Content key={tab.content} value={tab.value}>
          <Stack padding="$300">
            <Typography preset="display.500.accent">{tab.content}</Typography>
          </Stack>
        </Tabs.Content>
      ))}
    </Tabs>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
