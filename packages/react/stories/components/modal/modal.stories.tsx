/* eslint-disable max-lines */
import { useState } from 'react';
import Button from '../button/button';
// import Checkbox from '../checkbox/checkbox';
import SemanticText from '../semantic-text/semantic-text';
import Modal from './modal';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent, ComponentProps } from 'react';

const meta = {
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    // children: { control: 'text' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} as Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const blankText =
  'Modal Screen используется для показа дополнительного контента или опций без перехода на другой экран. Он появляется снизу экрана, создавая выделенную и интерактивную область, с которой пользователи могут взаимодействовать, оставаясь в контексте текущей задачи. Modal Screen идеально подходит для отображения вспомогательной информации, элементов управления или ввода данных в формы, улучшая пользовательский опыт за счет удобного и интуитивного доступа к дополнительным функциям.';

export const Default: Story = {
  args: {},
  render: () => (
    <Modal>
      <Modal.Header>
        <Modal.Title>Title</Modal.Title>
        <Modal.Description>Description</Modal.Description>
      </Modal.Header>
      <Modal.Content>
        <SemanticText>{blankText.repeat(6)}</SemanticText>
      </Modal.Content>
      <Modal.Footer>
        <Button>
          <Button.Text>Close</Button.Text>
        </Button>
      </Modal.Footer>
    </Modal>
  ),
};

// export const Default: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <Button onClick={handleOpen} aria-label="open modal">
//         Click to open modal
//       </Button>
//     ),
//     children: (
//       <ModalBody
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText.repeat(6)}</SemanticText>
//         </div>
//       </ModalBody>
//     ),
//   },
// };

// export const Nested: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open modal">
//         Click to open modal
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>
//             {blankText.repeat(6)}
//             <XZKUIModal
//               trigger={({ handleOpen }) => (
//                 <XZKUIButton onClick={handleOpen} aria-label="open nested modal">
//                   Click to open nested modal
//                 </XZKUIButton>
//               )}
//             >
//               <XZKUIModalBody
//                 slotProps={{
//                   header: {
//                     title: 'Title',
//                     subtitle: 'Subtitle',
//                   },
//                 }}
//               >
//                 <div style={{ padding: '0 16px' }}>
//                   <SemanticText>{blankText.repeat(6)}</SemanticText>
//                 </div>
//               </XZKUIModalBody>
//             </XZKUIModal>
//           </SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// export const VariantPopup: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open popup modal">
//         Click to open popup modal
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         variant="popup"
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText}</SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// const steps = [<div>First Step</div>, <div>Second Step</div>, <div>Last Step</div>];

// export const StepModal: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open step modal">
//         Click to open step modal
//       </XZKUIButton>
//     ),
//     initialStep: 2,
//     children: (
//       <XZKUIModalBody
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//         }}
//       >
//         {({ step }) => (
//           <div style={{ padding: '0 16px' }}>
//             <SemanticText variant="headingMd">{steps[step]}</SemanticText>
//             <SemanticText>{blankText}</SemanticText>
//           </div>
//         )}
//       </XZKUIModalBody>
//     ),
//   },
// };

// const richSteps = [
//   {
//     title: 'First Step',
//     subtitle: 'Some description first step',
//     content: blankText,
//   },
//   {
//     title: 'Second Step',
//     content: blankText.repeat(3),
//   },
//   {
//     title: 'Last Step',
//     subtitle: 'Finish him',
//     content: blankText.repeat(2),
//   },
// ];

// function ControlledSteps() {
//   const { step, back, next, changeStep } = useXZKUIModalContext();
//   const selectedStep = richSteps[step];
//   return (
//     <XZKUIModalBody
//       slotProps={{
//         header: {
//           title: selectedStep.title,
//           subtitle: selectedStep.subtitle,
//         },
//         footer: {
//           blur: true,
//           children: (
//             <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
//               {Boolean(step) && (
//                 <XZKUIButton variant="secondary" fullWidth onClick={back}>
//                   Alt Back
//                 </XZKUIButton>
//               )}
//               <XZKUIButton fullWidth onClick={next} disabled={step === richSteps.length - 1}>
//                 Next
//               </XZKUIButton>
//             </div>
//           ),
//         },
//       }}
//     >
//       <div style={{ padding: '0 16px' }}>
//         <SemanticText>{selectedStep.content}</SemanticText>
//         {step === 0 && (
//           <XZKUIButton fullWidth onClick={() => changeStep(richSteps.length - 1)}>
//             Go To Last Step
//           </XZKUIButton>
//         )}
//       </div>
//     </XZKUIModalBody>
//   );
// }

