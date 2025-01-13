import clsx from 'clsx';
import XZKUIButton from '../button/button';
import xzkuiButtonClasses from '../button/button.classes';
import XZKUIDropdown from './dropdown';
import { dropdownThemeSizes } from './dropdown.theme';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  component: XZKUIDropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['!stable'],
  argTypes: {
    size: {
      control: 'select',
      options: dropdownThemeSizes,
      table: { defaultValue: { summary: '500' }, type: { summary: dropdownThemeSizes.join('|') } },
    },
    onClick: { table: { disable: true } },
  },
  args: {
    control: ({ toggleHandler, ownProps }) => (
      <XZKUIButton aria-label="List" onClick={toggleHandler} {...ownProps}>
        Click me
      </XZKUIButton>
    ),
    children: 'Body',
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIDropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <XZKUIDropdown
      control={({ toggleHandler, open, ownProps }) => (
        <XZKUIButton
          aria-label="List"
          onClick={toggleHandler}
          className={clsx(open && xzkuiButtonClasses.active)}
          {...ownProps}
        >
          Click me
        </XZKUIButton>
      )}
    >
      {({ close }) => (
        <ul>
          {[...Array(10).keys()].map((item) => (
            <li key={item}>Some Text {item}</li>
          ))}
        </ul>
      )}
    </XZKUIDropdown>
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
