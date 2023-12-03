import classNames from 'classnames';
import React from 'react';

import { useFormik } from 'src/hooks/useFormik';
import { Msg } from 'src/i18n/Msg';
import { validators } from 'src/utils/validation';

import styles from 'src/components/organisms/forms/ContactForm/styles.module.css';

export const ContactForm: React.FC = () => {
  const { handleChange, values } = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    validationSchema: validators.client('RU'),

    onSubmit: ({ phone }) => {
      console.log(phone);
    },
  });

  return (
    <div className={styles.wrapper}>
      <p className={classNames('text', 'text-style-centered', styles.text)}>
        <Msg id="base.buttons.Next" />
      </p>

      <div className={styles.bottom}>
        <div className={styles.middle}>
          <div className={styles.inputWrapper}>
            <input
              name="name"
              onChange={handleChange('name')}
              value={values.name}
            />
          </div>
        </div>
      </div>

      <div className={styles.notifications}></div>
    </div>
  );
};
