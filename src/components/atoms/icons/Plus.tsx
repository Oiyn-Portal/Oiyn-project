import React from 'react';

type Props = {
  color: 'white' | 'gray';
};

export const Plus: React.FC<Props> = ({ color }) => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path
      d="M5.25 5.25V0.75H6.75V5.25H11.25V6.75H6.75V11.25H5.25V6.75H0.75V5.25H5.25Z"
      fill={`var(${
        color === 'white' ? '--COLOR_FOREGROUND' : '--COLOR_SUBTEXT'
      } )`}
    />
  </svg>
);
