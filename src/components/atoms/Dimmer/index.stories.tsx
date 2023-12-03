import { Meta, Story, StoryObj } from '@storybook/react';
import { useState } from 'react';

import { Dimmer as Component, Props } from 'src/components/atoms/Dimmer';
import { decorators } from 'src/components/providers/StorybookProvider.tsx';
import { useUnmount } from 'src/hooks/useUnmount';

type ComponentType = typeof Component;

const meta: Meta<ComponentType> = {
  title: 'Atoms/Dimmer',
  component: Component,
  decorators,
};

export default meta;

const Template: Story<Props> = (args) => {
  const [isVisible, setIsVisible] = useState(true);

  const { visible, inProgress } = useUnmount({ isVisible, delaySeconds: 0.25 });

  if (!visible) {
    return <></>;
  }

  return (
    <>
      <Component
        {...args}
        inProgress={inProgress}
        onClose={() => setIsVisible(false)}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce fermentum
        metus faucibus massa aliquam accumsan ut nec odio. Donec diam lorem,
        pharetra a gravida a, scelerisque vel tellus. Sed convallis libero ut
        quam rhoncus, eget pellentesque ligula maximus. Ut condimentum risus
        vitae nulla accumsan congue.
      </p>
      <p>
        Nam commodo tellus et odio malesuada, quis molestie sem pharetra. Ut
        aliquam dictum eros quis iaculis. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Suspendisse
        molestie placerat elit, id iaculis nulla maximus et. Nunc sem erat,
        convallis convallis velit ac, volutpat tempus ligula. Etiam a auctor
        velit.
      </p>
      <p>
        Fusce hendrerit dui sed turpis aliquam, eget elementum nunc feugiat.
        Curabitur bibendum arcu ut nulla dignissim pulvinar in eget ligula. Cras
        sagittis ut elit non luctus. Donec posuere lorem non feugiat vulputate.
        Quisque vel ornare ante, vestibulum rutrum purus. Suspendisse eu commodo
        nunc. Praesent ultricies ipsum eu ipsum pulvinar accumsan. Maecenas
        fringilla, dolor convallis commodo elementum, metus odio rhoncus leo,
        quis pretium nibh lorem id urna. Phasellus convallis tortor vitae odio
        hendrerit auctor. Aliquam finibus blandit neque, sed lacinia est
        placerat eu. In eu consequat mi. Etiam tortor lectus, scelerisque a
        ligula nec, malesuada lobortis enim. Quisque est magna, volutpat et
        finibus et, tristique id nulla.
      </p>
    </>
  );
};

export const Closable: StoryObj<ComponentType> = Template.bind({});
Closable.args = {
  isDisabled: false,
};

export const Disabled: StoryObj<ComponentType> = Template.bind({});
Disabled.args = {
  isDisabled: true,
};
