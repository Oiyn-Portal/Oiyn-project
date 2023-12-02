import { Modals } from 'src/components/routes/modals';
import { Actions } from 'src/types';
import { actionCreator } from 'src/utils/factories';

export const booking = {
  clearBooking: actionCreator<Actions.ui.booking.clearBooking>(
    'BOOKING_CLEAR_BOOKING'
  ),
  setServices: actionCreator<Actions.ui.booking.setServices>(
    'BOOKING_SET_SERVICES'
  ),
  setAttachments: actionCreator<Actions.ui.booking.setAttachments>(
    'BOOKING_SET_ATTACHMENTS'
  ),
  setTimeDate: actionCreator<Actions.ui.booking.setTimeDate>(
    'BOOKING_SET_TIME_DATE'
  ),
  createBooking: actionCreator<Actions.ui.booking.createBooking>(
    'BOOKING_CREATE_BOOKING'
  ),
  setClientDeposit: actionCreator<Actions.ui.booking.setClientDeposit>(
    'BOOKING_SET_CLIENT_DEPOSIT'
  ),
};

export const files = {
  removeImage:
    actionCreator<Actions.ui.files.removeImage>('FILES_REMOVE_IMAGE'),
};

export const messages = {
  resetMessages: actionCreator<Actions.ui.messages.resetMessages>(
    'UI_MESSAGES_RESET_MESSAGES'
  ),
};

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

export const client = {
  updateContact: actionCreator<Actions.ui.client.updateContact>(
    'UI_CLIENT_UPDATE_CONTACT'
  ),
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
