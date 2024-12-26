// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import styled from '@emotion/styled';
import { type ReactNode } from 'react';
import spacing from '../tokens/common/spacing';
import typography from '../tokens/common/typography';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta = {
  title: 'Docs/Typography',
  tags: ['!autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

const StyledTitle = styled('h1')(
  ({ theme }) => `
    color: ${theme.theme.content.neutralPrimary};
  `,
);

const StyledDisplayGroup = styled('div')(
  ({ theme }) => `
    &:not(:last-of-type) {
      padding-bottom: 1rem;
      border-bottom: 1px solid ${theme.theme.content.neutralPrimary};
    }
  `,
);

const StyledGroup = styled('div')(
  ({ theme }) => `
    margin-bottom: 28px;
    font: ${theme.common.typography.display[400].accent};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const StyledVariant = styled('div')(
  ({ theme }) => `
    font: ${theme.common.typography.display[350].accent};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const StyledPath = styled('div')(
  ({ theme }) => `
    margin-bottom: 8px;
    font: ${theme.common.typography.compact[200].default};
    color: ${theme.theme.content.neutralSecondary};
  `,
);

const StyledTestText = styled('div')(
  ({ theme }) => `
    color: ${theme.theme.content.neutralPrimary};
  `,
);

type Value = {
  size: number;
  path: string;
  value: string;
};

type Variant = {
  variant: string;
  values: Value[];
};

type DisplayGroupProps = {
  data: Variant[];
  group: string;
};

function DisplayGroup({ data, group }: DisplayGroupProps) {
  return (
    <StyledDisplayGroup>
      <StyledGroup style={{ textTransform: 'capitalize' }}>{group}</StyledGroup>
      <div style={{ display: 'flex', gap: spacing[450] }}>
        {data.map(({ variant, values }) => (
          <div key={`${group}-${variant}`} style={{ flex: 1 }}>
            <StyledVariant>{variant}</StyledVariant>
            {values.map(({ path, value }) => (
              <div key={`${group}-${value}`} style={{ padding: '16px 0' }}>
                <StyledPath>{path}</StyledPath>
                <TextStyle value={value}>Header 100500</TextStyle>
              </div>
            ))}
          </div>
        ))}
      </div>
    </StyledDisplayGroup>
  );
}

type TextStyleProps = {
  children: ReactNode;
  value: string;
};

function TextStyle({ children, value }: TextStyleProps) {
  return <StyledTestText style={{ font: value }}>{children}</StyledTestText>;
}

const values = getAllValues(typography, ['display', 'text', 'compact']);
function TypographyDisplay() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {Object.entries(values).map(([key, items]) => (
        <DisplayGroup key={key} data={items} group={key} />
      ))}
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAllValues<T extends Record<string, any>>(obj: T, firstKeys: Array<keyof T>) {
  const result = {} as Record<keyof T, Variant[]>;

  for (const firstKey of firstKeys) {
    const variantMap = {} as Record<keyof T, Variant[]>;

    Object.entries(obj[firstKey]).forEach(([numberKey, variants]) => {
      Object.entries(variants).forEach(([variantKey, value]) => {
        if (!variantMap[variantKey]) {
          variantMap[variantKey] = [];
        }
        variantMap[variantKey].push({
          size: Number(numberKey),
          path: `${firstKey}[${numberKey}].${variantKey}`,
          value,
        });
      });
    });

    result[firstKey] = Object.entries(variantMap).map(([variant, values]) => ({
      variant,
      values,
    }));
  }

  return result;
}

export const Default: Story = {
  render: () => (
    <div style={{ padding: '1rem' }}>
      <StyledTitle>Typography</StyledTitle>
      <TypographyDisplay />
    </div>
  ),
};
