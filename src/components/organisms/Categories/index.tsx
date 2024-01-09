import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { Collapse } from 'src/components/molecules/Collapse';
import { CATEGORIES } from 'src/constants/ui';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';

import styles from 'src/components/organisms/Categories/styles.module.css';

export const Categories: React.FC = () => {
  const dispatch = useDispatch();

  const { categories } = useSelector(
    ({ games }: ReduxState) => ({
      categories: games.searchSettings.categories,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  const objCategories: Record<string, string> = categories.reduce(
    (a, v) => ({ ...a, [v]: v }),
    {}
  );

  const onClick = (value: string) =>
    dispatch(actions.ui.games.setCategories(value));

  return (
    <Collapse>
      <div className={styles.wrapper}>
        {CATEGORIES.map((el, index) => (
          <div key={`${el.value}_${index}`} className={styles.checkboxRect}>
            <input
              onChange={() => onClick(el.value)}
              type="checkbox"
              checked={!!objCategories[el.value]}
              id={`${el.value}_${index}`}
            />
            <label htmlFor={`${el.value}_${index}`}>
              <Msg id={el.msg} />
            </label>
          </div>
        ))}
      </div>
    </Collapse>
  );
};
