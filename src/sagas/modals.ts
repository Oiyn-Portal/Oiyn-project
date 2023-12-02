import { put, takeEvery } from 'redux-saga/effects';
import { Action, Failure } from 'typescript-fsa';

import { actions } from 'src/actions';
import { Modals } from 'src/components/routes/modals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const errorToModal: Record<string, (params: any) => Modals> = {
  'The booking already exists': (params) => ({
    name: 'BusySlotModal',
    data: {
      orderUID: params.extra.orderUID,
    },
  }),
};

function* showModal(action: Action<Failure<unknown, unknown>>) {
  const { params, error } = action.payload;

  yield put(actions.ui.modal.show(errorToModal[error as string](params)));
}

export function* modalsSaga(): Generator {
  yield takeEvery([actions.api.appointments.addAppointment.failed], showModal);
}
