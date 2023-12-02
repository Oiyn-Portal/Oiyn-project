import classNames from 'classnames';
import React, { ReactNode } from 'react';

import styles from 'src/components/atoms/PageWrapper/styles.module.css';

type Props = {
  withFixedHeader?: boolean;
  children: ReactNode;
};

export const PageWrapper: React.FC<Props> = ({ withFixedHeader, children }) => (
  <div
    className={classNames(styles.pageWrapper, {
      [styles.withFixedHeader]: withFixedHeader,
    })}
  >
    {children}
  </div>
);

export const PageWrapperNew: React.FC<Props> = ({
  withFixedHeader,
  children,
}) => (
  <div
    className={classNames(styles.pageWrapperNew, {
      [styles.withFixedHeaderNew]: withFixedHeader,
    })}
  >
    {children}
  </div>
);
