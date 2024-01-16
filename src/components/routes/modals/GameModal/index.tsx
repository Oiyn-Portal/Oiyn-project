import React from 'react';

import styles from 'src/components/routes/modals/GameModal/styles.module.css';

const screens = {
  mobile: {
    width: 375,
    height: 600,
  },
  desc: {
    width: window.screen.width / 1.5,
    height: window.screen.height / 1.5,
  },
};

export type Props = {
  pathToGame: string;
  mode: 'mobile' | 'desc';
};

export const GameModal: React.FC<Props> = ({ pathToGame, mode }) => {
  const { width, height } = screens[mode];

  return (
    <iframe
      width={width}
      height={height}
      className={styles.iframe}
      src={pathToGame}
      title="Game"
    />
  );
};
