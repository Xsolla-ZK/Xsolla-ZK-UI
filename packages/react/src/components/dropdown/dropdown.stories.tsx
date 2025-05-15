import { Popover } from '@tamagui/popover';
import { getComponentsConfig } from '@xsolla-zk/react/utils';
import { Button } from '../button/button';
import { Dropdown } from './dropdown';
import type { DropdownSizes } from './dropdown.types';
import type { Meta, StoryObj } from '@storybook/react';
import { Stack } from '@tamagui/core';

const sizes = Object.keys(getComponentsConfig().dropdown) as DropdownSizes[];

const meta = {
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { table: { disable: true } },
    size: {
      control: 'select',
      options: sizes,
      table: { defaultValue: { summary: '500' }, type: { summary: sizes.join('|') } },
    },
    onClick: { table: { disable: true } },
  },
  args: {},
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <Dropdown allowFlip stayInFrame offset={15} resize>
      <Dropdown.Trigger asChild>
        <Button>
          <Button.Text>Click me</Button.Text>
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        <Stack gap={6}>
          {[...Array(10).keys()].map((item) => (
            <Stack key={item}>Some Text {item}</Stack>
          ))}
        </Stack>
        <Popover.Close asChild>
          <Button
            onPress={() => {
              console.log('close');
            }}
          >
            <Button.Text>Close</Button.Text>
          </Button>
        </Popover.Close>
      </Dropdown.Content>
    </Dropdown>
  ),
};

// function Comp() {
//   const [selected, setSelected] = useState<null | number>(null);

//   return (
//     <XZKUIDropdown
//       control={({ toggleHandler, open, ownProps }) => (
//         <XZKUIButton
//           aria-label="Network List"
//           onClick={toggleHandler}
//           bgOff
//           variant="secondary"
//           // startAdornment={<XZKUISvgIcon icon={SvgHeart} />}
//           endAdornment={<XZKUISvgIcon icon={open ? SvgBackpack : SvgArrowUp} />}
//           className={clsx(open && xzkuiButtonClasses.active)}
//           {...ownProps}
//         >
//           {selected ? `Network #${selected}` : 'Choose Network'}
//         </XZKUIButton>
//       )}
//     >
//       {({ close }) => (
//         <ul>
//           {[...Array(10).keys()].map((item) => (
//             <li key={item} onClick={() => {
//               setSelected(item);
//               close();
//             }}>
//               Network #{item}
//             </li>
//           ))}
//         </ul>
//       )}
//     </XZKUIDropdown>
//   );
// }

// export const Composition: Story = {
//   args: {},
//   render: () => <Comp />,
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
