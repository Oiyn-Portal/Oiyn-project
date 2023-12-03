import { ReactNode } from 'react';

import { Scheme } from 'src/types';

export type Template = 'empty' | 'main';

export type TemplateProps = {
  title: JSX.Element | null;
  back?: Scheme;
  children: ReactNode;
};
