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
  // tags: ['stable'],
  argTypes: {
    size: {
      control: false,
      table: { defaultValue: { summary: 'md' }, type: { summary: dropdownThemeSizes.join('|') } },
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

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
