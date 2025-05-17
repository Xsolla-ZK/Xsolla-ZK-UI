// import { useState } from 'react';
// import { SegmentedControl } from './segmented-control';
// import { segmentedControlThemeSizes } from './segmented-control.theme';
// import type { XZKUISegmentedControlSelectedItem } from './segmented-control.types';
// import type { Meta, StoryObj } from '@storybook/react';

// const meta = {
//   component: SegmentedControl,
//   parameters: {
//     layout: 'fullscreen',
//   },
//   tags: ['!stable'],
//   argTypes: {
//     size: {
//       control: 'select',
//       options: segmentedControlThemeSizes,
//       table: {
//         defaultValue: { summary: '500' },
//         type: { summary: segmentedControlThemeSizes.join('|') },
//       },
//     },
//   },
//   args: {
//     values: ['first', 'second', 'third'],
//     // onClick: fn(),
//   },
//   play: async ({ canvasElement }) => {},
// } satisfies Meta<typeof SegmentedControl>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Default: Story = {
//   args: {},
// };

// export const DefaultSelected: Story = {
//   args: {
//     defaultSelected: 1,
//   },
// };

// export const OnChangeCallback: Story = {
//   args: {
//     onChangeValue: (item) => {
//       alert(JSON.stringify(item));
//     },
//   },
// };

// const externalArrayContent = [
//   'first content',
//   <div>
//     <h3>Another content</h3>
//     <p>SomeText</p>
//   </div>,
//   'last content',
// ];

// export const PickExternalArrayContent: Story = {
//   args: {},
//   render: ({ onChangeValue, ...args }) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [active, setActive] = useState<SegmentedControlSelectedItem>();
//     return (
//       <div style={{ width: 300 }}>
//         <SegmentedControl
//           onChangeValue={(item) => {
//             setActive(item);
//           }}
//           {...args}
//         />
//         <div style={{ marginTop: 12 }}>
//           {active
//             ? (externalArrayContent[active?.idx] ?? 'Not Selected')
//             : 'Select control to show content'}
//         </div>
//       </div>
//     );
//   },
// };

// const externalObjectData: Record<string, number> = {
//   usd: 1,
//   rub: 100,
//   inr: 85,
// };

// export const PickExternalObjectData: Story = {
//   args: {
//     values: ['usd', 'rub', 'inr', 'eur'],
//   },
//   render: ({ onChangeValue, ...args }) => {
//     // eslint-disable-next-line react-hooks/rules-of-hooks
//     const [active, setActive] = useState<SegmentedControlSelectedItem>();
//     return (
//       <div style={{ width: 300 }}>
//         <SegmentedControl
//           onChangeValue={(item) => {
//             setActive(item);
//           }}
//           {...args}
//         />
//         <div style={{ marginTop: 12 }}>
//           {active !== undefined
//             ? 'Current Price: ' + (externalObjectData[active.value] ?? 'Not Found')
//             : 'Select control to show current price'}
//         </div>
//       </div>
//     );
//   },
// };

// /*
// export const ExperimentalFeatureStory: Story = {
//   //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
//   tags: ['!stable', 'experimental'],
// };
// */
