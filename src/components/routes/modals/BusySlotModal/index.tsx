import classNames from 'classnames';
import React from 'react';

import { Error } from 'src/components/atoms/icons/Error';
import { PAGES } from 'src/constants/pages';
import { Msg } from 'src/i18n/Msg';
import { redirect } from 'src/navigation';
import { ID } from 'src/types';

import styles from 'src/components/routes/modals/BusySlotModal/styles.module.css';

export type Props = {
  orderUID: ID;
};

export const BusySlotModal: React.FC<Props> = ({ orderUID }) => {
  const onClick = () => redirect({ scheme: PAGES.GAME, params: { orderUID } });

  return (
    <div className={styles.container}>
      <Error />
      <h1>
        <Msg id="base.buttons.Next" />
      </h1>

      <p className={classNames('text', 'text-style-centered')}>
        <Msg id="base.buttons.Next" />
      </p>

      <button onClick={onClick}>close</button>
    </div>
  );
};
