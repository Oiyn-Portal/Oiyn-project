import React from 'react';

import { Empty } from 'src/components/templates/Empty';
import { Main } from 'src/components/templates/Main';
import { WithFooter } from 'src/components/templates/WithFooter';
import { Template, TemplateProps } from 'src/components/templates/types';

export const templateToComponent: Record<Template, React.FC<TemplateProps>> = {
  empty: Empty,
  main: Main,
  withFooter: WithFooter,
};
