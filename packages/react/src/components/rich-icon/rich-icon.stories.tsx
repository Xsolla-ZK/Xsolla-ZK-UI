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
    children: <XZKUISvgIcon icon={SvgPlus} />,
    size: 80,
    backdropProps: {
      strokeColor: '#1E40AF',
      strokeWidth: 4,
    },
    // onClick: fn(),
  },
} satisfies Meta<typeof XZKUIRichIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
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
