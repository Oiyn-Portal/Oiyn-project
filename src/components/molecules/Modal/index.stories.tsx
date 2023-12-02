import { Meta, Story } from '@storybook/react';

import { Modal as Component } from 'src/components/molecules/Modal';
import { decorators } from 'src/components/providers/StorybookProvider.tsx';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Modal',
  component: Component,
  decorators,
};

export default meta;

export const Modal: Story = () => (
  <div className="sb_modal_container">
    <Component isVisible onDismiss={() => console.log()}>
      <p style={{ backgroundColor: 'var(--COLOR_STROKE_BORDER)', margin: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        metus faucibus massa aliquam accumsan ut nec odio. Donec diam lorem,
        pharetra a gravida a, scelerisque vel tellus.{' '}
      </p>
    </Component>
  </div>
);

export const ModalWithPopUp: Story = () => (
  <div className="sb_modal_container">
    <Component isVisible onDismiss={() => console.log()} withClose>
      <p style={{ backgroundColor: 'var(--COLOR_STROKE_BORDER)', margin: 0 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        metus faucibus massa aliquam accumsan ut nec odio. Donec diam lorem,
        pharetra a gravida a, scelerisque vel tellus.{' '}
      </p>
    </Component>
  </div>
);
