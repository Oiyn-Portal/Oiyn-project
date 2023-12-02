import classNames from 'classnames';
import React, { useLayoutEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { actions } from 'src/actions';
import { Switch } from 'src/components/atoms/Switch';
import { Button } from 'src/components/atoms/buttons/Button';
import { Input } from 'src/components/molecules/Input';
import { InputPhone } from 'src/components/molecules/InputPhone';
import { useFormik } from 'src/hooks/useFormik';
import { Msg } from 'src/i18n/Msg';
import { ReduxState } from 'src/reducers';
import { validators } from 'src/utils/validation';

import styles from 'src/components/organisms/forms/ContactForm/styles.module.css';

export const ContactForm: React.FC = () => {
  const dispatch = useDispatch();
  const country = useSelector(({ user }: ReduxState) => user?.geoInfo?.country);

  const [currentCountry, setCurrentCountry] = useState(country?.toLowerCase());
  const [notification, setNotification] = useState(true);

  const { handleSubmit, handleChange, values, errors } = useFormik({
    initialValues: {
      name: '',
      phone: '',
    },

    validationSchema: validators.client(currentCountry),

    onSubmit: ({ phone }) => {
      dispatch(
        actions.api.client.phoneVerifyStart.started({
          phone,
        })
      );
    },
  });

  useLayoutEffect(
    () => {
      dispatch(
        actions.ui.client.updateContact({
          ...values,
          ...{ notificationsAllowed: notification },
        })
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [JSON.stringify(values), notification]
  );

  return (
    <div className={styles.wrapper}>
      <p className={classNames('text', 'text-style-centered', styles.text)}>
        <Msg id="components.organisms.forms.ContactForm.header.text" />
      </p>

      <div className={styles.bottom}>
        <div className={styles.middle}>
          <div className={styles.inputWrapper}>
            <Input
              name="name"
              error={errors.name}
              onChange={handleChange('name')}
              placeholder={{
                id: 'components.organisms.forms.ContactForm.name',
              }}
              value={values.name}
            />
          </div>

          <InputPhone
            disabled={false}
            error={errors.phone}
            value={values.phone}
            country={currentCountry}
            placeholder={{
              id: 'components.organisms.forms.ContactForm.phone',
            }}
            onChange={(value, { countryCode }) => {
              setCurrentCountry(countryCode);
              handleChange('phone')(value);
            }}
          />
        </div>

        <Button
          type="button"
          variant="primary"
          label={{ id: 'components.organisms.forms.ContactForm.confirm' }}
          onClick={handleSubmit}
        />
      </div>

      <div className={styles.notifications}>
        <p className="subtext">
          <Msg id="components.organisms.forms.ContactForm.checkBox.title" />
        </p>

        <p className="text">
          <Msg id="components.organisms.forms.ContactForm.checkBox.text" />
        </p>

        <div className={styles.switch}>
          <Switch
            checked={notification}
            onChange={() => setNotification(!notification)}
          />
        </div>
      </div>
    </div>
  );
};
