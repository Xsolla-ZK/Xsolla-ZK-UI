import { within, expect } from '@storybook/test';
import XZKUIButton from '../button/button';
import XZKUISemanticText from '../semantic-text/semantic-text';
import XZKUIModal, { XZKUIModalBody } from './modal';
import type { Meta, StoryObj } from '@storybook/react';

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
          <XZKUISemanticText>
            Modal Screen используется для показа дополнительного контента или опций без перехода на
            другой экран. Он появляется снизу экрана, создавая выделенную и интерактивную область, с
            которой пользователи могут взаимодействовать, оставаясь в контексте текущей задачи.
            Modal Screen идеально подходит для отображения вспомогательной информации, элементов
            управления или ввода данных в формы, улучшая пользовательский опыт за счет удобного и
            интуитивного доступа к дополнительным функциям.
          </XZKUISemanticText>
        </div>
      </XZKUIModalBody>
    ),
  },
};

/*
export const ExperimentalFeatureStory: Story = {
  //👇 For this particular story, remove the inherited `stable` tag and apply the `experimental` tag
  tags: ['!stable', 'experimental'],
};
*/
