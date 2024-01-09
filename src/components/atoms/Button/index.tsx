import React from 'react';

import { Msg, MsgProps } from 'src/i18n/Msg';

import styles from 'src/components/atoms/Button/styles.module.css';

type Props = {
  text: MsgProps;
  onClick: () => void;
};

export const Button: React.FC<Props> = ({ text, onClick }) => (
  <button onClick={onClick} className={styles.button}>
    <Msg {...text} />
  </button>
);
