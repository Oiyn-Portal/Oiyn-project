import React from 'react';
import { useIntl } from 'react-intl';

import { useFormik } from 'src/hooks/useFormik';
import { msg } from 'src/i18n/Msg';

import styles from 'src/components/organisms/forms/SearchForm/styles.module.css';

export const SearchForm: React.FC = () => {
  const intl = useIntl();

  const { handleChange, values } = useFormik({
    initialValues: {
      word: '',
    },

    validationSchema: undefined,

    onSubmit: ({ word }) => {
      console.log(word);
    },
  });

  return (
    <input
      value={values.word}
      onChange={handleChange('word')}
      className={styles.input}
      placeholder={msg(intl, {
        id: 'components.organisms.forms.SearchForm.placeholder',
      })}
    />
  );
};
