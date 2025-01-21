import { expect, fn, within } from '@storybook/test';
import XZKUISvgIcon from '../svg-icon/svg-icon';
import SvgPlus from '../svg-icons/plus';
import XZKUIRichIcon from './rich-icon';
import { richIconPaths } from './rich-icon.styled';
import { richIconThemeSizes } from './rich-icon.theme';
import type { Meta, StoryObj } from '@storybook/react';

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
      control: 'color',
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
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRichIcon
            bg="#a81caf"
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    bg: '#a81caf',
  },
};

export const CustomBgThemeBased: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRichIcon
            bg={({ theme }) => theme.overlay.neutral}
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    bg: ({ theme }) => theme.overlay.neutral,
  },
};

export const ButtonType: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRichIcon
            component="button"
          >
            <XZKUISvgIcon icon={SvgPlus} />
          </XZKUIRichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
  args: {
    component: 'button',
    onClick: (event) => {
      alert('event.currentTarget.tagName = ' + event.currentTarget.tagName);
    },
  },
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
      Click on button and check TagName
      <XZKUIRichIcon data-testid="rich-icon-button-type" {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const element = canvas.queryByTestId('rich-icon-button-type');
    await expect(element?.tagName).toEqual('BUTTON');
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
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRichIcon
            shape={false}
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
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
          <XZKUIRichIcon
            backdropProps={{
              stroke: 'rgba(17, 16, 20, 0.16)',
              strokeWidth: 1,
            }}
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
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
      strokeWidth: 1,
    },
  },
};

export const WithImage: Story = {
  parameters: {
    docs: {
      source: {
        code: `
          <XZKUIRichIcon
            imageSrc="shiba.png"
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
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
          <XZKUIRichIcon
            pimple={{
              children: 5,
            }}
          >
            <XZKUISvgIcon
              icon={SvgPlus}
            />
          </XZKUIRichIcon>
        `,
        language: 'tsx',
        format: true,
        type: 'auto',
      },
    },
  },
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
