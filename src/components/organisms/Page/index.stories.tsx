import { Meta, Story } from '@storybook/react';

import { Page as Component } from 'src/components/organisms/Page';
import { decorators } from 'src/components/providers/StorybookProvider';
import { PAGES } from 'src/constants/pages';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Organisms/Page',
  component: Component,
  decorators,
};

export default meta;

export const WithoutTitle: Story = () => (
  <Component template="withHeader">text</Component>
);

export const WithDefaultTitle: Story = () => (
  <Component template="withHeader" title>
    text
  </Component>
);

export const WithDefaultTitleAndNavigation: Story = () => (
  <Component template="withHeader" title back={{ scheme: PAGES.MAIN }}>
    text
  </Component>
);

export const WithCustomTitle: Story = () => (
  <Component template="withHeader" title="Custom title">
    text
  </Component>
);
