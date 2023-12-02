import { Meta, Story } from '@storybook/react';

import {
  CloseLine,
  CloseLine as Component,
} from 'src/components/atoms/icons/CloseLine';
import { Cross } from 'src/components/atoms/icons/Cross';
import { Paused } from 'src/components/atoms/icons/Paused';
import { Tick } from 'src/components/atoms/icons/Tick';
import { decorators } from 'src/components/providers/StorybookProvider.tsx';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms',
  component: Component,
  decorators,
};

export default meta;

export const Icons: Story = () => (
  <div className="sb_flex_row sb_subtext_bg">
    <CloseLine />
    <Cross />
    <Paused />
    <Tick />
  </div>
);
