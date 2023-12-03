import { AllEffect, CallEffect, all, call } from 'redux-saga/effects';

import { ajaxSaga } from 'src/sagas/ajax';
import { redirectsSaga } from 'src/sagas/redirects';

const sagas = [ajaxSaga, redirectsSaga];

export function* rootSaga(): Generator<AllEffect<CallEffect<unknown>>, void> {
  yield all(sagas.map((saga) => call(saga)));
}
