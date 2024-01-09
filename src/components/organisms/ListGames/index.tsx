import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { Card } from 'src/components/molecules/Card';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';

import styles from 'src/components/organisms/ListGames/styles.module.css';

export const ListGames: React.FC = () => {
  const dispatch = useDispatch();

  const { isLoader, games, locale, searchSettings } = useSelector(
    ({ games, user }: ReduxState) => ({
      isLoader: games.isFetching,
      games: games.data,
      searchSettings: games.searchSettings,
      locale: user.geoInfo.locale,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  useEffect(() => {
    const categories = searchSettings.categories.length
      ? searchSettings.categories.join('|')
      : '';
    const searchWord = searchSettings.searchWord.toUpperCase();

    dispatch(
      actions.api.games.getGames.started({
        view: 'Grid view',
        filterByFormula: `AND( {turnOn}, REGEX_MATCH( UPPER({title}) , "${searchWord}" ), REGEX_MATCH( {categories} , "${categories}" ) )`,
        extra: {
          field: 'data',
        },
      })
    );
  }, [searchSettings]);

  if (isLoader) {
    return (
      <div className={styles.list}>
        <div className={styles.loader}>
          <Spin indicator={<LoadingOutlined style={{ fontSize: 40 }} spin />} />
        </div>
      </div>
    );
  }

  if (!games.length) {
    return (
      <div className={styles.list}>
        <Msg id="components.organisms.ListGames.noResults" />
      </div>
    );
  }

  return (
    <div className={styles.list}>
      {games.map((el) => (
        <div key={el.id} className={styles.wrapperCard}>
          <Card game={el} locale={locale} />
        </div>
      ))}
    </div>
  );
};
