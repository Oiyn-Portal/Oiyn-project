import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { actions } from 'src/actions';

import styles from 'src/components/organisms/ListGames/styles.module.css';

export const ListGames: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      actions.api.games.getGames.started({
        maxRecords: '1',
      })
    );
  }, []);

  console.log(styles);

  return <div>test</div>;
};
