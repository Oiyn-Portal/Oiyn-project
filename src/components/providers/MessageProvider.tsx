import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';

import { Message } from 'src/components/organisms/Message';
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
        <Message notification={el} key={el.id} />
      ))}

      {children}
    </>
  );
};
