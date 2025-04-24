import { ChevronRight } from '@xsolla-zk-ui/icons';
import { Bookmark } from '@xsolla-zk-ui/icons';
import { Badge } from '../badge/badge';
import { RichIcon } from '../rich-icon/rich-icon';
import { Breadcrumbs } from './breadcrumbs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: Breadcrumbs,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {},
  args: {
    delimiter: '',
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

const delimiter = (
  <RichIcon size="$100">
    <RichIcon.Icon icon={ChevronRight} />
  </RichIcon>
);

const content = (
  <>
    <Breadcrumbs.Item>
      <Breadcrumbs.Item.Text>Sweet</Breadcrumbs.Item.Text>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Item.Text>Home</Breadcrumbs.Item.Text>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item>
      <Breadcrumbs.Item.Text>Alabama</Breadcrumbs.Item.Text>
    </Breadcrumbs.Item>
  </>
);

export const Default: Story = {
  args: {},
  render: (args) => (
    <Breadcrumbs {...args} delimiter={delimiter}>
      {content}
    </Breadcrumbs>
  ),
};

const customBreadcrumbsItems = (
  <>
    <Breadcrumbs.Item asChild>
      <Badge>
        <Badge.Text>Sweet</Badge.Text>
      </Badge>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item asChild>
      <Badge tone="brand">
        <Badge.Text>Home</Badge.Text>
      </Badge>
    </Breadcrumbs.Item>
    <Breadcrumbs.Item asChild>
      <Badge>
        <Badge.Text>Alabama</Badge.Text>
      </Badge>
    </Breadcrumbs.Item>
  </>
);

export const CustomItem: Story = {
  args: {},
  render: (args) => (
    <Breadcrumbs {...args} delimiter={delimiter}>
      {customBreadcrumbsItems}
    </Breadcrumbs>
  ),
};

export const CustomDelimiter: Story = {
  args: {},
  render: (args) => (
    <Breadcrumbs
      {...args}
      delimiter={
        <RichIcon size="$200">
          <RichIcon.Icon icon={Bookmark} />
        </RichIcon>
      }
    >
      {content}
    </Breadcrumbs>
  ),
};
/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
