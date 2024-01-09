import React, { useEffect } from 'react';
import { useIntl } from 'react-intl';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { useFormik } from 'src/hooks/useFormik';
import { msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';
import { debounce } from 'src/utils/lib';

import styles from 'src/components/organisms/forms/SearchForm/styles.module.css';

export const SearchForm: React.FC = () => {
  const intl = useIntl();
  const dispatch = useDispatch();

  const { searchWord } = useSelector(
    ({ games }: ReduxState) => ({
      searchWord: games.searchSettings.searchWord,
    }), // No rerender
    (left, right) => JSON.stringify(left) === JSON.stringify(right)
  );

  const { handleChange, values, handleSubmit } = useFormik({
    initialValues: {
      word: searchWord,
    },

    validationSchema: undefined,

    onSubmit: ({ word }) => {
      dispatch(actions.ui.games.setSearchWord(word));
    },
  });

  const onChange = debounce((value) => {
    handleChange('word')(value);
  }, 700);

  useEffect(() => {
    if (values.word !== searchWord) {
      handleSubmit();
    }
  }, [values.word]);

  return (
    <input
      defaultValue={values.word}
      onChange={(e) => onChange(e.currentTarget.value)}
      maxLength={50}
      className={styles.input}
      placeholder={msg(intl, {
        id: 'components.organisms.forms.SearchForm.placeholder',
      })}
    />
  );
};
