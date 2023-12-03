import React from 'react';

import { Page } from 'src/components/organisms/Page';
import { Msg } from 'src/i18n/Msg';

const Error404: React.FC = () => (
  <Page template="empty">
    <Msg id="base.buttons.Next" />
  </Page>
);

export default Error404;
