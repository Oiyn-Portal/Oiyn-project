import React from 'react';

import { Footer } from 'src/components/molecules/Footer';
import { TemplateProps } from 'src/components/templates/types';

import styles from 'src/components/templates/WithFooter/styles.module.css';

export const WithFooter: React.FC<TemplateProps> = ({ children }) => (
  <div className={styles.wrapper}>
    <div className={styles.child}>{children}</div>

    <Footer />
  </div>
);
