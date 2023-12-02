import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { Notification } from 'src/types';
import { handleMessages, removeMessage } from 'src/utils/reducer';

export type State = {
  data: Notification[];
  success?: 'successfully';
};

const initialState: State = {
  data: [],
  success: undefined,
};

const reducer = reducerWithInitialState<State>(initialState)
  .case(
    actions.ui.notifications.addNotification,
    (state, payload): State => ({
      ...state,
      data: handleMessages(payload, state.data),
    })
  )
  .case(
    actions.ui.notifications.deleteNotification,
    (state, payload): State => ({
      ...state,
      data: removeMessage(state.data, payload.id),
    })
  )
  .case(
    actions.ui.messages.resetMessages,
    (state): State => ({
      ...state,
      success: undefined,
    })
  );

export const notifications = { initialState, reducer };
