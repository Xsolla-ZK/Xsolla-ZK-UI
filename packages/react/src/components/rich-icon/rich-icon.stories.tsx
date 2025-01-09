import tokensThemes from '@xsolla-zk-ui/react/tokens/themes';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import XZKUIRichIcon from './rich-icon';
import { richIconPaths } from './rich-icon.styled';
import { richIconThemeSizes } from './rich-icon.theme';
import type { Meta, StoryObj } from '@storybook/react';

const bgVariants = Object.keys(tokensThemes['dark'].theme.background);

const meta = {
  component: XZKUIRichIcon,
  parameters: {
    layout: 'centered',
  },
  // tags: ['!autodocs'],
  argTypes: {
    shape: {
      table: {
        type: { summary: Object.keys(richIconPaths).join('|') },
      },
      control: 'select',
      options: Object.keys(richIconPaths),
    },
    size: {
      control: 'select',
      options: richIconThemeSizes,
      table: {
        defaultValue: { summary: '500' },
        type: { summary: richIconThemeSizes.join('|') },
      },
    },
    bg: {
      table: {
        type: { summary: bgVariants.join('|') },
      },
      control: 'select',
      options: bgVariants,
    },
  },
  args: {
    children: <XZKUISvgIcon data-testid="children-icon" icon={SvgPlus} />,
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIRichIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomBg: Story = {
  args: {
    bg: {
      custom: '#a81caf',
    },
  },
};

export const All: Story = {
  args: {},
  render: (args) => (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '12px',
      }}
    >
      {(Object.keys(richIconPaths) as Array<keyof typeof richIconPaths>).map((item) => (
        <XZKUIRichIcon key={item} shape={item} {...args} />
      ))}
    </div>
  ),
};

export const WithoutShape: Story = {
  args: {
    shape: false,
  },
};

export const WithStrokeShape: Story = {
  args: {
    backdropProps: {
      stroke: 'rgba(17, 16, 20, 0.16)',
      strokeWidth: 1,
    },
  },
};

export const WithImage: Story = {
  args: {
    imageSrc: 'shiba.png',
  },
};

export const WithImageFill: Story = {
  args: {
    imageSrc: 'blank-image.png',
  },
};

export const WithPimple: Story = {
  args: {
    pimple: {
      children: 5,
    },
  },
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
