import { put, takeEvery } from 'redux-saga/effects';
import { Action } from 'typescript-fsa';

import { actions } from 'src/actions';
import { PAGES } from 'src/constants/pages';
import { redirect } from 'src/navigation';
import { Actions, ID, Scheme } from 'src/types';

type Extra = {
  isRedirect: boolean;
  orderUID: ID;
};

const actionToRedirectSchema: Record<
  string,
  (params: { orderUID: ID }) => Scheme
> = {
  [actions.api.appointments.addAppointment.done.type]: ({ orderUID }) => ({
    scheme: PAGES.MAIN,
    params: {
      orderUID,
    },
  }),
  [actions.api.client.phoneVerifyEnd.done.type]: ({ orderUID }) => ({
    scheme: PAGES.MAIN,
    params: {
      orderUID,
    },
  }),
};

function handleEvent(
  action: Action<Actions.ui.redirect.redirectWithoutParams>
) {
  redirect(action.payload);
}

function* createEvent(action: Action<{ params: { extra: Extra } }>) {
  const { isRedirect, orderUID } = action.payload.params.extra;

  if (!isRedirect) {
    return;
  }

  yield put(
    actions.ui.redirects.redirectWithoutParams(
      actionToRedirectSchema[action.type]({ orderUID })
    )
  );
}

export function* redirectsSaga(): Generator {
  yield takeEvery(Object.keys(actionToRedirectSchema), createEvent);

  yield takeEvery(actions.ui.redirects.redirectWithoutParams.type, handleEvent);
}
