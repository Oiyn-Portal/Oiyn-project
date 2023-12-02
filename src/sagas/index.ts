import { AllEffect, CallEffect, all, call } from 'redux-saga/effects';

import { ajaxSaga } from 'src/sagas/ajax';
import { loaderSaga } from 'src/sagas/loader';
import { modalsSaga } from 'src/sagas/modals';
import { redirectsSaga } from 'src/sagas/redirects';
import { userSaga } from 'src/sagas/user';

const sagas = [ajaxSaga, userSaga, loaderSaga, redirectsSaga, modalsSaga];

export function* rootSaga(): Generator<AllEffect<CallEffect<unknown>>, void> {
  yield all(sagas.map((saga) => call(saga)));
}
