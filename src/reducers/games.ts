import { reducerWithInitialState } from 'typescript-fsa-reducers';

import { actions } from 'src/actions';
import { Game } from 'src/types';
import { getArrayWitchValue } from 'src/utils/reducer';

export type State = {
  data: Game[];
  currentGame?: Game;
  searchSettings: {
    searchWord: string;
    categories: string[];
  };
  isFetching: boolean;
};

const initialState: State = {
  data: [],
  searchSettings: {
    searchWord: '',
    categories: [],
  },
  isFetching: false,
};

const reducer = reducerWithInitialState<State>(initialState)
  .case(
    actions.api.games.getGames.started,
    (state): State => ({
      ...state,
      isFetching: true,
    })
  )
  .case(
    actions.api.games.getGames.done,
    (state, { params, result }): State => ({
      ...state,
      [params.extra.field]:
        params.extra.field === 'data' ? result.records : result.records[0],
      isFetching: false,
    })
  )
  .case(
    actions.api.games.getGames.failed,
    (state): State => ({
      ...state,
      isFetching: false,
    })
  )
  .case(
    actions.ui.games.setCategories,
    (state, payload): State => ({
      ...state,
      searchSettings: {
        ...state.searchSettings,
        categories: getArrayWitchValue(
          state.searchSettings.categories,
          payload
        ),
      },
    })
  )
  .case(
    actions.ui.games.setSearchWord,
    (state, payload): State => ({
      ...state,
      searchSettings: {
        ...state.searchSettings,
        searchWord: payload,
      },
    })
  );

export const games = { initialState, reducer };
