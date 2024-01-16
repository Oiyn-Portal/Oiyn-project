import React from 'react';

import { Box } from 'src/components/atoms/Box';

import styles from 'src/components/atoms/Banner/styles.module.css';

type Props = {
  children?: React.ReactNode;
};

export const Banner: React.FC<Props> = ({ children = '' }) => (
  <div className={styles.banner}>
    <Box visible={!children} className={styles.empty}>
      Рекламный баннер
    </Box>

    {children}
  </div>
);
