import { Modals } from 'src/components/routes/modals';
import { Actions } from 'src/types';
import { actionCreator } from 'src/utils/factories';

export const notifications = {
  addNotification: actionCreator<Actions.ui.notifications.AddNotification>(
    'UI_NOTIFICATIONS_ADD_NOTIFICATION'
  ),
  deleteNotification:
    actionCreator<Actions.ui.notifications.DeleteNotification>(
      'UI_NOTIFICATION_DELETE_NOTIFICATION'
    ),
};

export const geoInfo = {
  set: actionCreator<Actions.ui.geoInfo.set>('GEO_INFO_SET'),
};

export const gtm = {
  event: actionCreator<Actions.ui.gtm.event>('UI_GTM_EVENT'),
};

export const loader = {
  show: actionCreator<Actions.ui.loader.show>('UI_LOADER_SHOW'),
  hide: actionCreator<Actions.ui.loader.hide>('UI_LOADER_HIDE'),
};

export const redirects = {
  redirectWithoutParams:
    actionCreator<Actions.ui.redirect.redirectWithoutParams>(
      'UI_REDIRECTS_REDIRECT_WITHOUT_PARAMS'
    ),
};

export const modal = {
  show: actionCreator<Actions.ui.modal.show<Modals>>('UI_MODAl_SHOW'),
  hide: actionCreator<Actions.ui.modal.hide>('UI_MODAl_HIDE'),
};

export const games = {
  setCategories: actionCreator<Actions.ui.games.setCategories>(
    'UI_GAMES_SET_CATEGORIES'
  ),
  setSearchWord: actionCreator<Actions.ui.games.setSearchWord>(
    'UI_GAMES_SET_SEARCH_WORD'
  ),
};
