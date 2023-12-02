import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { Attachments, Message } from 'src/types';

export type State = {
  message?: Message;
  label: string;
  data: Attachments['files'];
  isLoading: {
    label: string;
    state: boolean;
  };
};

const initialState: State = {
  message: undefined,
  label: '',
  data: {},
  isLoading: {
    label: '',
    state: false,
  },
};

const reducer = reducerWithInitialState<State>(initialState)
  .cases(
    [
      actions.api.files.uploadImage.started,
      actions.api.files.uploadDeposit.started,
    ],
    (state, { currentLabel }): State => ({
      ...state,
      message: undefined,
      label: currentLabel,
      isLoading: {
        label: currentLabel,
        state: true,
      },
    })
  )
  .case(
    actions.api.files.uploadImage.done,
    (state, payload): State => ({
      ...state,
      message: payload.result.message,
      data: {
        ...state.data,
        [state.label]: payload.result.image,
      },
      isLoading: {
        label: '',
        state: false,
      },
    })
  )
  .case(
    actions.api.files.uploadDeposit.done,
    (state, payload): State => ({
      ...state,
      message: payload.result.message,
      data: {
        ...state.data,
        [state.label]: payload.result.file,
      },
      isLoading: {
        label: '',
        state: false,
      },
    })
  )
  .cases(
    [
      actions.api.files.uploadImage.failed,
      actions.api.files.uploadDeposit.failed,
    ],
    (state): State => ({
      ...state,
      isLoading: {
        label: '',
        state: false,
      },
    })
  )
  .case(
    actions.ui.files.removeImage,
    (state, { currentLabel }): State => ({
      ...state,
      data: {
        ...state.data,
        [currentLabel]: '',
      },
    })
  )
  .case(
    actions.ui.booking.clearBooking,
    (state): State => ({
      ...state,
      data: {},
    })
  )
  .case(
    actions.ui.messages.resetMessages,
    (state): State => ({
      ...state,
      message: undefined,
    })
  )
  .case(
    actions.ui.booking.clearBooking,
    (state): State => ({
      ...state,
      ...initialState,
    })
  );

export const files = { initialState, reducer };
