/* eslint-disable max-lines */
import { useState } from 'react';
import XZKUIButton from '../button/button';
import XZKUISemanticText from '../semantic-text/semantic-text';
import XZKUIModal, { XZKUIModalBody } from './modal';
import { useXZKUIModalCtx } from './modal.context';
import type { Meta, StoryObj } from '@storybook/react';
import type { ChangeEvent } from 'react';

const meta = {
  component: XZKUIModal,
  parameters: {
    layout: 'centered',
  },
  tags: ['stable'],
  argTypes: {
    children: { control: 'text' },
  },
  args: {
    // onClick: fn(),
  },
  play: async ({ canvasElement }) => {},
} satisfies Meta<typeof XZKUIModal>;

export default meta;
type Story = StoryObj<typeof meta>;

const blankText =
  'Modal Screen используется для показа дополнительного контента или опций без перехода на другой экран. Он появляется снизу экрана, создавая выделенную и интерактивную область, с которой пользователи могут взаимодействовать, оставаясь в контексте текущей задачи. Modal Screen идеально подходит для отображения вспомогательной информации, элементов управления или ввода данных в формы, улучшая пользовательский опыт за счет удобного и интуитивного доступа к дополнительным функциям.';

export const Default: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open modal">
        Click to open modal
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>{blankText.repeat(6)}</XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

export const Nested: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open modal">
        Click to open modal
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>
            {blankText.repeat(6)}
            <XZKUIModal
              trigger={({ handleOpen }) => (
                <XZKUIButton onClick={handleOpen} aria-label="open nested modal">
                  Click to open nested modal
                </XZKUIButton>
              )}
            >
              <XZKUIModalBody
                headerProps={{
                  title: 'Title',
                  subtitle: 'Subtitle',
                }}
              >
                <div style={{ padding: '0 16px' }}>
                  <XZKUISemanticText>{blankText.repeat(6)}</XZKUISemanticText>
                </div>
              </XZKUIModalBody>
            </XZKUIModal>
          </XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

export const VariantPopup: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open popup modal">
        Click to open popup modal
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        variant="popup"
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>{blankText}</XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

const steps = [<div>First Step</div>, <div>Second Step</div>, <div>Last Step</div>];

export const StepModal: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open step modal">
        Click to open step modal
      </XZKUIButton>
    ),
    initialStep: 2,
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
      >
        {({ step }) => (
          <div style={{ padding: '0 16px' }}>
            <XZKUISemanticText variant="headingMd">{steps[step]}</XZKUISemanticText>
            <XZKUISemanticText>{blankText}</XZKUISemanticText>
          </div>
        )}
      </XZKUIModalBody>
    ),
  },
};

const richSteps = [
  {
    title: 'First Step',
    subtitle: 'Some description first step',
    content: blankText,
  },
  {
    title: 'Second Step',
    content: blankText.repeat(3),
  },
  {
    title: 'Last Step',
    subtitle: 'Finish him',
    content: blankText.repeat(2),
  },
];

function ControlledSteps() {
  const { step, back, next, changeStep } = useXZKUIModalCtx();
  const selectedStep = richSteps[step];
  return (
    <XZKUIModalBody
      headerProps={{
        title: selectedStep.title,
        subtitle: selectedStep.subtitle,
      }}
      footerProps={{
        blur: true,
      }}
      footer={
        <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
          {Boolean(step) && (
            <XZKUIButton variant="secondary" fullWidth onClick={back}>
              Alt Back
            </XZKUIButton>
          )}
          <XZKUIButton fullWidth onClick={next} disabled={step === richSteps.length - 1}>
            Next
          </XZKUIButton>
        </div>
      }
    >
      <div style={{ padding: '0 16px' }}>
        <XZKUISemanticText>{selectedStep.content}</XZKUISemanticText>
        {step === 0 && (
          <XZKUIButton fullWidth onClick={() => changeStep(richSteps.length - 1)}>
            Go To Last Step
          </XZKUIButton>
        )}
      </div>
    </XZKUIModalBody>
  );
}

export const StepControlledModal: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open controlled step modal">
        Click to open controlled step modal
      </XZKUIButton>
    ),
    children: <ControlledSteps />,
  },
};

export const WithFooter: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open footer modal">
        Click to open modal with footer
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
            <XZKUIButton variant="secondary" fullWidth>
              Button
            </XZKUIButton>
            <XZKUIButton fullWidth>Button</XZKUIButton>
          </div>
        }
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>{blankText.repeat(6)}</XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

export const WithBluredFooter: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open footer blured modal">
        Click to open modal with blured footer
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Title',
          subtitle: 'Subtitle',
        }}
        footerProps={{
          blur: true,
        }}
        footer={
          <div style={{ display: 'flex', width: '100%', gap: '4px' }}>
            <XZKUIButton variant="secondary" fullWidth>
              Button
            </XZKUIButton>
            <XZKUIButton fullWidth>Button</XZKUIButton>
          </div>
        }
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>{blankText.repeat(6)}</XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

export const TruncatedHeader: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open truncated header modal">
        Click to open truncated header modal
      </XZKUIButton>
    ),
    children: (
      <XZKUIModalBody
        headerProps={{
          title: 'Long title up to several lines of text '.repeat(5),
          subtitle:
            'Long subtitle up to several lines of text because there is a lot to say'.repeat(5),
        }}
      >
        <div style={{ padding: '0 16px' }}>
          <XZKUISemanticText>{blankText}</XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

function ConfiguredHeader() {
  const [state, setState] = useState({
    title: 'Blank Title',
    subtitle: 'Blank Subtitle',
    showTitle: true,
    showSubtitle: true,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <XZKUIModalBody
      headerProps={{
        title: state.showTitle ? state.title : undefined,
        subtitle: state.showSubtitle ? state.subtitle : undefined,
      }}
    >
      <div style={{ padding: '0 16px' }}>
        <div>
          <label>
            <input
              type="checkbox"
              name="showTitle"
              checked={state.showTitle}
              onChange={handleChange}
            />
            Show Title
          </label>
          {state.showTitle && (
            <input
              type="text"
              name="title"
              value={state.title}
              onChange={handleChange}
              placeholder="Enter title"
            />
          )}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="showSubtitle"
              checked={state.showSubtitle}
              onChange={handleChange}
            />
            Show Subtitle
          </label>
          {state.showSubtitle && (
            <input
              type="text"
              name="subtitle"
              value={state.subtitle}
              onChange={handleChange}
              placeholder="Enter subtitle"
            />
          )}
        </div>
        <XZKUISemanticText>{blankText.repeat(6)}</XZKUISemanticText>
      </div>
    </XZKUIModalBody>
  );
}

export const ConfiguredModalHeader: Story = {
  args: {
    trigger: ({ handleOpen }) => (
      <XZKUIButton onClick={handleOpen} aria-label="open config header modal">
        Click to open config modal
      </XZKUIButton>
    ),
    children: <ConfiguredHeader />,
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
