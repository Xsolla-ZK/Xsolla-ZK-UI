import { ChevronRight } from '@xsolla-zk-ui/icons';
import { Bookmark } from '@xsolla-zk-ui/icons';
import FlexButton from '../flex-button/flex-button';
import Breadcrumbs from './breadcrumbs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    iconDelimiter: ChevronRight,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const content = (
  <>
    <Breadcrumbs.Item>Sweet</Breadcrumbs.Item>
    <Breadcrumbs.Item>Home</Breadcrumbs.Item>
    <Breadcrumbs.Item>Alabama</Breadcrumbs.Item>
  </>
);

export const Default: Story = {
  args: {},
  render: (args) => <Breadcrumbs {...args}>{content}</Breadcrumbs>,
};

const customBreadcrumbsItems = (
  <>
    <Breadcrumbs.Item asChild>
      <FlexButton tone="neutral">
        <FlexButton.Text>Sweet</FlexButton.Text>
      </FlexButton>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item asChild>
      <FlexButton tone="neutral">
        <FlexButton.Text>Home</FlexButton.Text>
      </FlexButton>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item asChild>
      <FlexButton tone="neutral" disabled>
        <FlexButton.Text>Alabama</FlexButton.Text>
      </FlexButton>
    </Breadcrumbs.Item>
  </>
);

export const CustomItem: Story = {
  args: {},
  render: (args) => <Breadcrumbs {...args}>{customBreadcrumbsItems}</Breadcrumbs>,
};

export const CustomDelimiter: Story = {
  args: {
    iconDelimiter: Bookmark,
  },
  render: (args) => <Breadcrumbs {...args}>{content}</Breadcrumbs>,
};
/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