// export const StepControlledModal: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open controlled step modal">
//         Click to open controlled step modal
//       </XZKUIButton>
//     ),
//     children: <ControlledSteps />,
//   },
// };

// export const WithFooter: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open footer modal">
//         Click to open modal with footer
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//           footer: {
//             children: (
//               <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
//                 <XZKUIButton variant="secondary" fullWidth>
//                   Button
//                 </XZKUIButton>
//                 <XZKUIButton fullWidth>Button</XZKUIButton>
//               </div>
//             ),
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText.repeat(6)}</SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// export const WithBluredFooter: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open footer blured modal">
//         Click to open modal with blured footer
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         slotProps={{
//           header: {
//             title: 'Title',
//             subtitle: 'Subtitle',
//           },
//           footer: {
//             blur: true,
//             children: (
//               <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
//                 <XZKUIButton variant="secondary" fullWidth>
//                   Button
//                 </XZKUIButton>
//                 <XZKUIButton fullWidth>Button</XZKUIButton>
//               </div>
//             ),
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText.repeat(6)}</SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// export const TruncatedHeader: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open truncated header modal">
//         Click to open truncated header modal
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         slotProps={{
//           header: {
//             title: 'Long title up to several lines of text '.repeat(5),
//             subtitle:
//               'Long subtitle up to several lines of text because there is a lot to say'.repeat(5),
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText}</SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// function CustomHeaderSlot({
//   title,
//   subtitle,
//   onClick,
//   ...rest
// }: ComponentProps<typeof XZKUIModalBody.Header>) {
//   const { close } = useXZKUIModalContext();
//   return (
//     <div style={{ padding: '40px' }} {...rest}>
//       <h1>{title}</h1>
//       <p>{subtitle}</p>
//       <div onClick={onClick}>Click</div>
//       <button onClick={close}>CLOSE</button>
//     </div>
//   );
// }

// export const CustomSlots: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open custom slots modal">
//         Click to open custom slots modal
//       </XZKUIButton>
//     ),
//     children: (
//       <XZKUIModalBody
//         slots={{
//           header: CustomHeaderSlot,
//           footer: () => <div>DNO</div>,
//         }}
//         slotProps={{
//           header: {
//             title: 'Title KEK',
//             subtitle: 'Subtitle',
//             onClick: (event) => {
//               alert(event.currentTarget);
//             },
//           },
//         }}
//       >
//         <div style={{ padding: '0 16px' }}>
//           <SemanticText>{blankText.repeat(6)}</SemanticText>
//         </div>
//       </XZKUIModalBody>
//     ),
//   },
// };

// function ConfiguredHeader() {
//   const [state, setState] = useState({
//     title: 'Blank Title',
//     subtitle: 'Blank Subtitle',
//     showTitle: true,
//     showSubtitle: true,
//   });

//   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const { name, value, type, checked } = e.target;
//     setState((prevState) => ({
//       ...prevState,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   return (
//     <XZKUIModalBody
//       slotProps={{
//         header: {
//           title: state.showTitle ? state.title : undefined,
//           subtitle: state.showSubtitle ? state.subtitle : undefined,
//         },
//       }}
//     >
//       <div style={{ padding: '0 16px' }}>
//         <div>
//           <XZKUICheckbox
//             label="Show Title"
//             name="showTitle"
//             checked={state.showTitle}
//             onChange={handleChange}
//           />
//           {state.showTitle && (
//             <input
//               type="text"
//               name="title"
//               value={state.title}
//               onChange={handleChange}
//               placeholder="Enter title"
//             />
//           )}
//         </div>
//         <div>
//           <XZKUICheckbox
//             label="Show Subtitle"
//             name="showSubtitle"
//             checked={state.showSubtitle}
//             onChange={handleChange}
//           />
//           {state.showSubtitle && (
//             <input
//               type="text"
//               name="subtitle"
//               value={state.subtitle}
//               onChange={handleChange}
//               placeholder="Enter subtitle"
//             />
//           )}
//         </div>
//         <SemanticText>{blankText.repeat(6)}</SemanticText>
//       </div>
//     </XZKUIModalBody>
//   );
// }

// export const ConfiguredModalHeader: Story = {
//   args: {
//     trigger: ({ handleOpen }) => (
//       <XZKUIButton onClick={handleOpen} aria-label="open config header modal">
//         Click to open config modal
//       </XZKUIButton>
//     ),
//     children: <ConfiguredHeader />,
//   },
// };

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
