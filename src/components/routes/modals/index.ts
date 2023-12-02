import React from 'react';

import {
  BusySlotModal,
  Props as BusySlotProps,
} from 'src/components/routes/modals/BusySlotModal';

export type MODALS = keyof Props;

export type Modals = {
  [P in MODALS]: { name: P; data: Props[P] };
}[MODALS];

type Props = {
  BusySlotModal: BusySlotProps;
};
export const modals: {
  [P in MODALS]: React.FC<Props[P]>;
} = {
  BusySlotModal,
};
