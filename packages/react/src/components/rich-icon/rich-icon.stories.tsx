import { Stack } from '@tamagui/core';
import { Plus } from '@xsolla-zk/icons';
import { getComponentsConfig } from '@xsolla-zk/react/utils/components-config';
import { Pimple } from '../pimple/pimple';
import { RichIcon } from './rich-icon';
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
  tags: ['stable'],
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

export const WithCustomShape: Story = {
  args: {
    shape:
      'M5.88745 5.88745C-1.96248 13.7374 -1.96248 26.4646 5.88745 34.3146L11.5729 40L5.88745 45.6854C-1.96248 53.5354 -1.96248 66.2626 5.88745 74.1125C13.7374 81.9625 26.4646 81.9625 34.3146 74.1125L40 68.4271L45.6854 74.1125C53.5354 81.9625 66.2626 81.9625 74.1125 74.1125C81.9625 66.2626 81.9625 53.5354 74.1125 45.6854L68.4271 40L74.1125 34.3146C81.9625 26.4646 81.9625 13.7374 74.1125 5.88745C66.2626 -1.96248 53.5354 -1.96248 45.6854 5.88745L40 11.5729L34.3146 5.88745C26.4646 -1.96248 13.7374 -1.96248 5.88745 5.88745Z',
  },
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
            <Pimple size="$500" position="absolute" top={-4} right={-4}>
              <Pimple.Text>5</Pimple.Text>
            </Pimple>
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
      <Pimple size="$500" position="absolute" top={-4} right={-4}>
        <Pimple.Text>5</Pimple.Text>
      </Pimple>
    </RichIcon>
  ),
};

export const WithContent: Story = {
  args: {},
  render: (args) => (
    <RichIcon {...args}>
      <RichIcon.Text>X</RichIcon.Text>
    </RichIcon>
  ),
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
