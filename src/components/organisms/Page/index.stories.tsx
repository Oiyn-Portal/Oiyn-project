import { Meta, Story } from '@storybook/react';

import { Page as Component } from 'src/components/organisms/Page';
import { decorators } from 'src/components/providers/StorybookProvider';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Organisms/Page',
  component: Component,
  decorators,
};

export default meta;

export const WithoutTitle: Story = () => (
  <Component template="empty">text</Component>
);
