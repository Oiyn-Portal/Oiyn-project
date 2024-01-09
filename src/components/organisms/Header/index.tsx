import React from 'react';
import { useDispatch } from 'react-redux';

import { actions } from 'src/actions';
import { Locales } from 'src/i18n';
import { Msg } from 'src/i18n/Msg';

import instagram from 'src/assets/images/instagram.jpg';
import telegram from 'src/assets/images/telegram.jpg';

import styles from 'src/components/organisms/Header/styles.module.css';

export const Header: React.FC = () => {
  const dispatch = useDispatch();

  const onLang = (lang: Locales) =>
    dispatch(actions.ui.geoInfo.set({ info: { locale: lang } }));

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.icons}>
          <div className={styles.icon}>
            <a href="https://www.instagram.com/oiyn_dev_studio/">
              <img src={instagram} alt="instagram" />
            </a>
          </div>

          <div className={styles.icon}>
            <a href="https://t.me/oiyn_dev_studio">
              <img src={telegram} alt="telegram" />
            </a>
          </div>

          <h1 className={styles.title}>
            <Msg id="components.organisms.Header.title" />
          </h1>
        </div>

        <div className={styles.langs}>
          <p onClick={() => onLang('kz')} className={styles.lang}>
            KZ
          </p>

          <p onClick={() => onLang('ru')} className={styles.lang}>
            RU
          </p>
        </div>
      </div>
    </header>
  );
};
