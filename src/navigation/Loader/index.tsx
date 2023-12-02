import Spin from 'antd/lib/spin';
import React from 'react';
import { useSelector } from 'react-redux';

import { ReduxState } from 'src/reducers';

import styles from 'src/navigation/Loader/styles.module.css';

export const Loader: React.FC = () => {
  const { isShownLoader } = useSelector((state: ReduxState) => ({
    isShownLoader: state.loader,
  }));

  return (
    <>
      {isShownLoader && (
        <div className={styles.loader}>
          <Spin />
        </div>
      )}
    </>
  );
};
