import React from 'react';

import styles from 'src/components/atoms/Banner/styles.module.css';

type Props = {
  children?: React.ReactNode;
};

export const Banner: React.FC<Props> = ({ children = '' }) => (
  <div className={styles.banner}>{children}</div>
);
