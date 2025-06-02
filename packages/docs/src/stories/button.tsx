'use client';

import { Button, getComponentsConfig, Separator, View } from '@xsolla-zk/react';
import { Fragment } from 'react';
import type { ButtonSizes, ButtonTone } from '@xsolla-zk/react';

const variants = ['primary', 'secondary', 'tertiary'] as const;

export const AllVariants = () => (
  <View display="flex" flexDirection="row" alignItems="center" gap={12} flexWrap="wrap">
    {variants.map((variant, idx) => (
      <Fragment key={variant}>
        <View display="flex" flexDirection="column" alignItems="center" gap={12}>
          <Button variant={variant}>
            <Button.Text>{variant}</Button.Text>
          </Button>
          <Button variant={variant} disabled>
            <Button.Text>{variant}</Button.Text>
          </Button>
          <Button variant={variant} isLoading>
            <Button.Text>{variant}</Button.Text>
          </Button>
        </View>
        {idx < variants.length - 1 && <Separator vertical />}
      </Fragment>
    ))}
  </View>
);

const sizes = Object.keys(getComponentsConfig().button) as ButtonSizes[];

export const AllSizes = () => (
  <View display="flex" flexDirection="row" alignItems="center" gap={12} flexWrap="wrap">
    {sizes.map((size) => (
      <Button key={size} size={size}>
        <Button.Text>{size}</Button.Text>
      </Button>
    ))}
  </View>
);

const tones = [
  'brand',
  'neutral',
  'positive',
  'warning',
  'info',
  'negative',
  'brand-extra',
] as const;

export const AllTones = () => (
  <View display="flex" flexDirection="row" alignItems="center" gap={12} flexWrap="wrap">
    {tones.map((tone) => (
      <Button key={tone} tone={tone as ButtonTone}>
        <Button.Text>{tone}</Button.Text>
      </Button>
    ))}
  </View>
);
