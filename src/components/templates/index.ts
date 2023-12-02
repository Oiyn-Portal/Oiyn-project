import React from 'react';

import { Entry } from 'src/components/templates/Entry';
import { Template, TemplateProps } from 'src/components/templates/types';

export const templateToComponent: Record<Template, React.FC<TemplateProps>> = {
  entry: Entry,
};
