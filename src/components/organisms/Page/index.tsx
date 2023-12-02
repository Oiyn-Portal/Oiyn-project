import React, { ReactNode, useLayoutEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';
import { useSelector } from 'react-redux';

import { pages } from 'src/components/routes';
import { templateToComponent } from 'src/components/templates';
import { Template, TemplateProps } from 'src/components/templates/types';
import { PAGES } from 'src/constants/pages';
import { Msg, msg } from 'src/i18n/Msg';
import { useRouteMatch } from 'src/navigation/useRouteMatch';
import { ReduxState } from 'src/reducers';

type Props = {
  back?: TemplateProps['back'];
  template: Template;
  title?: string | true;
  children: ReactNode;
};

export const Page: React.FC<Props> = ({ back, children, template, title }) => {
  const intl = useIntl();
  const path = useRouteMatch();

  const { title: id } = pages[path as PAGES] || {};
  const msgProps = useMemo(() => (id ? { id } : undefined), [id]);

  const { userName } = useSelector(({ user }: ReduxState) => ({
    userName: user.data?.name,
  }));

  useLayoutEffect(() => {
    document.title = userName
      ? msg(intl, {
          id: 'components.organisms.Page.personalTitle',
          values: { userName },
        })
      : msg(intl, msgProps || { id: 'components.organisms.Page.title' });
  }, [title, userName, msgProps, intl]);

  let renderedTitle = null;

  if (title) {
    if (typeof title !== 'boolean') {
      renderedTitle = <>{title}</>;
    } else if (msgProps) {
      renderedTitle = <Msg {...msgProps} />;
    }
  }

  const TemplateComponent = templateToComponent[template];

  return (
    <TemplateComponent title={renderedTitle} back={back}>
      {children}
    </TemplateComponent>
  );
};
