import { expect, within } from '@storybook/test';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import XZKUIRichIcon from './rich-icon';
import { richIconPaths } from './rich-icon.styled';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIRichIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['!autodocs'],
  argTypes: {
    shape: { control: 'inline-radio', options: Object.keys(richIconPaths) },
  },
  args: {
    children: <XZKUISvgIcon data-testid="children-icon" icon={SvgPlus} />,
    size: 80,
    backdropProps: {
      stroke: '#1E40AF',
      strokeWidth: 4,
    },
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIRichIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  // 👇 Test
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // 👇 Assert DOM structure
    await expect(canvas.queryByTestId('children-icon')).toBeInTheDocument();
  },
};

export const All: Story = {
  args: {},
  render: (args) => (
    <>
      {Object.keys(richIconPaths).map((item) => (
        <XZKUIRichIcon key={item} shape={item} {...args} />
      ))}
    </>
  ),
};

{
  /* export const SShapeRounded: Story = {
  args: {
  },
}; */
}

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
