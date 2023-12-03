import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';

type Props = {
  children: ReactNode;
};

export const MessageProvider: React.FC<Props> = ({ children }) => {
  const notifications = useSelector(
    (state: ReduxState) => state.notifications.data
  );

  return (
    <>
      {notifications.map((el) => (
        <Msg id={el.message.id} />
      ))}

      {children}
    </>
  );
};
