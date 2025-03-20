import { Stack } from '@tamagui/core';
import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import RichIcon from './rich-icon';
import { RICH_ICON_SHAPES } from './rich-icon.constants';
import type { RichIconProps } from './rich-icon.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().richIcon) as Array<RichIconProps['size']>;
const shapes = [...Object.keys(RICH_ICON_SHAPES), false] as Array<
  keyof typeof RICH_ICON_SHAPES | false
>;

const meta = {
  component: RichIcon,
  parameters: {
    layout: 'centered',
  },
  // tags: ['!autodocs'],
  argTypes: {
    shape: {
      table: {
        type: { summary: shapes.join('|') },
      },
      control: 'select',
      options: shapes,
    },
    size: {
      control: 'select',
      options: sizes,
      table: {
        defaultValue: { summary: '$500' },
        type: { summary: sizes.join('|') },
      },
    },
    backgroundColor: {
      control: 'color',
    },
    pressable: {
      control: 'boolean',
    },
  },
  args: {
    children: <RichIcon.Icon data-testid="children-icon" icon={Plus} />,
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof RichIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Pressable: Story = {
  args: {
    pressable: true,
  },
};

export const CustomBg: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon
            backgroundColor="#a81caf"
          >
            <RichIcon.Icon
              icon={Plus}
            />
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    backgroundColor: '#a81caf',
  },
};

export const CustomColor: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon
            color="#1f37f1"
          >
            <RichIcon.Icon
              icon={Plus}
            />
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    color: '#1f37f1',
  },
};

export const AllShapes: Story = {
  args: {},
  render: (args) => (
    <Stack flexWrap="wrap" gap={12} alignItems="center" justifyContent="center" flexDirection="row">
      {shapes.map((item) => (
        <RichIcon key={`shape-${item}`} shape={item} {...args} />
      ))}
    </Stack>
  ),
};

export const AllSizes: Story = {
  args: {},
  render: (args) => (
    <Stack flexWrap="wrap" gap={12} alignItems="center" justifyContent="center" flexDirection="row">
      {sizes.map((item) => (
        <RichIcon key={`size-${item}`} size={item} {...args} />
      ))}
    </Stack>
  ),
};

export const WithoutShape: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon
            shape={false}
          >
            <RichIcon.Icon
              icon={Plus}
            />
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    shape: false,
  },
};

export const WithStrokeShape: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon
            backdropProps={{
              stroke: 'rgba(17, 16, 20, 0.16)',
              strokeWidth: 3,
            }}
          >
            <RichIcon.Icon
              icon={Plus}
            />
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    backdropProps: {
      stroke: 'rgba(17, 16, 20, 0.16)',
      strokeWidth: 3,
    },
  },
};

export const WithImage: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon
            imageSrc="shiba.png"
          >
            <RichIcon.Icon
              icon={Plus}
            />
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
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
  parameters: {
    docs: {
      source: {
        code: `
          <RichIcon>
            <RichIcon.Icon
              icon={Plus}
            />
            <RichIcon.Pimple>
              <RichIcon.Pimple.Text>5</RichIcon.Pimple.Text>
            </RichIcon.Pimple>
          </RichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {},
  render: (args) => (
    <RichIcon {...args}>
      <RichIcon.Icon icon={Plus} />
      <RichIcon.Pimple>
        <RichIcon.Pimple.Text>5</RichIcon.Pimple.Text>
      </RichIcon.Pimple>
    </RichIcon>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
