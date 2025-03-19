import { Plus } from '@xsolla-zk-ui/icons';
import { getComponentsConfig } from '@xsolla-zk-ui/react/utils/components-config';
import Pimple from '../pimple/pimple';
import RichIcon from './rich-icon';
import { richIconPaths } from './rich-icon.styled';
import type { RichIconProps } from './rich-icon.types';
import type { Meta, StoryObj } from '@storybook/react';

const sizes = Object.keys(getComponentsConfig().richIcon) as Array<RichIconProps['size']>;

const meta = {
  component: RichIcon,
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
      options: [...Object.keys(richIconPaths), false],
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

// export const CustomBgThemeBased: Story = {
//   parameters: {
//     docs: {
//       source: {
//         code: `
//           <XZKUIRichIcon
//             bg={({ theme }) => theme.overlay.neutral}
//           >
//             <XZKUISvgIcon
//               icon={SvgPlus}
//             />
//           </XZKUIRichIcon>
//         `,
//         language: 'tsx',
//         format: true,
//         type: 'auto',
//       },
//     },
//   },
//   args: {
//     bg: ({ theme }) => theme.overlay.neutral,
//   },
// };

// export const ButtonType: Story = {
//   parameters: {
//     docs: {
//       source: {
//         code: `
//           <XZKUIRichIcon
//             component="button"
//           >
//             <XZKUISvgIcon icon={SvgPlus} />
//           </XZKUIRichIcon>
//         `,
//         language: 'tsx',
//         format: true,
//         type: 'auto',
//       },
//     },
//   },
//   args: {
//     component: 'button',
//     onClick: (event) => {
//       alert('event.currentTarget.tagName = ' + event.currentTarget.tagName);
//     },
//   },
//   render: (args) => (
//     <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
//       Click on button and check TagName
//       <XZKUIRichIcon data-testid="rich-icon-button-type" {...args} />
//     </div>
//   ),
//   play: async ({ canvasElement }) => {
//     const canvas = within(canvasElement);
//     const element = canvas.queryByTestId('rich-icon-button-type');
//     await expect(element?.tagName).toEqual('BUTTON');
//   },
// };

// export const All: Story = {
//   args: {},
//   render: (args) => (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'center',
//         flexWrap: 'wrap',
//         alignItems: 'center',
//         gap: '12px',
//       }}
//     >
//       {(Object.keys(richIconPaths) as Array<keyof typeof richIconPaths>).map((item) => (
//         <XZKUIRichIcon key={item} shape={item} {...args} />
//       ))}
//     </div>
//   ),
// };

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

// export const WithStrokeShape: Story = {
//   parameters: {
//     docs: {
//       source: {
//         code: `
//           <XZKUIRichIcon
//             backdropProps={{
//               stroke: 'rgba(17, 16, 20, 0.16)',
//               strokeWidth: 1,
//             }}
//           >
//             <XZKUISvgIcon
//               icon={SvgPlus}
//             />
//           </XZKUIRichIcon>
//         `,
//         language: 'tsx',
//         format: true,
//         type: 'auto',
//       },
//     },
//   },
//   args: {
//     backdropProps: {
//       stroke: 'rgba(17, 16, 20, 0.16)',
//       strokeWidth: 1,
//     },
//   },
// };

// export const WithImage: Story = {
//   parameters: {
//     docs: {
//       source: {
//         code: `
//           <XZKUIRichIcon
//             imageSrc="shiba.png"
//           >
//             <XZKUISvgIcon
//               icon={SvgPlus}
//             />
//           </XZKUIRichIcon>
//         `,
//         language: 'tsx',
//         format: true,
//         type: 'auto',
//       },
//     },
//   },
//   args: {
//     imageSrc: 'shiba.png',
//   },
// };

// export const WithImageFill: Story = {
//   args: {
//     imageSrc: 'blank-image.png',
//   },
// };

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
