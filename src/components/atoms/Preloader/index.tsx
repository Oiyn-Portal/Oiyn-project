import { LoadingOutlined } from '@ant-design/icons';
import Spin from 'antd/lib/spin';
import React from 'react';

import styles from 'src/components/atoms/Preloader/styles.module.css';

const antIcon = <LoadingOutlined style={{ fontSize: 30 }} spin />;

export const Preloader: React.FC = () => (
  <div className={styles.preloader}>
    <Spin indicator={antIcon} />
  </div>
);
