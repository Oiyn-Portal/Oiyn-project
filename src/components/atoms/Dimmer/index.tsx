import classNames from 'classnames';
import React, { ReactNode, useEffect } from 'react';

import styles from 'src/components/atoms/Dimmer/styles.module.css';

export type Props = {
  inProgress: boolean;
  isDisabled?: boolean;
  onClose: () => void;
  zIndex?: number;
  children?: ReactNode;
};

export const Dimmer: React.FC<Props> = ({
  children,
  inProgress,
  isDisabled,
  onClose,
  zIndex = 100,
}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [inProgress]);

  return (
    <div
      className={classNames(styles.dimmer, {
        [styles.dimmer__hide]: inProgress,
        [styles.dimmer__disabled]: isDisabled,
      })}
      style={{ zIndex }}
      onClick={isDisabled ? undefined : onClose}
    >
      {children}
    </div>
  );
};
