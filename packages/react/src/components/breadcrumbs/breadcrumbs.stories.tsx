import { within, expect } from '@storybook/test';
import Button from '../button/button';
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
    children: (
      <>
        <Breadcrumbs.Item>Sweet</Breadcrumbs.Item>
        <Breadcrumbs.Item>Home</Breadcrumbs.Item>
        <Breadcrumbs.Item>Alabama</Breadcrumbs.Item>
      </>
    ),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const CustomBreadcrumbsItem = Breadcrumbs.Item.styleable(
  ({ children, ...props }, ref) => (
    <Breadcrumbs.Item {...props} ref={ref} asChild>
      <Button>
        <Button.Text>{children}</Button.Text>
      </Button>
    </Breadcrumbs.Item>
  ),
  {
    disableTheme: true,
  },
);

export const CustomItem: Story = {
  args: {
    children: (
      <>
        <CustomBreadcrumbsItem>Sweet</CustomBreadcrumbsItem>
        <CustomBreadcrumbsItem>Home</CustomBreadcrumbsItem>
        <CustomBreadcrumbsItem>Alabama</CustomBreadcrumbsItem>
      </>
    ),
  },
};
/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
