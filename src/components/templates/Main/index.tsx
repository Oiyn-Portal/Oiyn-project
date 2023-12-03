import React from 'react';

import { Footer } from 'src/components/molecules/Footer';
import { Header } from 'src/components/organisms/Header';
import { TemplateProps } from 'src/components/templates/types';

import styles from 'src/components/templates/Main/styles.module.css';

export const Main: React.FC<TemplateProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <Header />

    <div className={styles.child}>{children}</div>

    <Footer />
  </div>
);
