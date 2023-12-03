import { ENDPOINTS } from 'src/constants/api';
import { Actions } from 'src/types';
import { actionCreatorAsyncWithHandler } from 'src/utils/factories';

export const games = {
  getGames: actionCreatorAsyncWithHandler<
    Actions.api.games.getGames.started,
    Actions.api.games.getGames.done
  >({
    url: ENDPOINTS.LIST_RECORDS,
    method: 'POST',
    extra: {
      hideErrorNotification: true,
    },
  }),
};
