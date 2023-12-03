import { Collapse as Component } from 'antd';
import CollapsePanel from 'antd/es/collapse/CollapsePanel';
import React from 'react';

import { Msg } from 'src/i18n/Msg';

import styles from 'src/components/molecules/Collapse/styles.module.css';

type Props = {
  children?: React.ReactNode;
};

const Header = () => (
  <div className={styles.header}>
    <img src="src/assets/images/accordion.png" alt="icon" />

    <span className={styles.text}>
      <Msg id="components.molecules.Collapse.category" />
    </span>
  </div>
);

export const Collapse: React.FC<Props> = ({ children }) => (
  <Component
    defaultActiveKey={['1']}
    bordered={false}
    style={{ backgroundColor: 'transparent' }}
    expandIconPosition="end"
  >
    <CollapsePanel header={<Header />} key="1">
      {children}
    </CollapsePanel>
  </Component>
);
