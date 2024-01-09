import React from 'react';

import { Msg } from 'src/i18n/Msg';

import logo from 'src/assets/images/logo.png';

import styles from 'src/components/molecules/Footer/styles.module.css';

export const Footer: React.FC = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img src={logo} alt="logo" />

        <div>
          <p className={styles.text}>
            <Msg id="components.molecules.Footer.agreement" />
          </p>

          <p className={styles.text}>
            <Msg id="components.molecules.Footer.confidentiality" />
          </p>
        </div>
      </div>

      <span className={styles.copy}>© oiyn.kz 2023-2024 гг.</span>
    </div>
  </footer>
);
