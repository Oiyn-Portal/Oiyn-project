import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { defaultLocale } from 'src/i18n';
import { GeoInfo } from 'src/types';

export type State = {
  data?: {
    name: string;
  };
  geoInfo: GeoInfo;
};

const initialState: State = {
  data: undefined,
  geoInfo: {
    locale: defaultLocale,
  },
};

const reducer = reducerWithInitialState<State>(initialState).case(
  actions.ui.geoInfo.set,
  (state, { info }): State => ({
    ...state,
    geoInfo: info,
  })
);

export const user = { initialState, reducer };
