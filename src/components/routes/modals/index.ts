import React from 'react';

import {
  BusySlotModal,
  Props as BusySlotProps,
} from 'src/components/routes/modals/BusySlotModal';
import {
  GameModal,
  Props as GameModalProps,
} from 'src/components/routes/modals/GameModal';

export type MODALS = keyof Props;

export type Modals = {
  [P in MODALS]: { name: P; data: Props[P] };
}[MODALS];

type Props = {
  BusySlotModal: BusySlotProps;
  GameModal: GameModalProps;
};
export const modals: {
  [P in MODALS]: React.FC<Props[P]>;
} = {
  BusySlotModal,
  GameModal,
};
