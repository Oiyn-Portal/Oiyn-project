import React from 'react';

import { Page } from 'src/components/organisms/Page';
import { PAGES } from 'src/constants/pages';
import { Link } from 'src/navigation/Link';

const Main: React.FC = () => (
  <Page template="empty">
    Example:
    <Link url={{ scheme: PAGES.GAME, params: { orderUID: 'jsnake' } }}>
      JSnake
    </Link>
  </Page>
);

export default Main;
